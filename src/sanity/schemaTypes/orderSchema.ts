import { defineField, defineArrayMember, defineType } from "sanity";
import { BasketIcon } from "@sanity/icons";
export const orderSchema = defineType({
  name: "order",
  type: "document",
  title: "Order",
  fields: [
    defineField({ name: "orderNumber", type: "string", title: "Order Number" }),
    defineField({
      name: "stripeSessionId",
      type: "string",
      title: "Stripe Session ID",
    }),
    defineField({
      name: "customerName",
      type: "string",
      title: "Customer Name",
    }),
    defineField({
      name: "customerEmail",
      type: "string",
      title: "Customer Email",
    }),
    defineField({
      name: "clerkUserId",
      type: "string",
      title: "Clerk User ID",
    }),
    defineField({ 
      name: "address",
       type: "string", 
       title: "Address" }),
    defineField({ 
      name: "phone", 
      type: "string", 
      title: "Phone" }),

    defineField({
      name: "products",
      title: "Products",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "product",
              title: "Product Bought",
              type: "reference",
              to: [{ type: "products" }], 
            }),
            defineField({
              name: "quantity",
              title: "Quantity Purchased",
              type: "number",
              validation: (Rule) => Rule.min(1).required(),
            }),
          ],
          preview: {
            select: {
              product: "product.title", 
              quantity: "quantity",
              image: "product.image",
              price: "product.price",
            },
            prepare(select) {
              return {
                title: `${select.product} x ${select.quantity}`,
                subtitle: `$${(select.price * select.quantity).toFixed(2)}`,
                media: select.image,
              };
            },
          },
        }),
      ],
    }),
    defineField({ name: "totalPrice", type: "number", title: "Total Price" }),
    defineField({
      name: "status",
      type: "string",
      title: "Status",
      options: {
        list: [
          "Pending", 
          "Processing", 
          "Shipped", 
          "Delivered", 
          "Cancelled"], 
        layout: "radio", 
      },
    }),
    defineField({ 
      name: "orderDate", 
      type: "datetime", 
      title: "Order Date" }),
  ],
  preview: {
    select: {
      name: "customerName",
      amount: "totalPrice",
      currency: "USD",
      orderId: "orderNumber",
      email: "customerEmail",
    },
    prepare(select) {
      return {
        title: `Order #${select.orderId}`,
        subtitle: `${select.name} - ${select.email}`,
        description: `Total: $${select.amount.toFixed(2)} ${select.currency}`,
        media: BasketIcon,
      };
    },
  },
});

