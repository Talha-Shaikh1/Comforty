import { ArrowRightIcon } from '@sanity/icons';
import React from 'react';
import Image from 'next/image';

function Hero() {
  return (
    <div className="flex items-center justify-center px-4 sm:px-8 ">
      <div className="h-screen lg:h-[800px] w-full max-w-7xl bg-[#F0F2F3] overflow-hidden flex flex-col lg:flex-row justify-center items-center rounded-bl-xl">

        {/* Left Content */}
        <div className="flex flex-col justify-center z-20 px-8 lg:w-1/2 text-center lg:text-left">
          <div className="w-full">
            <h2 className="text-sm text-[#272343] py-4">WELCOME TO CHAIRY</h2>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold py-5">
              Best Furniture Collection for your interior.
            </h1>
          </div>

          <div className="w-44 h-14 mx-auto lg:mx-0 rounded-lg bg-[#029FAE] flex items-center justify-center my-16">
            <button className="flex items-center justify-center text-white">
              Shop Now{' '}
              <ArrowRightIcon className='h-6 w-6 pt-1'/>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center lg:w-1/2">
          <Image
            src="/Product Image.png"
            alt="Product Image"
            width={450}
            height={450}
            className="w-full max-w-sm lg:max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
