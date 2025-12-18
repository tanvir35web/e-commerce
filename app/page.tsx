import CategorySection from "./components/features/CategorySection";
import FooterSection from "./components/layout/FooterSection";
import HeroSlider from "./components/features/HeroSection";
import NewArrivalsSection from "./components/features/NewArrivalsSection";
import PrimaryNavbar from "./components/layout/PrimaryNavbar";
import SecondaryNavbar from "./components/layout/SecondaryNavbar";

export default function Home() {
  return (
    <div>
      <PrimaryNavbar />
      <SecondaryNavbar />
      <HeroSlider />
      <CategorySection />
      <NewArrivalsSection />
      <FooterSection />
    </div>
  );
}
