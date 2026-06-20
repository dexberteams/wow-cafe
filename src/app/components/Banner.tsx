"use client";

import { Star, Coffee, ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";

interface BannerOneProps {
  heading?: string;
  subheading?: string;
  ratingText?: string;
  reviewsText?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
}

const BannerOne: React.FC<BannerOneProps> = ({
  heading = "Choose quality over quantity!",
  subheading = "Experience handcrafted coffee and unforgettable moments at WOW Cafe.",
  primaryCtaText = "Explore Menu",
  secondaryCtaText = "Visit Us",
  onPrimaryCtaClick,
  onSecondaryCtaClick,
}) => {
  return (
    <section className="relative w-full h-[300px] lg:h-[500px]  flex items-center justify-center overflow-hidden font-sans bg-stone-950">
      {/* Background Image - Clean, bright, and clearly highlighted */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/banner/banner1.jpeg"
          alt="WOW Cafe Background"
          fill
          priority
          className="object-cover object-center transition-transform duration-10000 hover:scale-105 brightness-110 contrast-105 saturate-[1.05] h-[300px] lg:h-[500px]"
        />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent sm:from-black/70 sm:via-black/35 sm:to-transparent" />{" "}
      {/* Background Arabic 'و' Watermark - Elegant branding element in lower-right */}
      <div className="absolute right-[-5%] bottom-[-5%] sm:right-[2%] sm:bottom-[2%] select-none pointer-events-none opacity-10 sm:opacity-25 transform translate-y-4 sm:translate-y-0 z-0">
        <span
          className="text-[180px] sm:text-[400px] font-serif leading-none text-[#8BA196] filter drop-shadow-[0_0_40px_rgba(74,89,82,0.2)]"
          style={{ fontFamily: "'Times New Roman', serif" }}
        >
          و
        </span>
      </div>
      {/* Main Content Container (Mobile-first layout) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto md:px-5 md:py-10  flex flex-col justify-between ">
        {/* Hero Text Copy Area */}
        <div className="max-w-2xl mt-4 sm:mt-0">
          <h1 className="text-3xl sm:text-6xl font-bold tracking-tight text-white leading-[1.15]  sm:mb-6 drop-shadow-[0_2px_15px_rgba(0,0,0,0.5)] font-serif">
            {heading.split(" ").map((word, index) => {
              const isHighlight =
                word.toLowerCase().includes("quality") ||
                word.toLowerCase().includes("quantity!");
              return (
                <span
                  key={index}
                  className={
                    isHighlight
                      ? "text-[#8BA196] drop-shadow-[0_2px_10px_rgba(139,161,150,0.2)]"
                      : ""
                  }
                >
                  {word}{" "}
                </span>
              );
            })}
          </h1>

          <p className="text-sm sm:text-lg text-stone-200 font-light leading-relaxed  sm:mb-8 max-w-xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
            {subheading}
          </p>
        </div>

        {/* Premium Stats Grid (Bottom row as in your screenshot) */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-1">
            <span className="text-[#8BA196] font-serif text-[11px] font-bold tracking-widest uppercase">
              Origin
            </span>
            <span className="text-white text-sm font-semibold tracking-wide">
              100% Single Origin Arabica
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[#8BA196] font-serif text-[11px] font-bold tracking-widest uppercase">
              Roast
            </span>
            <span className="text-white text-sm font-semibold tracking-wide">
              Handcrafted Medium Roast
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[#8BA196] font-serif text-[11px] font-bold tracking-widest uppercase">
              Experience
            </span>
            <span className="text-white text-sm font-semibold tracking-wide">
              Cozy Coffee Shop Atmosphere
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerOne;
