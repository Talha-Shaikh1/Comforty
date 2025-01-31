'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { FaTimesCircle } from 'react-icons/fa';

export default function CancelPage() {
  const router = useRouter();

  const handleRetryClick = () => {
    router.push('/cart');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-400 to-pink-500 text-white">
      <div className="bg-white text-black p-10 rounded-lg shadow-lg text-center">
        <FaTimesCircle className="text-red-500 text-6xl mb-4 mx-auto" />
        <h1 className="text-4xl font-bold mb-4">Order Canceled</h1>
        <p className="text-lg mb-8">Your order has been canceled. If you wish to try again, please click the button below.</p>
        <button
          onClick={handleRetryClick}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Retry Order
        </button>
      </div>
    </div>
  );
}