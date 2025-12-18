import BannerImageOne from "../../../public/images/hero-images/banner-photo-1.png";
import BannerImageTwo from "../../../public/images/hero-images/banner-photo-2.png";
import BannerImageThree from "../../../public/images/hero-images/banner-photo-3.png";
import HeroSlider from "./HeroSlider";
import { SlideData } from "@/app/types";

const HeroSliderDemo = () => {
  const slideData: SlideData[] = [
    {
      id: 1,
      title: "Computer & experience",
      subtitle:
        "You Cannot Inspect Quality Into The Product; It Is Already There. I Am Not A Product Of My Circumstances. I Am A Product Of My Decisions.",
      buttonText: "View More",
      buttonLink: "/products/computers",
      discount: "40",
      image: BannerImageOne,
      bgColor: "#f5f1e8",
    },
    {
      id: 2,
      title: "Smartphones & Gadgets",
      subtitle:
        "Discover the latest technology and innovation. Experience premium quality devices designed for modern living and ultimate performance.",
      buttonText: "Shop Now",
      buttonLink: "/products/smartphones",
      discount: "30",
      image: BannerImageTwo,
      bgColor: "#e8f4f8",
    },
    {
      id: 3,
      title: "Audio Experience",
      subtitle:
        "Immerse yourself in superior sound quality. Premium headphones and speakers that deliver crystal clear audio for every moment.",
      buttonText: "Explore",
      buttonLink: "/products/audio",
      discount: "25",
      image: BannerImageThree,
      bgColor: "#fef3e8",
    },
  ];

  return (
    <div className="">
      <div className="mx-auto">
        <HeroSlider slides={slideData} autoPlayInterval={6000} />
      </div>
    </div>
  );
};

export default HeroSliderDemo;
