"use client";
import React, { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import CheckoutPage from "../checkout/page";
import { SignInButton, useAuth, useUser } from "@clerk/nextjs";
import CustomerInfoForm from "@/app/components/CustomerInfoForm";
import { loadStripe } from "@stripe/stripe-js";
import {
  createCheckoutSession,
  Metadata,
} from "../../../../actions/createChecoutSession";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function CartPage() {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [customerInfo, setCustomerInfo] = useState<{
    name: string;
    email: string;
    phone: string;
    address: string;
  } | null>(null);
  const [showCheckout] = useState(false);
  const { cart, updateQuantity, removeFromCart } = useCart();
  const { clearCart } = useCart();
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (showCheckout) {
    return <CheckoutPage />;
  }

  if (!isClient) {
    return <div>Loading...</div>;
  }

  const handleCheckOut = async (info: {
    name: string;
    email: string;
    phone: string;
    address: string;
  }) => {
    if (!isSignedIn) return;
    setIsLoading(true);

    try {
      const metadata: Metadata = {
        orderNumber: crypto.randomUUID(),
        customerName: info.name,
        customerEmail: info.email,
        clerkUserId: user!.id,
        address: info.address,
        phone: info.phone,
      };

      const cartItems = cart.map((item) => ({
        ...item,
        image: item.imageUrl,
      }));
      const response = await createCheckoutSession(cartItems, metadata);

      if (response.success) {
        const stripe = await stripePromise;
        await stripe?.redirectToCheckout({ sessionId: response.sessionId });
        clearCart();
      }
    } catch (error) {
      console.error("Error creating checkout session", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-start">Bag</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cart.length === 0 ? (
            <p className="text-center">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div
                key={item._id}
                className="flex flex-col md:flex-row items-center border-b pb-4"
              >
                {/* Image */}
                <div className="w-40 h-40">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={250}
                    height={250}
                    className="rounded object-cover"
                  />
                </div>

                {/* Item Details */}
                <div className="flex-1 mt-4 md:mt-0 md:ml-6">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600">Ashen Slate/Cobalt Bliss</p>
                  <div className="flex items-center gap-6 ">
                    <p className="text-gray-600">Size: L</p>
                    <div className="flex items-center ">
                      <p className="text-gray-600">Quantity</p>
                      <input
                        type="number"
                        value={item.quantity || 1}
                        onChange={(e) => {
                          const value = Math.max(
                            1,
                            parseInt(e.target.value) || 1
                          );
                          updateQuantity(item._id, value);
                        }}
                        className="w-10 border border-none text-center"
                      />
                    </div>
                  </div>
                  <div className="items-end flex h-10 justify-center md:justify-start mb-6">
                    <button>
                      <FaRegHeart className=" text-black h-6 w-5" />
                    </button>
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="ml-4 text-red-500 hover:underline "
                    >
                      🗑️
                    </button>
                  </div>
                </div>

                {/* Quantity and Remove */}
                <div>
                  <p className="font-medium">
                    MRP: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right Side: Summary */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Estimated Delivery & Handling</span>
            <span className="font-medium">Free</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          {isSignedIn ? (
            <>
              <CustomerInfoForm onSubmit={setCustomerInfo} />
              <button
                onClick={() => handleCheckOut(customerInfo!)}
                disabled={isLoading || !customerInfo}
                className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
              >
                {isLoading ? "Processing..." : "Checkout"}
              </button>
            </>
          ) : (
            <SignInButton mode="modal">
              <button className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Sign in to Checkout
              </button>
            </SignInButton>
          )}
        </div>
      </div>
    </div>
  );
}
