import CategorySection from "./components/CategorySection";
import FooterSection from "./components/FooterSection";
import HeroSlider from "./components/HeroSection";
import NewArrivalsSection from "./components/NewArrivalsSection";
import PrimaryNavbar from "./components/PrimaryNavbar";
import SecondaryNavbar from "./components/SecondaryNavbar";

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
