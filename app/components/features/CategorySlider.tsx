import { useEffect, useRef, useState } from "react";
import { CategorySliderProps } from "@/app/types";
import Image from "next/image";
import { LeftArrowIcon, RightArrowIcon } from "../ui/icons";

export const CategorySlider: React.FC<CategorySliderProps> = ({
  categories,
}) => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [categories]);

  // Scroll functions
  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 300;
      const newPosition =
        direction === "left"
          ? sliderRef.current.scrollLeft - scrollAmount
          : sliderRef.current.scrollLeft + scrollAmount;

      sliderRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative py-4">
      <div className="mx-auto max-w-[1440px] relative">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 transition-all duration-300 cursor-pointer"
            aria-label="Scroll left"
          >
            <LeftArrowIcon />
          </button>
        )}

        {/* Categories Container */}
        <div
          ref={sliderRef}
          className="max-w-[1220px] mx-auto px-2 flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth "
          onScroll={checkScroll}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {categories.data.map((category) => (
            <div
              key={category.id}
              className="flex-shrink-0 w-[200px] md:w-[220px] lg:w-[250px] group cursor-pointer"
            >
              <a
                href={category.link}
                className="block"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = category.link;
                }}
              >
                {/* Category Image */}
                <div className="relative h-[160px] md:h-[180px] lg:h-[200px] rounded-lg shadow-md mb-3">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={250}
                    height={200}
                    className="w-full h-full object-cover "
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 "></div>

                  {/* Category Info */}
                  <div className="absolute bottom-3 -left-2 bg-white/90 shadow-sm p-3 md:p-4 flex items-center justify-between gap-8 md:gap-12 lg:gap-16 group-hover:shadow-md">
                    <h3 className="text-base md:text-lg font-semibold text-gray-800 truncate">
                      {category.name}
                    </h3>
                    <span className="text-cyan-500 font-medium text-xs md:text-sm group-hover:text-cyan-600 transition-colors flex-shrink-0">
                      Shop
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 transition-all duration-300 cursor-pointer"
            aria-label="Scroll right"
          >
            <RightArrowIcon />
          </button>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};
