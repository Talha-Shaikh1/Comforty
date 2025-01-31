"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/types/interfaces";

interface WishlistContextProps {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  moveToCart: (product: Product) => void;
}

const WishlistContext = createContext<WishlistContextProps | undefined>(
  undefined
);

 const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const addToWishlist = (product: Product) => {
    if (!wishlist.some((item) => item._id === product._id)) {
      setWishlist((prev) => [...prev, product]);
    }
  };

  const removeFromWishlist = (productId: string) => {
    setWishlist((prev) => prev.filter((item) => item._id !== productId));
  };

  const moveToCart = (product: Product) => {
    removeFromWishlist(product._id);
    // Assuming you have a cart context, integrate this function with addToCart.
    console.log(`Product moved to cart: ${product.title}`);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, moveToCart }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};

export default WishlistProvider;