"use client";

import Image from "next/image";
import React, { useState } from "react";
import { NewArrivalsProps } from "../type";
import { useProducts } from "../hooks/useProducts";
import { NewArrivalsSkeleton } from "../skeletonLoader/SkeletonLoader";



const NewArrivals: React.FC<NewArrivalsProps> = ({
  products,
  title = "New Arrivals",
}) => {
  const [loadingProduct, setLoadingProduct] = useState<number | null>(null);

  const handleAddToCart = (productId: number) => {
    setLoadingProduct(productId);
    setTimeout(() => {
      console.log("Added product to cart:", productId);
      setLoadingProduct(null);
    }, 500);
  };

  const formatPrice = (price: number) => {
    return `৳ ${price.toLocaleString("en-US", { minimumFractionDigits: 3 })}`;
  };

  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8">
          <span className="text-cyan-500">{title.split(" ")[0]}</span>
          <span className="text-gray-800">
            {" "}
            {title.split(" ").slice(1).join(" ")}
          </span>
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
          {products.data.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden p-3 sm:p-4"
            >
              {/* Vendor Name */}
              <div className="pb-2 sm:pb-[11px]">
                <p className="text-[10px] sm:text-xs text-black font-medium truncate">
                  {product.vendorName}
                </p>
              </div>
              {/* Product Name */}
              <div className="mb-1 sm:mb-0">
                <h3 className="text-[13px] sm:text-[15px] text-[#034E53] font-medium min-h-[36px] sm:min-h-[40px] line-clamp-2 sm:line-clamp-1 truncate overflow-hidden">
                  {product.name}
                </h3>
              </div>

              {/* Product Image */}
              <a
                href={product.link}
                className="block"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = product.link;
                }}
              >
                <div className="relative h-[100px] sm:h-[129px] flex items-center justify-center p-2 sm:p-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                    width={200}
                    height={200}
                  />
                </div>
              </a>

              {/* Pricing */}
              <div>
                <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-[11px] flex-wrap">
                  <span className="text-[11px] sm:text-[13px] text-[#697475] line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="text-[13px] sm:text-[15px] text-[#0AAEB9] font-bold">
                    {formatPrice(product.discountedPrice)}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product.id)}
                  disabled={loadingProduct === product.id}
                  className="w-full cursor-pointer bg-[#15ADB7] hover:bg-[#15ADB7] text-white text-[12px] sm:text-[15px] font-medium py-1.5 sm:py-2 px-2 sm:px-4 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded"
                >
                  {loadingProduct === product.id ? "Adding..." : "Add to cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

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
      <NewArrivals products={products} title="New Arrivals" />
    </div>
  );
};

export default NewArrivalsSection;
