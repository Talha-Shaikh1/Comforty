import stripe from "@/lib/stripe";

import { CartItemType } from "@/context/CartContext";

export type Metadata = {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  clerkUserId: string;
  address: string;
  phone: string;
};

export async function createCheckoutSession(
  items: CartItemType[],
  metadata: Metadata
) {
  try {
    console.log("Items received for checkout:", items);

    const baseUrl =
      process.env.NODE_ENV === "production"
        ? `https://${process.env.VERCEL_URL}`
        : `${process.env.NEXT_PUBLIC_BASE_URL}`;

    const successUrl = `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}&orderNumber=${metadata.orderNumber}`;

    const cancelUrl = `${baseUrl}/basket`;

    const session = await stripe.checkout.sessions.create({
      line_items: items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.title,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        orderNumber: metadata.orderNumber,
        customerName: metadata.customerName,
        customerEmail: metadata.customerEmail,
        clerkUserId: metadata.clerkUserId,
        address: metadata.address,
        phone: metadata.phone,
      },
    });

    return { success: true, sessionId: session.id };
  } catch (error) {
    console.error("Error creating checkout session", error);
    throw error;
  }
}
