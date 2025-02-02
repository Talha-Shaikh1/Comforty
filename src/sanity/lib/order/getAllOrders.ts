import { Order } from "@/types/interfaces";
import { client } from "../client";
import { auth } from "@clerk/nextjs/server";

export async function getAllOrders() {
  const { userId } = await auth();
  const query = `*[_type == "order" && clerkUserId == "${userId}" ] | order(orderDate desc) {
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
        orderDate,
      }`;

  try {
    const data: Order[] = await client.fetch(query);
    if (!data || data.length === 0) {
      return [];
    }
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching orders:", error.message);
      
    }
    throw new Error("An unknown error occurred while fetching orders.");
  }
}
