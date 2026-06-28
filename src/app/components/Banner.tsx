"use client";

import { useLanguage } from "../../utils/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import { Star, Globe } from "lucide-react";

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

const BannerOne: React.FC<BannerOneProps> = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full h-[400px] lg:h-[600px] flex items-center justify-center overflow-hidden font-sans bg-white">
      {/* Background Image - Contains white background and product image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/banner/banner-final.jpg"
          alt="WOW Cafe Banner"
          fill
          priority
          className="object-cover object-right md:object-center w-full h-full max-md:-translate-y-24"
        />
      </div>

      {/* Social Icons (Left Side) */}
      <div className="absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-3">
        <Link href="#" className="w-8 h-8 lg:w-10 lg:h-10 bg-[#4A5952] rounded-full flex items-center justify-center text-white hover:bg-[#38423c] transition-colors">
          <svg className="w-4 h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
          </svg>
        </Link>
        <Link href="#" className="w-8 h-8 lg:w-10 lg:h-10 bg-[#4A5952] rounded-full flex items-center justify-center text-white hover:bg-[#38423c] transition-colors">
          <Globe className="w-4 h-4 lg:w-5 lg:h-5" />
        </Link>
        <Link href="#" className="w-8 h-8 lg:w-10 lg:h-10 bg-[#4A5952] rounded-full flex items-center justify-center text-white hover:bg-[#38423c] transition-colors">
          <svg className="w-4 h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.11.25a6.47 6.47 0 0 0-6.19 6c-.05.58-.1 1.15-.17 1.72-.07.49-.14 1-.22 1.48-.23 1.25-.53 2.47-1.15 3.58a.46.46 0 0 1-.57.17c-.9-.4-1.78-.85-2.65-1.31-.38-.2-.79-.34-1.16-.04-.37.31-.22.75-.02 1.12a23.85 23.85 0 0 0 3.32 4.14c.22.21.36.46.33.77-.07.63-.53 1.07-1 1.42-.64.47-1.32.9-2 1.34-.33.22-.54.51-.55.9 0 .5.3.83.74.96a18.3 18.3 0 0 0 3.51.52c.62.05 1.25.07 1.87.1 1.12.06 1.83.65 2 1.76.08.57.13 1.14.2 1.7.07.44.42.66.86.66 1.19-.01 2.37.1 3.55 0 .42 0 .74-.2.83-.62.08-.54.13-1.09.2-1.63.15-1.15.91-1.75 2.05-1.8 1.44-.06 2.87-.13 4.31-.26.54-.05 1.03-.17 1.37-.62.3-.41.3-.87.05-1.3-.7-.68-1.46-1.3-2.15-2-.45-.44-.82-.93-.9-1.57-.06-.51.13-.88.5-1.15.7-.53 1.45-1.02 2.18-1.54.41-.29.56-.67.4-1.1-.18-.46-.57-.59-1-.53-.94.13-1.84.39-2.73.68-.42.14-.77.1-1.08-.22-1.36-1.41-2.15-3.14-2.58-5.07-.12-.55-.22-1.1-.3-1.66-.2-1.47-.73-2.79-1.79-3.8A6.3 6.3 0 0 0 12.11.25z" />
          </svg>
        </Link>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-12 flex flex-col justify-center items-center text-center">
        {/* Badge */}
        <div className="flex items-center gap-2 bg-[#4A5952] text-white px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium mb-4">
          <Star className="w-3.5 h-3.5 fill-white text-white" />
          <span>4.8/5 Rating | 1200+ Reviews</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#4A5952] leading-[1.1] mb-4 font-sans">
          {t("banner.heading") || "Choose Quality"}
        </h1>

        {/* Subheading */}
        <p className="text-sm sm:text-base lg:text-lg text-[#5c6861] font-medium leading-relaxed max-w-[300px] lg:max-w-sm text-center mx-auto">
          {t("banner.subheading") || "Experience handcrafted coffee and unforgettable moments at WOW Cafe"}
        </p>
      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-6 left-0 w-full px-4 lg:px-12 z-10 pointer-events-none">
        <div className="flex items-center justify-center gap-4 max-w-7xl mx-auto">
          <div className="h-[1px] bg-[#4A5952] flex-grow opacity-50"></div>
          <span className="text-[#4A5952] font-medium text-xs lg:text-sm lowercase tracking-[0.2em] whitespace-nowrap">
            wow specialist cafe
          </span>
          <div className="h-[1px] bg-[#4A5952] flex-grow opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default BannerOne;

