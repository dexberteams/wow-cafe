import MenuSection from "./home/MenuSection";
import ReviewsSection from "./home/ReviewsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero section can be added here later */}
      <MenuSection />
      <ReviewsSection/>
    </div>
  );
}
