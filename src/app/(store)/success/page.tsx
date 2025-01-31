'use client'
import React, { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaCheckCircle } from 'react-icons/fa';
import { v4 as uuidv4 } from "uuid";
import { client } from '@/sanity/lib/client';
import { LineItem, Order} from '@/types/interfaces';


export default function SuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    const createOrder = async () => {
      if (sessionId) {
        const session = await fetch(`/api/stripe/session?session_id=${sessionId}`).then(res => res.json());

        const order: Order = {
          _type: "order",
          orderNumber: session.metadata.orderNumber,
          customerName: session.metadata.customerName,
          customerEmail: session.metadata.customerEmail,
          clerkUserId: session.metadata.clerkUserId,
          address: session.metadata.address,
          phone: session.metadata.phone,
          products: session.line_items.data.map((item: LineItem) => ({
            _key: uuidv4(),
            product: {
              _type: "reference",
              _ref: item.price.product,
            },
            quantity: item.quantity,
          })),
          totalPrice: session.amount_total / 100,
          status: "paid",
          orderDate: new Date().toISOString(),
        };

        await client.create(order);
      }
    };

    createOrder();
  }, [sessionId]);

  const handleHomeClick = () => {
    router.push('/');
  };

  const handleViewOrdersClick = () => {
    router.push(`/orders`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <div className="bg-white text-black p-10 rounded-lg shadow-lg text-center">
        <FaCheckCircle className="text-green-500 text-6xl mb-4 mx-auto" />
        <h1 className="text-4xl font-bold mb-4">Success</h1>
        <p className="text-lg mb-8">Your order has been placed successfully!</p>
        <div className="flex space-x-4">
          <button
            onClick={handleHomeClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Home Page
          </button>
          <button
            onClick={handleViewOrdersClick}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            View Order
          </button>
        </div>
      </div>
    </div>
  );
}