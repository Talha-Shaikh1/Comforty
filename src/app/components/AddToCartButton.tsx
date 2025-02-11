"use client";
import React, { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types/interfaces";
import { toast } from "react-toastify";
import { TrolleyIcon } from "@sanity/icons";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (showPopup) {
      toast.success("Added to cart", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: () => setShowPopup(false),
      });
    }
  }, [showPopup]);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
    setShowPopup(true);
  };

  return (
    <button onClick={handleAddToCart}
    className="mt-6 w-48 py-3 bg-[#029FAE] text-white text-lg font-medium rounded-md hover:bg-teal-600 transition duration-300 flex text-center justify-center items-center">
      <TrolleyIcon className="w-8 h-8" />
      <span>Add to Cart</span>
    </button>
  );
}
