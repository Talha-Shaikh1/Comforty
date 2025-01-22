export default function Loading() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-start text-gray-800 mt-12">
          Loading Products...
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="relative border p-4 rounded-lg shadow animate-pulse bg-gray-200"
            >
              <div className="w-full h-48 bg-gray-300 rounded-lg"></div>
              <div className="mt-3 space-y-2">
                <div className="h-5 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  