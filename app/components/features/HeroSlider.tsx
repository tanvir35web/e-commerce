"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { SlideData } from "@/app/types";

interface HeroSliderProps {
  slides: SlideData[];
  autoPlayInterval?: number;
}

export default function HeroSlider({
  slides,
  autoPlayInterval = 3000,
}: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, autoPlayInterval);
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [slides.length, autoPlayInterval]);

  // Reset auto-play on manual interaction
  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);
  };

  // Navigation handlers
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    resetAutoPlay();
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetAutoPlay();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetAutoPlay();
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.pageX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (Math.abs(translateX) > 50) {
      if (translateX > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    setTranslateX(0);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].pageX);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const currentX = e.touches[0].pageX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleTouchEnd = () => {
    if (Math.abs(translateX) > 50) {
      if (translateX > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    setTranslateX(0);
  };

  return (
    <div className="relative w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden">
      {/* Slides Container */}
      <div
        ref={sliderRef}
        className="relative h-full flex transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(calc(-${
            currentSlide * 100
          }% + ${translateX}px))`,
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-full relative flex items-center"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                draggable="false"
                priority={slide.id === 1}
              />
            </div>

            <div className="max-w-[1220px] w-full mx-auto px-4 sm:px-6 lg:px-0 flex items-center justify-between relative z-10">
              {/* Left Content */}
              <div className="w-full lg:w-1/2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-2 sm:mb-3 lg:mb-4">
                  <span className="text-gray-800">Shop </span>
                  <span className="text-cyan-500">{slide.title}</span>
                </h1>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-4 sm:mb-5 lg:mb-6 max-w-md leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {slide.subtitle}
                </p>
                <a
                  href={slide.buttonLink}
                  className="inline-block bg-cyan-500 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded text-xs sm:text-sm lg:text-base hover:bg-cyan-600 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = slide.buttonLink;
                  }}
                >
                  {slide.buttonText}
                </a>
              </div>

              {/* Discount Badge */}
              {slide.discount && (
                <div className="hidden sm:flex absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 bg-orange-500 text-white rounded-full w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[165px] lg:h-[165px] flex-col items-center justify-center shadow-lg z-20">
                  <span className="text-2xl sm:text-3xl lg:text-[47px] font-bold">
                    {slide.discount}%
                  </span>
                  <span className="text-2xl sm:text-3xl lg:text-[47px] -mt-2 sm:-mt-3 lg:-mt-6">Off</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 sm:bottom-5 lg:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 sm:h-2.5 lg:h-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentSlide
                ? "bg-[#034E53] w-6 sm:w-7 lg:w-8"
                : "bg-gray-400 w-2 sm:w-2.5 lg:w-3 hover:bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
