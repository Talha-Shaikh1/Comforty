"use client";

import { useWishlist } from "@/context/WishListContext";
import Image from "next/image";
import Link from "next/link";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, moveToCart } = useWishlist();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Your Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlist.map((product) => (
            <div key={product._id} className="border rounded-lg p-4 hover:shadow-lg">
              <Link href={`/product/${product.slug.current}`}>
                <div className="relative">
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="rounded-lg"
                  />
                  <h3 className="mt-4 text-lg font-semibold">{product.title}</h3>
                  <p className="text-sm text-gray-500 mt-2">${product.price}</p>
                </div>
              </Link>
              <div className="mt-4 flex justify-between items-center">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => removeFromWishlist(product._id)}
                >
                  Remove
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => moveToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}