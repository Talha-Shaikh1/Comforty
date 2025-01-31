import { defineField, defineArrayMember } from 'sanity';

const orderSchema  = {
  name: 'order',
  type: 'document',
  title: 'Order',
  fields: [
    { name: 'orderNumber', type: 'string', title: 'Order Number' },
    { name: 'customerName', type: 'string', title: 'Customer Name' },
    { name: 'customerEmail', type: 'string', title: 'Customer Email' },
    { name: 'clerkUserId', type: 'string', title: 'Clerk User ID' },
    { name: 'address', type: 'string', title: 'Address' },
    { name: 'phone', type: 'string', title: 'Phone' },
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'product',
              title: 'Product Bought',
              type: 'reference',
              to: [{ type: 'products' }] // Make sure "products" is the correct collection name
            }),
            defineField({
              name: 'quantity',
              title: 'Quantity Purchased',
              type: 'number',
              validation: Rule => Rule.min(1).required()
            }),
          ],
          preview: {
            select: {
              product: 'product.title', // Sanity may store product title instead of name
              quantity: 'quantity',
              image: 'product.image',
              price: 'product.price',
            },
            prepare(select) {
              return {
                title: `${select.product} x ${select.quantity}`,
                subtitle: `$${(select.price * select.quantity).toFixed(2)}`,
                media: select.image
              }
            }
          }
        })
      ]
    },
    { name: 'totalPrice', type: 'number', title: 'Total Price' },
    {
      name: 'status',
      type: 'string',
      title: 'Status',
      options: {
        list: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'], // Dropdown menu
        layout: 'radio' // Optional: makes UI better
      }
    },
    { name: 'orderDate', type: 'datetime', title: 'Order Date',  },
  ],
};

export default orderSchema;