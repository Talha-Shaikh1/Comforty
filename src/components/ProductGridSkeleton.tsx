const ProductGridSkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="rounded-lg bg-gray-200 h-64 animate-pulse"
        >
          <div className="w-full h-32 bg-gray-300 animate-pulse"></div>
          <div className="mt-4">
            <div className="w-2/3 h-6 bg-gray-300 animate-pulse"></div>
            <div className="w-1/4 h-4 bg-gray-300 animate-pulse mt-2"></div>
          </div>
        </div>
      ))}
    </div>
  );
  
  export default ProductGridSkeleton;