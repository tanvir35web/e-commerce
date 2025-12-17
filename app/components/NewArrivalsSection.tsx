"use client";

import Image from "next/image";
import React, { useState } from "react";

// Type definitions
interface Product {
  id: number;
  vendorName: string;
  name: string;
  image: string;
  originalPrice: number;
  discountedPrice: number;
  link: string;
}

interface NewArrivalsProps {
  products: Product[];
  title?: string;
}

const NewArrivals: React.FC<NewArrivalsProps> = ({
  products,
  title = "New Arrivals",
}) => {
  const [loadingProduct, setLoadingProduct] = useState<number | null>(null);

  const handleAddToCart = (productId: number) => {
    setLoadingProduct(productId);

    // Simulate adding to cart - replace with your actual logic
    setTimeout(() => {
      console.log("Added product to cart:", productId);
      setLoadingProduct(null);
      // You can add toast notification here
    }, 500);
  };

  const formatPrice = (price: number) => {
    return `৳ ${price.toLocaleString("en-US", { minimumFractionDigits: 3 })}`;
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          <span className="text-cyan-500">{title.split(" ")[0]}</span>
          <span className="text-gray-800">
            {" "}
            {title.split(" ").slice(1).join(" ")}
          </span>
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden p-4"
            >
              {/* Vendor Name */}
              <div className="pb-[11px]">
                <p className="text-xs text-black font-medium truncate">
                  {product.vendorName}
                </p>
              </div>
              {/* Product Name */}
              <div>
                <h3 className="text-[15px] text-[#034E53] font-medium min-h-[40px] line-clamp-1 truncate overflow-hidden">
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
                <div className="relative h-[129px] flex items-center justify-center p-4">
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
                <div className="flex items-center gap-2 mb-[11px]">
                  <span className="text-[13px] text-[#697475] line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="text-[15px] text-[#0AAEB9] font-bold">
                    {formatPrice(product.discountedPrice)}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product.id)}
                  disabled={loadingProduct === product.id}
                  className="w-full cursor-pointer bg-[#15ADB7] hover:bg-[#15ADB7] text-white text-[15px] font-medium py-2 px-4 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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

// Demo Component
const NewArrivalsSection = () => {
  // Mock data - Replace with your API response
  const mockProducts: Product[] = [
    {
      id: 1,
      vendorName: "Bin Bakar Electronics",
      name: "Samsung 40N5300 Smart LED TV",
      image:
        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80",
      originalPrice: 60.0,
      discountedPrice: 56.0,
      link: "/product/samsung-40n5300",
    },
    {
      id: 2,
      vendorName: "Bin Bakar Electronics",
      name: "Samsung Automatic Washing Machine",
      image:
        "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&q=80",
      originalPrice: 110.0,
      discountedPrice: 101.0,
      link: "/product/samsung-washing-machine",
    },
    {
      id: 3,
      vendorName: "Bin Bakar Electronics",
      name: "Haier HSU-12HFMAC Air Conditioner",
      image:
        "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=400&q=80",
      originalPrice: 56.0,
      discountedPrice: 70.0,
      link: "/product/haier-ac",
    },
    {
      id: 4,
      vendorName: "Bin Bakar Electronics",
      name: "Anex Roti Maker AG-1021",
      image:
        "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=400&q=80",
      originalPrice: 56.0,
      discountedPrice: 70.0,
      link: "/product/anex-roti-maker",
    },
    {
      id: 5,
      vendorName: "Bin Bakar Electronics",
      name: "Gree GS-12PITH Air Conditioner",
      image:
        "https://images.unsplash.com/photo-1631545805416-bb14a19e2728?w=400&q=80",
      originalPrice: 56.0,
      discountedPrice: 86.0,
      link: "/product/gree-ac",
    },
    {
      id: 6,
      vendorName: "Bin Bakar Electronics",
      name: "Gree Air Conditioner 18000 BTU",
      image:
        "https://images.unsplash.com/photo-1610461888750-10bfc601b874?w=400&q=80",
      originalPrice: 56.0,
      discountedPrice: 171.0,
      link: "/product/gree-ac-18000",
    },
    {
      id: 7,
      vendorName: "Bin Bakar Electronics",
      name: "LG 43 Inch Smart LED TV",
      image:
        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80",
      originalPrice: 75.0,
      discountedPrice: 68.0,
      link: "/product/lg-tv",
    },
    {
      id: 8,
      vendorName: "Bin Bakar Electronics",
      name: "Sony Home Theater System",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
      originalPrice: 120.0,
      discountedPrice: 95.0,
      link: "/product/sony-home-theater",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <NewArrivals products={mockProducts} title="New Arrivals" />
    </div>
  );
};

export default NewArrivalsSection;
