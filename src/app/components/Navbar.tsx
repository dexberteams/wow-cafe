import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";

const Navbar = () => {
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
          <span className="text-xl md:text-2xl font-bold text-primary font-[family-name:var(--font-dm-serif)]">
           Cafe
          </span>
        </Link>

        {/* Right Side: Reviews Link + Language Toggle */}
        <div className="flex items-center">
        
          <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-soft-bg transition-colors text-sm font-medium text-foreground border-2 border-primary font-[family-name:var(--font-dm-serif)]">
            <Globe className="w-4 h-4" />
            <span className="hidden sm:inline-block">English / العربية</span>
            <span className="sm:hidden">EN / AR</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
