'use client'
import React from 'react';

import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
      <footer className="bg-gray-100 text-gray-700 py-10 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Logo and About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-teal-500 text-2xl">
              <Image src={"/Logo Icon.png"} alt='' width={40} height={10} />
              </div>
              <span className="text-xl font-bold">Comforty</span>
            </div>
            <p className="text-sm">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
            </p>
            <div className="flex space-x-3 mt-4">
              <div className="text-teal-500 hover:border flex border-teal-500 rounded-full p-1">
                <FontAwesomeIcon icon={faTwitter} className="w-5"/>
              </div>
              <div className="text-teal-500 hover:border flex border-teal-500 rounded-full p-1">
                <FontAwesomeIcon icon={faInstagram} className="w-5"/>
              </div>
              <div className="text-teal-500 hover:border flex border-teal-500 rounded-full p-1">
                <FontAwesomeIcon icon={faPinterest} className="w-5"/>
              </div>
              <div className="text-teal-500 hover:border flex border-teal-500 rounded-full p-1">
                <FontAwesomeIcon icon={faYoutube} className="w-5"/>
              </div>
            </div>
          </div>
  
          {/* Category Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Category</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-500 hover:underline">Sofa</a></li>
              <li><a href="#" className="hover:text-teal-500 hover:underline">Armchair</a></li>
              <li><a href="#" className="hover:text-teal-500 hover:underline">Wing Chair</a></li>
              <li><a href="#" className="hover:text-teal-500 hover:underline">Desk Chair</a></li>
              <li><a href="#" className="hover:text-teal-500 hover:underline">Wooden Chair</a></li>
              <li><a href="#" className="hover:text-teal-500 hover:underline">Park Bench</a></li>
            </ul>
          </div>
  
          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-500 hover:underline">Help & Support</a></li>
              <li><a href="#" className="hover:text-teal-500 hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-teal-500 hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-teal-500 hover:underline">Help</a></li>
            </ul>
          </div>
  
          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
            </p>
            <form className="flex md:space-x-0 space-x-2 md:flex-col ">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button onClick={(e) => {
                e.preventDefault()
                alert('subscription added sucessfully')}}
              className="bg-[#029FAE] text-white md:px-0 px-4 py-2 rounded hover:bg-teal-700 md:mt-4">
                Subscribe
              </button>
            </form>
          </div>
        </div>
  
        {/* Footer Bottom Section */}
        <div className="border-t border-gray-300 mt-10 pt-4 flex items-center justify-center">
          <div className="container mx-auto text-center text-sm flex justify-between">
            <p className="flex justify-center items-center text-gray-500">
              &copy; 2021 - Blogy - Designed & Developed by <span className="text-teal-500 pl-2">Zakirsoft</span>
            </p>
            <div className="sm:flex justify-center space-x-4 mt-2 hidden">
              <Image src={'/footerlogo.png'} alt={"PayPal"} width={200} height={10}/>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  