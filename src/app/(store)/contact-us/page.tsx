'use client'

import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, } from "react-icons/fa";
import Image from "next/image";

const ContactForm = () => {
  return (
    <div>
      <div className="my-10 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-gray-800 pb-4">
          Get In Touch With Us
        </h2>
        <p className="text-gray-500 w-[550px] text-center flex justify-center items-center">
          For more information about our product & services, please feel free to
          drop us an email. Our staff is always here to help you out. Do not
          hesitate!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-center px-6 lg:px-20 py-12">
        {/* Contact Information */}
        <div className="lg:w-1/3 space-y-8 mb-8 lg:mb-0 text-center lg:text-left">
          <div className="space-y-6">
            <div className="flex items-start space-x-4 justify-center lg:justify-start">
              <FaMapMarkerAlt className="text-black text-xl mt-1" />
              
              <div>
                <p className="text-lg font-semibold text-gray-800">Address</p>
                <p className="text-gray-600">236 5th SE Avenue, New York </p>
                <p className="text-gray-600">NY10000, United States</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 justify-center lg:justify-start">
              <FaPhoneAlt className="text-black text-xl mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Phone</p>
                <p className="text-gray-600">Mobile: +(84) 546-6789</p>
                <p className="text-gray-600">Hotline: +(84) 456-6789</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 justify-center lg:justify-start">
              <FaClock className="text-black text-xl mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-800">
                  Working Time
                </p>
                <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
                <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="lg:w-1/2 p-8 flex justify-center">
          <form className="space-y-6 w-full max-w-md">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your name
              </label>
              <input
                required
                type="text"
                id="name"
                name="name"
                placeholder="Abc"
                className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                placeholder="Abc@def.com"
                className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="This is optional"
                className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Hi! I’d like to ask about"
                className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                rows={4}
                required
              ></textarea>
            </div>

            <button 
            type="submit"
            className="
            bg-[#029FAE] text-white py-3 px-20 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            onClick={(e) => {
              e.preventDefault()
              alert('Thanks for contact We will Reach u soon.')
            }}
              
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      


      <div className=" flex items-center justify-center ">
        <div className="px-4 py-16 flex flex-col md:flex-row items-center justify-center gap-10 w-[80vw] bg-gray-200">
        <div className="flex items-center justify-center">
          <Image src={'/contact-us-image-1.png'} width={40} height={40} alt=""/>
          <div className="pl-2">
          <h2 className="text-lg font-bold">High Quality</h2>
          <p className="text-gray-500">Crafted from Top Material</p>
          </div>  
        </div>

        <div className="flex items-center justify-center">
          <Image src={'/contact-us-image-2.png'} width={40} height={40} alt=""/>
          <div className="pl-2">
          <h2 className="text-lg font-bold">Warrenty Protection</h2>
          <p className="text-gray-500">Over 2 Years</p>
          </div>  
        </div>

        <div className="flex items-center justify-center">
          <Image src={'/contact-us-image-3.png'} width={40} height={40} alt=""/>
          <div className="pl-2">
          <h2 className="text-lg font-bold">24 / 7 Support</h2>
          <p className="text-gray-500">Dedicated support</p>
          </div>  
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default ContactForm;
