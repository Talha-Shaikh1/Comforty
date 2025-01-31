import { client } from '@/sanity/lib/client';
import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image'; // Sanity Image Helper
import { Order, OrderItem } from '@/types/interfaces';

export default async function OrdersPage() {
  const { userId } = await auth();

  if (!userId) {
    return <p className="text-center text-red-500">You must be logged in to view orders.</p>;
  }

  const query = `*[_type == "order" && clerkUserId == "${userId}"]{
    _id,
    orderNumber,
    customerName,
    customerEmail,
    address,
    phone,
    products[] {
      _key,
      quantity,
      product->{
        _id,
        title,
        price,
        image
      }
    },
    totalPrice,
    status,
    orderDate
  }`;

  const orders = await client.fetch(query);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Orders</h1>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500">You have no orders yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order: Order) => (
            <div key={order._id} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Order #{order.orderNumber}</h2>
              <p className="text-gray-600 text-sm mb-2">Placed on: {new Date(order.orderDate).toLocaleString()}</p>

              <div className="mb-4 text-sm">
                <p><strong>Name:</strong> {order.customerName}</p>
                <p><strong>Email:</strong> {order.customerEmail}</p>
                <p><strong>Address:</strong> {order.address}</p>
                <p><strong>Phone:</strong> {order.phone}</p>
              </div>

              <p className="font-semibold">Total Price: <span className="text-green-600">${order.totalPrice.toFixed(2)}</span></p>

              {/* Order Status with Color */}
              <p className="mt-2">
                <strong>Status:</strong> 
                <span className={`ml-2 px-2 py-1 rounded text-white text-sm ${
                  order.status === "Pending" ? "bg-yellow-500" :
                  order.status === "Processing" ? "bg-blue-500" :
                  order.status === "Shipped" ? "bg-indigo-500" :
                  order.status === "Delivered" ? "bg-green-500" :
                  order.status === "Cancelled" ? "bg-red-500" :
                  "bg-gray-500"
                }`}>
                  {order.status}
                </span>
              </p>

              {/* Products List - Mobile Row & Desktop Grid */}
              <h3 className="text-lg font-semibold mt-4">Products:</h3>
              <ul className="mt-2 space-y-2">
                {order.products.map((item: OrderItem) => (
                  <li key={item._key} className="border p-3 rounded flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    {item.product?.image && (
                      <div className="w-20 h-20 relative">
                        <Image
                          src={urlFor(item.product.image).width(100).height(100).url()}
                          alt={item.product.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded"
                        />
                      </div>
                    )}
                    <div className="text-center sm:text-left">
                      <p className="font-medium">{item.product?.title || "Unknown Product"}</p>
                      <p className="text-sm">Quantity: {item.quantity}</p>
                      <p className="text-sm">Price: ${item.product?.price?.toFixed(2)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
