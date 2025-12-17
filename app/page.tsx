import HeroSlider from "./components/HeroSection";
import PrimaryNavbar from "./components/PrimaryNavbar";
import SecondaryNavbar from "./components/SecondaryNavbar";

export default function Home() {
  return (
    <div>
      <PrimaryNavbar />
      <SecondaryNavbar />
      <HeroSlider />
    </div>
  );
}
