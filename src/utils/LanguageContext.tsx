"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language } from "./translations";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getNestedValue = (obj: any, path: string): any => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en");
  const [isMounted, setIsMounted] = useState(false);

  // Load language on client-side mount
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Language;
    if (savedLang === "en" || savedLang === "ar") {
      setLanguageState(savedLang);
    }
    setIsMounted(true);
  }, []);

  // Update HTML elements when language changes
  useEffect(() => {
    if (!isMounted) return;
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    localStorage.setItem("lang", language);
  }, [language, isMounted]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === "en" ? "ar" : "en"));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string, vars?: Record<string, string | number>): string => {
    // If not mounted yet (during SSR or hydration), default to English or key
    const currentLang = isMounted ? language : "en";
    const val = getNestedValue(translations[currentLang], key);
    if (typeof val !== "string") {
      // Fallback to English value
      const fallbackVal = getNestedValue(translations["en"], key);
      if (typeof fallbackVal === "string") {
        return fallbackVal;
      }
      return key;
    }
    if (!vars) return val;
    return Object.entries(vars).reduce((acc, [k, v]) => {
      return acc.replace(new RegExp(`{${k}}`, "g"), String(v));
    }, val);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
