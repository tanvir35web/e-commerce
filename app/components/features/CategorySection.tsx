"use client";
import { useCategories } from "@/app/hooks/useCategories";
import { CategorySliderSkeleton } from "../ui/skeletons";
import { CategorySlider } from "./CategorySlider";

const CategorySection = () => {
  const { data: categories, isLoading, isError } = useCategories();

  if (isLoading) {
    return (
      <div className="bg-gradient-to-b from-[#F3EDC9] to-white">
        <CategorySliderSkeleton />
      </div>
    );
  }

  if (isError || !categories) {
    return (
      <div className="bg-gradient-to-b from-[#F3EDC9] to-white py-12 flex items-center justify-center">
        <div className="text-xl font-semibold text-red-600">
          Error loading categories
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-gradient-to-b from-[#F3EDC9] to-white">
        <CategorySlider categories={categories} />
      </div>
      <div className="h-[1px] w-full max-w-[1220px] mx-auto bg-[#0000002B] mt-2"></div>
    </>
  );
};

export default CategorySection;
