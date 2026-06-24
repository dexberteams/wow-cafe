"use client";
import { Globe, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../../utils/LanguageContext";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Left Side: Logo & Cafe Name */}
        <Link href="/" className="flex items-center">
          <div className="relative w-10 h-10 lg:w-12 lg:h-12">
            <Image
              src="/assets/wow-l.png"
              alt="WOW Cafe Logo"
              fill
              sizes="48px"
              className="object-contain"
            />
          </div>
          <span className="text-xl md:text-2xl font-bold text-primary font-[family-name:var(--font-dm-serif)] ms-2">
            {t("common.cafeName")}
          </span>
        </Link>

        {/* Right Side: Language Dropdown */}
        <div className="flex items-center relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-soft-bg transition-all duration-300 text-sm font-semibold text-primary border-2 border-primary cursor-pointer"
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
          >
            <Globe className="w-4 h-4" />
            <span>{language === "en" ? "EN" : "AR"}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute top-full end-0 mt-2 w-36 rounded-lg bg-white border border-gray-100 shadow-lg py-1 z-50">
              <button
                onClick={() => {
                  setLanguage("en");
                  setDropdownOpen(false);
                }}
                className={`w-full text-start px-4 py-2.5 text-sm transition-colors cursor-pointer flex items-center justify-between ${
                  language === "en"
                    ? "bg-primary/10 text-primary font-bold"
                    : "text-foreground hover:bg-soft-bg"
                }`}
              >
                <span>English</span>
                {language === "en" && <span className="text-xs">✓</span>}
              </button>
              <button
                onClick={() => {
                  setLanguage("ar");
                  setDropdownOpen(false);
                }}
                className={`w-full text-start px-4 py-2.5 text-sm transition-colors cursor-pointer flex items-center justify-between ${
                  language === "ar"
                    ? "bg-primary/10 text-primary font-bold"
                    : "text-foreground hover:bg-soft-bg"
                }`}
              >
                <span>العربية</span>
                {language === "ar" && <span className="text-xs">✓</span>}
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

