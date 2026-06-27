"use client";

import React from "react";
import { useLanguage } from "../../utils/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-6 py-20 min-h-[50vh] flex items-center justify-center">
      <p className="text-xl font-semibold text-primary font-[family-name:var(--font-dm-serif)]">
        {t("about.aboutText")}
      </p>
    </div>
  );
};

export default About;

