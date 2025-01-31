"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/interfaces";
import {useCart} from "@/context/CartContext";


interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { addToCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
    setShowPopup(true);
  };

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showPopup]);

  // console.log(product);

  return (
    <div className="flex flex-col items-center sm:items-start">
      <div className="relative items-center overflow-hidden rounded-lg">
        <div className="relative w-72 sm:w-full">
          <Link
            key={product._id}
            href={`/ProducDetailPage/${product.slug?.current}`}
          >
            {product.badge && (
              <span
                className={`absolute top-2 left-2 text-white text-xs font-bold px-2 py-1 rounded ${
                  product.badge.toLowerCase() === "new"
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              >
                {product.badge}
              </span>
            )}
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={300}
              height={240}
              className="w-full h-60 object-cover transition-transform duration-300 hover:scale-110"
            />
          </Link>
          <div className="mt-4 w-full flex flex-col items-start">
            <h3 className="text-lg font-semibold text-gray-800 text-start">
              {product.title.slice(0, 20)}...
            </h3>
            <div className="flex items-start mt-2">
              {product.priceWithoutDiscount && (
                <span className="text-gray-500 line-through mr-2">
                  ${product.priceWithoutDiscount}
                </span>
              )}
              <span className="text-red-500 font-bold text-lg">
                ${product.price}
              </span>
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className="absolute bottom-4 right-0 text-white bg-[#F0F2F3] p-2 rounded-lg hover:bg-[#029FAE] transition"
          >
            <Image src="/Buy 2.png" alt="Add to Cart" width={22} height={12} />
          </button>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          style={{ pointerEvents: "auto" }}
        >
          <div className="bg-white p-6 rounded shadow-md text-center z-60">
            <p className="mb-4">Product added to cart successfully!</p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setShowPopup(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Continue Shopping
              </button>
              <button
                onClick={() => (window.location.href = "/cart")}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                View Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
