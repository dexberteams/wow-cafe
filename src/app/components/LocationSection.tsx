
"use client";

import React from "react";
import { MapPin, Clock, MessageSquare, Navigation, ArrowUpRight } from "lucide-react";

const LocationSection = () => {
  return (
    <section
      id="contact"
      className="relative w-full py-24 sm:py-32 bg-stone-950 text-stone-200 overflow-hidden font-sans border-t border-white/5"
    >
      {/* Background Decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#4A5952]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#8BA196]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">

        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-[#8BA196] font-serif text-[11px] font-bold tracking-widest uppercase block mb-3 animate-fade-in">
            Visit Our Space
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4 animate-fade-in-delayed">
            Our Location
          </h2>
          <div className="w-16 h-1 bg-[#4A5952] rounded-full mt-4" />
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* Left Column: Interactive Map */}
          <div className="lg:col-span-7 group relative flex flex-col h-[380px] sm:h-[480px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)] transition-all duration-500 hover:border-[#8BA196]/30">
            {/* Smooth transition overlay boundary */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/20 via-transparent to-transparent pointer-events-none z-10" />

            {/* The Google Map iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.9261338247543!2d47.1649929!3d24.3142115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ff515c42d7f9f%3A0xccc40062171d0d6!2zV09XIENBRkUgfCDZiNin2Ygg2YPYp9mB2YrYqQ!5e0!3m2!1sen!2sbd!4v1779508433783!5m2!1sen!2sbd"
              className="w-full h-full border-0 grayscale saturate-50 contrast-125 opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="WOW Cafe Location Map"
            />
          </div>

          {/* Right Column: Location Details */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-stone-900/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:bg-stone-900/50 transition-all duration-300">

            <div className="space-y-8">

              {/* Branch Header */}
              <div>
                <div className="inline-flex items-center gap-2 bg-[#4A5952]/10 border border-[#8BA196]/20 px-3.5 py-1.5 rounded-full mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-[#8BA196] uppercase tracking-wider">Main Branch</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-wide">
                  WOW CAFE | واو كافية
                </h3>
              </div>

              {/* Information Rows */}
              <div className="space-y-6">

                {/* Address Row */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-stone-800/80 border border-white/5 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#8BA196]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Address</h4>
                    <p className="text-sm sm:text-base text-stone-200 font-light leading-relaxed">
                      King Abdulaziz Rd, Kharj 14389,<br />Saudi Arabia
                    </p>
                  </div>
                </div>

                {/* Hours Row */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-stone-800/80 border border-white/5 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#8BA196]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Hours</h4>
                    <p className="text-sm sm:text-base text-stone-200 font-semibold tracking-wide">
                      Open 24 hours
                    </p>
                    <p className="text-xs text-[#8BA196] mt-0.5 font-light">Always here to serve you</p>
                  </div>
                </div>

              </div>

            </div>

            {/* CTA Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              <a
                href="https://www.google.com/maps/place/WOW+CAFE+%7C+%D9%88%D8%A7%D9%88+%D9%83%D8%A7%D9%81%D9%8A%D8%A9/@24.3142115,47.1649929,17z/data=!3m1!4b1!4m6!3m5!1s0x3e2ff515c42d7f9f:0xccc40062171d0d6!8m2!3d24.3142115!4d47.1649929!16s%2Fg%2F11w2_3mrg0?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 bg-[#4A5952] hover:bg-[#5b6e65] text-white py-3.5 px-5 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_15px_rgba(74,89,82,0.3)] hover:shadow-[0_6px_20px_rgba(74,89,82,0.4)]"
              >
                <Navigation className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <span>Get Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                href="https://wa.me/qr/FFKEFHGBUVRZI1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-stone-700 hover:border-[#8BA196] bg-stone-850 hover:bg-[#4A5952]/10 text-stone-100 py-3.5 px-5 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="w-4 h-4 text-[#8BA196]" />
                <span>WhatsApp Us</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default LocationSection;




