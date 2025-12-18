const CategorySkeleton = () => {
    return (
      <div className="flex-shrink-0 w-[200px] md:w-[220px] lg:w-[250px]">
        <div className="relative h-[160px] md:h-[180px] lg:h-[200px] rounded-lg shadow-md mb-3 bg-gray-200 animate-pulse">
          <div className="absolute bottom-3 -left-2 bg-gray-300 h-12 w-full rounded animate-pulse"></div>
        </div>
      </div>
    );
  };
  
  const CategorySliderSkeleton = () => {
    return (
      <div className="relative py-4">
        <div className="mx-auto max-w-[1440px] relative">
          <div className="max-w-[1220px] mx-auto px-2 flex gap-4 md:gap-6 overflow-hidden">
            {[...Array(6)].map((_, index) => (
              <CategorySkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  
const ProductSkeleton = () => {
    return (
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden p-4">
        {/* Vendor Name Skeleton */}
        <div className="pb-[11px]">
          <div className="h-3 w-24 bg-gray-200 rounded animate-pulse"></div>
        </div>
        {/* Product Name Skeleton */}
        <div className="mb-2">
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-1"></div>
          <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
        </div>
        {/* Image Skeleton */}
        <div className="relative h-[129px] flex items-center justify-center p-4 mb-2">
          <div className="w-full h-full bg-gray-200 rounded animate-pulse"></div>
        </div>
        {/* Price Skeleton */}
        <div className="mb-[11px]">
          <div className="flex items-center gap-2">
            <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
        {/* Button Skeleton */}
        <div className="h-9 w-full bg-gray-200 rounded animate-pulse"></div>
      </div>
    );
  };
  
  const NewArrivalsSkeleton = () => {
    return (
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Title Skeleton */}
          <div className="mb-8">
            <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
          </div>
          {/* Products Grid Skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {[...Array(6)].map((_, index) => (
              <ProductSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  export { CategorySliderSkeleton, NewArrivalsSkeleton };