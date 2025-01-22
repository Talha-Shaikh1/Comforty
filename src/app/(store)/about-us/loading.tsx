import React from 'react'

export default function loading() {
  return (
    <div>
  {/* Loading Section for About Us */}
  <div className="flex md:flex-row flex-col gap-7 items-center justify-center my-16">
    <div className="md:p-16 p-8 bg-teal-800 text-slate-100 animate-pulse">
      <div className="h-8 w-1/2 bg-gray-300 rounded"></div> {/* Loading for title */}
      <div className="mt-4 h-4 w-3/4 bg-gray-300 rounded"></div> {/* Loading for description */}
      <div className="mt-6 h-10 w-32 bg-teal-600 rounded"></div> {/* Loading for button */}
    </div>

    <div className="flex relative rounded-none md:w-[450px] w-80 animate-pulse">
      <div className="w-full h-full bg-gray-300 rounded"></div> {/* Loading for Image */}
    </div>
  </div>

  {/* Loading Section for "What Makes Our Brand Different" */}
  <div className="my-16">
    <h2 className="text-2xl font-bold text-center py-10 animate-pulse">
      {/* Loading for Header */}
      <div className="h-8 w-1/2 bg-gray-300 rounded"></div>
    </h2>
    <div className="flex gap-5 items-center justify-center md:flex-row flex-col">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="p-4 bg-gray-200 animate-pulse">
          <div className="h-10 w-10 bg-gray-300 rounded-full mx-auto"></div> {/* Loading for Icon */}
          <div className="h-6 w-2/3 bg-gray-300 rounded mt-3"></div> {/* Loading for Title */}
          <div className="h-4 w-4/5 bg-gray-300 rounded mt-2"></div> {/* Loading for Description */}
        </div>
      ))}
    </div>
  </div>

  {/* Loading Section for Popular Products */}
  <div className="flex md:flex-row flex-col items-center justify-center gap-4 my-20">
    {[...Array(3)].map((_, index) => (
      <div key={index} className="relative flex flex-col items-start overflow-hidden animate-pulse">
        <div className="relative w-full">
          <div className="w-full h-64 bg-gray-300 rounded"></div> {/* Loading for Image */}
        </div>
        <div className="mt-4 w-full flex flex-col items-start">
          <div className="h-6 w-2/3 bg-gray-300 rounded mt-2"></div> {/* Loading for Title */}
          <div className="h-4 w-1/3 bg-gray-300 rounded mt-2"></div> {/* Loading for Price */}
        </div>
      </div>
    ))}
  </div>
</div>

  )
}
