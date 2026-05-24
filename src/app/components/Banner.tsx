"use client";

import React from "react";
import { Star, Coffee, ArrowRight, MapPin } from "lucide-react";

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
    ratingText = "4.8/5 Rating",
    reviewsText = "1200+ Reviews",
    primaryCtaText = "Explore Menu",
    secondaryCtaText = "Visit Us",
    onPrimaryCtaClick,
    onSecondaryCtaClick,
}) => {
    return (
        <section className="relative w-full min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden font-sans bg-stone-950">

            {/* Background Image - Clean, bright, and clearly highlighted */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 hover:scale-105 brightness-110 contrast-105 saturate-[1.05]"
                style={{ backgroundImage: `url('/assets/banner/banner1.jpeg')` }}
            />


            {/* <div className="absolute inset-0 bg-black/30" /> Soft global shade to keep white text readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" /> {/* Left-aligned text protection */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />  */}



            {/* Background Arabic 'و' Watermark - Elegant branding element in lower-right */}
            <div className="absolute right-[-5%] bottom-[-5%] sm:right-[2%] sm:bottom-[2%] select-none pointer-events-none opacity-20 sm:opacity-25 transform translate-y-4 sm:translate-y-0">
                <span
                    className="text-[250px] sm:text-[400px] font-serif leading-none text-[#8BA196]/30 filter drop-shadow-[0_0_40px_rgba(74,89,82,0.2)]"
                    style={{ fontFamily: "'Times New Roman', serif" }}
                >
                    و
                </span>
            </div>

            {/* Main Content Container (Mobile-first layout) */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 sm:px-12 flex flex-col justify-between min-h-[90vh] sm:min-h-screen">

                {/* Top Spacer / Spacer for structure */}
                <div className="h-0 sm:h-12" />

                {/* Hero Text Copy Area */}
                <div className="max-w-2xl mt-10 sm:mt-0">

                    {/* Rating Badge */}
                    <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md border border-stone-750 rounded-full px-3.5 py-1.5 w-fit mb-6 shadow-lg">
                        <div className="flex items-center text-amber-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3.5 h-3.5 fill-current" />
                            ))}
                        </div>
                        <span className="text-xs font-semibold text-stone-100">
                            {ratingText}
                        </span>
                        <span className="h-3 w-px bg-stone-700" />
                        <span className="text-xs text-stone-400 font-light">
                            {reviewsText}
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6 drop-shadow-[0_2px_15px_rgba(0,0,0,0.5)] font-serif">
                        {heading.split(" ").map((word, index) => {
                            const isHighlight = word.toLowerCase().includes("quality") || word.toLowerCase().includes("quantity!");
                            return (
                                <span key={index} className={isHighlight ? "text-[#8BA196] drop-shadow-[0_2px_10px_rgba(139,161,150,0.2)]" : ""}>
                                    {word}{" "}
                                </span>
                            );
                        })}
                    </h1>

                    <p className="text-base sm:text-lg text-stone-200 font-light leading-relaxed mb-8 max-w-xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
                        {subheading}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                        <button
                            onClick={onPrimaryCtaClick}
                            className="group relative flex items-center justify-center gap-2 bg-[#4A5952] hover:bg-[#5b6e65] text-white px-8 py-4 rounded-xl font-medium shadow-[0_4px_25px_rgba(74,89,82,0.4)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                        >
                            <Coffee className="w-4 h-4 transition-transform group-hover:rotate-12" />
                            <span>{primaryCtaText}</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>

                        <button
                            onClick={onSecondaryCtaClick}
                            className="flex items-center justify-center gap-2 border border-stone-500 hover:border-[#8BA196] bg-black/25 hover:bg-white/10 text-stone-100 px-8 py-4 rounded-xl font-medium backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                        >
                            <MapPin className="w-4 h-4 text-stone-300" />
                            <span>{secondaryCtaText}</span>
                        </button>
                    </div>
                </div>

                {/* Premium Stats Grid (Bottom row as in your screenshot) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 border-t border-white/10 pt-8">
                    <div className="flex flex-col gap-1">
                        <span className="text-[#8BA196] font-serif text-[11px] font-bold tracking-widest uppercase">Origin</span>
                        <span className="text-white text-sm font-semibold tracking-wide">100% Single Origin Arabica</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-[#8BA196] font-serif text-[11px] font-bold tracking-widest uppercase">Roast</span>
                        <span className="text-white text-sm font-semibold tracking-wide">Handcrafted Medium Roast</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-[#8BA196] font-serif text-[11px] font-bold tracking-widest uppercase">Experience</span>
                        <span className="text-white text-sm font-semibold tracking-wide">Cozy Coffee Shop Atmosphere</span>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default BannerOne;
