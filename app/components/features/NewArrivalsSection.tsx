"use client";

import { useProducts } from "@/app/hooks/useProducts";
import { NewArrivalsSkeleton } from "../ui/skeletons";
import { ProductCard } from "./ProductCard";

const NewArrivalsSection = () => {
  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) {
    return (
      <div className="min-h-[400px] bg-gray-50">
        <NewArrivalsSkeleton />
      </div>
    );
  }

  if (isError || !products) {
    return (
      <div className="min-h-[400px] bg-gray-50 flex items-center justify-center py-12">
        <div className="text-xl font-semibold text-red-600">
          Error loading products
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[400px] bg-gray-50">
      <div className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8">
            <span className="text-cyan-500">New </span>
            <span className="text-gray-800"> Arrivals </span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
            {products.data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalsSection;
