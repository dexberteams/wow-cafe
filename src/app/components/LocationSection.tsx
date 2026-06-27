"use client";

import React from "react";
import {
  MapPin,
  Clock,
  MessageSquare,
  Navigation,
  ArrowUpRight,
} from "lucide-react";
import { useLanguage } from "../../utils/LanguageContext";

const LocationSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="relative w-full py-12 lg:py-24 sm:py-32 text-primary overflow-hidden font-sans border-t border-white/5"
    >
      {/* Background Decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#4A5952]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#8BA196]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Section Heading */}
        <div className=" text-center mb-4 sm:mb-20">
          <span className=" text-[10px] font-bold tracking-widest uppercase block mb-1 animate-fade-in">
            {t("location.visitOurSpace")}
          </span>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 animate-fade-in-delayed font-[family-name:var(--font-dm-serif)]">
            {t("location.ourLocation")}
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Interactive Map */}
          <div className="lg:col-span-7 group relative flex flex-col h-[300px] sm:h-[400px] rounded-lg overflow-hidden border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)] transition-all duration-500 hover:border-[#8BA196]/30">
            {/* Smooth transition overlay boundary */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/20 via-transparent to-transparent pointer-events-none z-10" />

            {/* The Google Map iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.9261338247543!2d47.1649929!3d24.3142115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ff515c42d7f9f%3A0xccc40062171d0d6!2zV09XIENBRkUgfCDZiNin2Ygg2YPYp9mB2YrYqQ!5e0!3m2!1sen!2sbd!4v1779508433783!5m2!1sen!2sbd"
              className="w-full h-full border-0 grayscale saturate-50 contrast-125 opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t("location.ourLocation")}
            />
          </div>

          {/* Right Column: Location Details */}
          <div className="lg:col-span-5 flex flex-col justify-between border-2 border-primary rounded-lg p-3 sm:p-10 s transition-all duration-300">
            <div className="space-y-8">
              {/* Branch Header */}
              <div>
                <div className="inline-flex items-center gap-2  border border-primary px-3.5 py-1.5 rounded-full mb-4 font-[family-name:var(--font-dm-serif)]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {t("location.mainBranch")}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-dm-serif)]">
                  <span className="text-5xl align-middle">و</span> {t("common.cafeName")}
                </h3>
              </div>

              {/* Information Rows */}
              <div className="space-y-3 lg:space-y-6 font-[family-name:var(--font-nunito)]">
                {/* Address Row */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-stone-800/80 border border-white/5 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-700 uppercase tracking-widest">
                      {t("location.addressLabel")}
                    </h4>
                    <p className="text-xs sm:text-base text-gray-500 font-light leading-relaxed">
                      {t("location.addressVal")}
                    </p>
                  </div>
                </div>

                {/* Hours Row */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-stone-800/80 border border-white/5 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-700 uppercase tracking-widest">
                      {t("location.hoursLabel")}
                    </h4>
                    <p className="text-xs sm:text-base text-gray-500 font-semibold tracking-wide">
                      {t("location.hoursVal")}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5 font-light">
                      {t("location.hoursSub")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5 lg:mt-10">
              <a
                href="https://www.google.com/maps/place/WOW+CAFE+%7C+%D9%88%D8%A7%D9%88+%D9%83%D8%A7%D9%81%D9%8A%D8%A9/@24.3142115,47.1649929,17z/data=!3m1!4b1!4m6!3m5!1s0x3e2ff515c42d7f9f:0xccc40062171d0d6!8m2!3d24.3142115!4d47.1649929!16s%2Fg%2F11w2_3mrg0?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 bg-[#4A5952] hover:bg-[#5b6e65] text-white py-2 px-3 lg:py-3.5 lg:px-5 rounded-lg text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_15px_rgba(74,89,82,0.3)] hover:shadow-[0_6px_20px_rgba(74,89,82,0.4)] cursor-pointer"
              >
                <Navigation className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <span>{t("location.getDirections")}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                href="https://wa.me/qr/FFKEFHGBUVRZI1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-stone-700 hover:border-[#8BA196] bg-stone-850 hover:bg-[#4A5952]/10 text-primary py-2 px-3 lg:py-3.5 lg:px-5 rounded-lg text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-primary" />
                <span>{t("location.whatsappUs")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
