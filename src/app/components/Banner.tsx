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

    <section className="relative overflow-hidden bg-white h-[570px] md:h-[650px] lg:h-[720px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/banner/banner-final.jpg"
          alt="WOW Cafe Banner"
          fill
          priority
          className="
        object-cover
        object-[90%_90%]
        sm:object-[10%_50%]
        md:object-center
      "
        />
      </div>

      {/* Social Icons */}
      <div
        className="
      absolute
      left-2
      md:left-4
      lg:left-12
      top-1/2
      -translate-y-1/2
      z-20
      flex
      flex-col
      gap-2
      lg:gap-3
    "
      >
        <Link
          href="#"
          className="
        w-8 h-8
        lg:w-10 lg:h-10
        bg-[#4A5952]
        rounded-full
        flex
        items-center
        justify-center
        text-white
        transition-all
        duration-300
        hover:scale-110
        hover:bg-[#38423c]
      "
        >
          <svg className="w-4 h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
          </svg>
        </Link>

        <Link
          href="#"
          className="
        w-8 h-8
        lg:w-10 lg:h-10
        bg-[#4A5952]
        rounded-full
        flex
        items-center
        justify-center
        text-white
        transition-all
        duration-300
        hover:scale-110
        hover:bg-[#38423c]
      "
        >
          <Globe className="w-4 h-4 lg:w-5 lg:h-5" />
        </Link>

        <Link
          href="#"
          className="
        w-8 h-8
        lg:w-10 lg:h-10
        bg-[#4A5952]
        rounded-full
        flex
        items-center
        justify-center
        text-white
        transition-all
        duration-300
        hover:scale-110
        hover:bg-[#38423c]
      "
        >
          <svg className="w-4 h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.11.25a6.47 6.47 0 0 0-6.19 6c-.05.58-.1 1.15-.17 1.72-.07.49-.14 1-.22 1.48-.23 1.25-.53 2.47-1.15 3.58a.46.46 0 0 1-.57.17c-.9-.4-1.78-.85-2.65-1.31-.38-.2-.79-.34-1.16-.04-.37.31-.22.75-.02 1.12a23.85 23.85 0 0 0 3.32 4.14c.22.21.36.46.33.77-.07.63-.53 1.07-1 1.42-.64.47-1.32.9-2 1.34-.33.22-.54.51-.55.9 0 .5.3.83.74.96a18.3 18.3 0 0 0 3.51.52c.62.05 1.25.07 1.87.1 1.12.06 1.83.65 2 1.76.08.57.13 1.14.2 1.7.07.44.42.66.86.66 1.19-.01 2.37.1 3.55 0 .42 0 .74-.2.83-.62.08-.54.13-1.09.2-1.63.15-1.15.91-1.75 2.05-1.8 1.44-.06 2.87-.13 4.31-.26.54-.05 1.03-.17 1.37-.62.3-.41.3-.87.05-1.3-.7-.68-1.46-1.3-2.15-2-.45-.44-.82-.93-.9-1.57-.06-.51.13-.88.5-1.15.7-.53 1.45-1.02 2.18-1.54.41-.29.56-.67.4-1.1-.18-.46-.57-.59-1-.53-.94.13-1.84.39-2.73.68-.42.14-.77.1-1.08-.22-1.36-1.41-2.15-3.14-2.58-5.07-.12-.55-.22-1.1-.3-1.66-.2-1.47-.73-2.79-1.79-3.8A6.3 6.3 0 0 0 12.11.25z" />
          </svg>
        </Link>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 md:h-full items-center">
          <div></div>

          <div className="text-center lg:text-left mt-12 lg:mt-20">
            {/* Badge */}
            <div
              className="
            inline-flex
            items-center
            gap-2
            bg-[#4A5952]
            text-white
            px-4 md:px-6 lg:px-8
            py-2
            rounded-full
            text-xs
            md:text-sm
            lg:text-lg
            shadow-lg
            mb-4 lg:mb-6
          "
            >
              <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-white text-white" />
              <span>4.8/5 Rating | 1200+ Reviews</span>
            </div>

            {/* Heading */}
            <h1
              className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-7xl
            font-bold
            tracking-tight
            text-[#4A5952]
            leading-[1]
          "
            >
              Choose Quality
            </h1>

            {/* Description */}
            <p
              className="
            mt-4 lg:mt-6
            text-sm
            sm:text-base
            md:text-lg
            lg:text-xl
            text-[#59645D]
            max-w-xs
            sm:max-w-md
            lg:max-w-lg
            mx-auto
            lg:mx-0
          "
            >
              Experience handcrafted coffee and unforgettable moments at WOW Cafe
            </p>
          </div>
        </div>
      </div>


      {/* Bottom Line */}
      <div className="absolute bottom-4 lg:bottom-8 left-0 w-full px-4 lg:px-8 ">
        <div className="flex items-center gap-3 lg:gap-5">
          <div className="flex-1 h-[1px] bg-[#4A5952]" />

          <span
            className="
          text-[#4A5952]
          text-xs
          md:text-sm
          lg:text-lg
          tracking-[0.2em]
          uppercase
          whitespace-nowrap
        "
          >
            wow specialist cafe
          </span>

          <div className="flex-1 h-[1px] bg-[#4A5952]" />
        </div>
      </div>
    </section>
  );
};

export default BannerOne;


// <section className="relative overflow-hidden bg-white h-[470px] sm:h-[520px] md:h-[650px] lg:h-[720px]">
// {/* Background Image */}
// <div className="absolute inset-0 z-0">
//   <Image
//     src="/assets/banner/banner-final.jpg"
//     alt="WOW Cafe Banner"
//     fill
//     priority
//     className="
//       object-cover
//       object-[82%_35%]
//       sm:object-[80%_40%]
//       md:object-center
//     "
//   />
// </div>

//   {/* Social Icons - Desktop Only */}
//   <div
//     className="
//       hidden md:flex
//       absolute
//       left-4
//       lg:left-12
//       top-1/2
//       -translate-y-1/2
//       z-20
//       flex-col
//       gap-3
//     "
//   >
//     <Link
//       href="#"
//       className="
//         w-8 h-8
//         lg:w-10 lg:h-10
//         bg-[#4A5952]
//         rounded-full
//         flex
//         items-center
//         justify-center
//         text-white
//         hover:bg-[#38423c]
//         transition-all
//       "
//     >
//       <svg className="w-4 h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
//       </svg>
//     </Link>

//     <Link
//       href="#"
//       className="
//         w-8 h-8
//         lg:w-10 lg:h-10
//         bg-[#4A5952]
//         rounded-full
//         flex
//         items-center
//         justify-center
//         text-white
//         hover:bg-[#38423c]
//         transition-all
//       "
//     >
//       <Globe className="w-4 h-4 lg:w-5 lg:h-5" />
//     </Link>

//     <Link
//       href="#"
//       className="
//         w-8 h-8
//         lg:w-10 lg:h-10
//         bg-[#4A5952]
//         rounded-full
//         flex
//         items-center
//         justify-center
//         text-white
//         hover:bg-[#38423c]
//         transition-all
//       "
//     >
//       <svg className="w-4 h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M12.11.25a6.47 6.47 0 0 0-6.19 6c-.05.58-.1 1.15-.17 1.72-.07.49-.14 1-.22 1.48-.23 1.25-.53 2.47-1.15 3.58a.46.46 0 0 1-.57.17c-.9-.4-1.78-.85-2.65-1.31-.38-.2-.79-.34-1.16-.04-.37.31-.22.75-.02 1.12a23.85 23.85 0 0 0 3.32 4.14c.22.21.36.46.33.77-.07.63-.53 1.07-1 1.42-.64.47-1.32.9-2 1.34-.33.22-.54.51-.55.9 0 .5.3.83.74.96a18.3 18.3 0 0 0 3.51.52c.62.05 1.25.07 1.87.1 1.12.06 1.83.65 2 1.76.08.57.13 1.14.2 1.7.07.44.42.66.86.66 1.19-.01 2.37.1 3.55 0 .42 0 .74-.2.83-.62.08-.54.13-1.09.2-1.63.15-1.15.91-1.75 2.05-1.8 1.44-.06 2.87-.13 4.31-.26.54-.05 1.03-.17 1.37-.62.3-.41.3-.87.05-1.3-.7-.68-1.46-1.3-2.15-2-.45-.44-.82-.93-.9-1.57-.06-.51.13-.88.5-1.15.7-.53 1.45-1.02 2.18-1.54.41-.29.56-.67.4-1.1-.18-.46-.57-.59-1-.53-.94.13-1.84.39-2.73.68-.42.14-.77.1-1.08-.22-1.36-1.41-2.15-3.14-2.58-5.07-.12-.55-.22-1.1-.3-1.66-.2-1.47-.73-2.79-1.79-3.8A6.3 6.3 0 0 0 12.11.25z" />
//       </svg>
//     </Link>
//   </div>

//   {/* Content */}
//   <div className="relative z-10 h-full flex items-center justify-center">
//     <div className="text-center px-4 mt-2 md:mt-0">
//       {/* Badge */}
//       <div
//         className="
//           inline-flex
//           items-center
//           gap-2
//           bg-[#4A5952]
//           text-white
//           px-4 md:px-6
//           py-2
//           rounded-full
//           text-xs md:text-sm
//           mb-4
//         "
//       >
//         <Star className="w-4 h-4 fill-white" />
//         <span>4.8/5 Rating | 1200+ Reviews</span>
//       </div>

//       {/* Heading */}
//       <h1
//         className="
//           text-3xl
//           sm:text-4xl
//           md:text-5xl
//           lg:text-7xl
//           font-bold
//           text-[#4A5952]
//           leading-tight
//         "
//       >
//         Choose Quality
//       </h1>

//       {/* Description */}
//       <p
//         className="
//           mt-3
//           text-sm
//           sm:text-base
//           md:text-lg
//           lg:text-xl
//           text-[#59645D]
//           max-w-xs
//           sm:max-w-md
//           mx-auto
//         "
//       >
//         Experience handcrafted coffee and unforgettable moments at WOW Cafe
//       </p>
//     </div>
//   </div>

//   {/* Bottom Line */}
//   <div className="absolute bottom-4 lg:bottom-8 left-0 w-full px-4 lg:px-8">
//     <div className="flex items-center gap-3 lg:gap-5">
//       <div className="flex-1 h-[1px] bg-[#4A5952]" />

//       <span
//         className="
//           text-[#4A5952]
//           text-[10px]
//           sm:text-xs
//           md:text-sm
//           lg:text-lg
//           tracking-[0.2em]
//           uppercase
//           whitespace-nowrap
//         "
//       >
//         wow specialist cafe
//       </span>

//       <div className="flex-1 h-[1px] bg-[#4A5952]" />
//     </div>
//   </div>
// </section>