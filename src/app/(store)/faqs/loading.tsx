import React from "react";

export default function loading() {
  return (
    <div className="flex flex-col mx-auto items-center justify-center my-8">
      <h1 className="text-3xl font-bold py-5">Questions Looks Here</h1>
      <h2 className="pb-10 text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus ipsam
        voluptate totam!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Loop through the number of loading skeletons */}
        {[...Array(4)].map((_, index) => (
          <div
            className="p-3 rounded-lg md:w-[40vw] w-96 bg-gray-100 animate-pulse"
            key={index}
          >
            <div className="flex justify-between">
              <div className="h-6 w-2/3 bg-gray-300 rounded"></div>{" "}
              {/* Skeleton for question */}
              <div className="h-6 w-6 bg-gray-300 rounded"></div>{" "}
              {/* Skeleton for button */}
            </div>
            <div className="mt-4 h-4 w-full bg-gray-300 rounded"></div>{" "}
            {/* Skeleton for answer */}
            <div className="mt-2 h-4 w-3/4 bg-gray-300 rounded"></div>{" "}
            {/* Skeleton for additional answer content */}
          </div>
        ))}
      </div>
    </div>
  );
}
