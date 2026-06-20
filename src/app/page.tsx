import BannerOne from "./components/Banner";
import LocationSection from "./components/LocationSection";
import MenuSection from "./home/MenuSection";
import ReviewsSection from "./home/ReviewsSection";
import GallerySection from "./home/GallerySection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero section can be added here later */}
      <BannerOne />
      <MenuSection />
      <LocationSection />
      <GallerySection />
      <ReviewsSection />
    </div>
  );
}
