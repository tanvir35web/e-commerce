"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { LeftArrowIcon, RightArrowIcon } from "../icons/icons";

// Type definitions
interface Category {
  id: number;
  name: string;
  image: string;
  link: string;
}

interface CategorySliderProps {
  categories: Category[];
  bgColor?: string;
}

const CategorySlider: React.FC<CategorySliderProps> = ({
  categories,
  bgColor = "#f5f1e8",
}) => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Check scroll position to show/hide arrows
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
          className="max-w-[1220px] mx-auto px-2 flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth "
          onScroll={checkScroll}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex-shrink-0 w-[250px] group cursor-pointer"
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
                <div className="relative h-[200px] rounded-lg shadow-md mb-3">
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
                  <div className="absolute bottom-3 -left-2 bg-white/90 shadow-sm p-4 flex items-center justify-between gap-16 group-hover:shadow-md">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {category.name}
                    </h3>
                    <span className="text-cyan-500 font-medium text-sm group-hover:text-cyan-600 transition-colors">
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

const CategorySection = () => {
  const mockCategories: Category[] = [
    {
      id: 1,
      name: "Electronics",
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&q=80",
      link: "/category/electronics",
    },
    {
      id: 2,
      name: "Fashion",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&q=80",
      link: "/category/fashion",
    },
    {
      id: 3,
      name: "Appliances",
      image:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500&q=80",
      link: "/category/appliances",
    },
    {
      id: 4,
      name: "Babies Store",
      image:
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500&q=80",
      link: "/category/babies",
    },
    {
      id: 5,
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&q=80",
      link: "/category/sports",
    },
    {
      id: 6,
      name: "Home & Garden",
      image:
        "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=500&q=80",
      link: "/category/home",
    },
    {
      id: 7,
      name: "Books",
      image:
        "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500&q=80",
      link: "/category/books",
    },
    {
      id: 8,
      name: "Toys & Games",
      image:
        "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=500&q=80",
      link: "/category/toys",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#F3EDC9] to-white">
      <CategorySlider categories={mockCategories} />
    </div>
  );
};

export default CategorySection;
