import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCheckCircle, FaShippingFast, FaWallet } from 'react-icons/fa'
import { LuSprout } from 'react-icons/lu'

export default function AboutPage() {
  return (
    <div>
      <div className="flex md:flex-row flex-col gap-7 items-center justify-center my-16">
        <div className="md:p-16 p-8 bg-teal-800 text-slate-100 ">
          <h2 className="text-2xl font-bold pb-6 ">About Us - Comforty</h2>
          <p className="text-sm w-64 sm:w-96">
            At Comforty, we believe that right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft charis that seamlessly blend style with functionality.
          </p>
          
          <Link href={'./AllProducts/'}>
          <button className="p-3 sm:mt-36 mt-24 text-white text-sm bg-teal-600" >
            View Collections
          </button>
          </Link>
        </div>
        <div className="flex relative rounded-none md:w-[450px] w-80">
          <Image
            src={"/our-product-1.png"}
            height={400}
            width={400}
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="my-16">
        <h2 className="text-2xl font-bold text-center py-10">
          What Makes our Brand Different
        </h2>
        <div className="flex gap-5 items-center justify-center md:flex-row flex-col">
          <div className="p-4 bg-gray-200 ">
          <FaShippingFast className="text-teal-500 text-xl mt-1" />
            <h3 className="text-lg text-teal-500 py-3">Next Day as Standard</h3>
            <p className="text-teal-500 w-52 ">
              Oreder Before 3pm and get your order the next day as Standerd
            </p>
          </div>
          <div className="p-4 bg-gray-200 ">
            <FaCheckCircle className="text-teal-500 text-xl mt-1" />
            <h3 className="text-lg text-teal-500 py-3">Next Day as Standard</h3>
            <p className="text-teal-500 w-52 ">
              Oreder Before 3pm and get your order the next day as Standerd
            </p>
          </div>
          <div className="p-4 bg-gray-200 ">
          <FaWallet className="text-teal-500 text-xl mt-1" />
            <h3 className="text-lg text-teal-500 py-3">Next Day as Standard</h3>
            <p className="text-teal-500 w-52 ">
              Oreder Before 3pm and get your order the next day as Standerd
            </p>
          </div>
          <div className="p-3.5 bg-gray-200 ">
          <LuSprout className="text-teal-500 text-3xl" />
            <h3 className="text-lg text-teal-500 py-3">Next Day as Standard</h3>
            <p className="text-teal-500 w-52 ">
              Oreder Before 3pm and get your order the next day as Standerd
            </p>
          </div>
        </div>
      </div>

      {/* <h1 className="text-2xl sm:text-3xl font-bold text-start mb-24 text-gray-800">
        Our Popular Products
      </h1> */}

      <div className="flex md:flex-row flex-col items-center justify-center gap-4 my-20">
        <div className="relative flex flex-col items-start overflow-hidden ">
          <div className="relative w-full">
            <Image
              src={"/about-image-1.jpeg"}
              alt={""}
              width={500}
              height={500}
              className="md:w-[565px] w-80 h-64"
            />
          </div>
          <div className="mt-4 w-full flex flex-col items-start">
            <h3 className="text-lg font-semibold text-gray-800 text-start"></h3>
            <div className="flex flex-col items-start mt-2">
              <span className="text-gray-800 ">The Popular Seude Sofa</span>

              <span className="text-gray-800 ">$90.00</span>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col items-start overflow-hidden">
          <div className="relative w-full">
            <Image
              src={"/about-image-2.jpeg"}
              alt={""}
              width={700}
              height={700}
              className="w-full h-64 object-contain"
            />
          </div>
          <div className="mt-4 w-full flex flex-col items-start">
            <div className="flex flex-col items-start mt-2">
              <span className="text-gray-800 ">The Dandy Chair</span>
              <span className="text-gray-800 ">$90.00</span>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col items-start overflow-hidden ">
          <div className="relative w-full">
            <Image
              src={"/about-image-3.png"}
              alt={""}
              width={500}
              height={500}
              className="w-full h-64"
            />
          </div>
          <div className="mt-4 w-full flex flex-col items-start">
            <h3 className="text-lg font-semibold text-gray-800 text-start"></h3>
            <div className="flex flex-col items-start mt-2">
              <span className="text-gray-800 ">The Dandy Chair</span>

              <span className="text-gray-800 ">$90.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
