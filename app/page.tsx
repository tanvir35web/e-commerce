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
      <div className="h-[1px] w-full max-w-[1220px] mx-auto bg-[#0000002B] mt-2"></div>
      <NewArrivalsSection />
      <FooterSection />
    </div>
  );
}
