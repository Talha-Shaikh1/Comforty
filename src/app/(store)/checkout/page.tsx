// // // src/app/checkout/page.tsx
// // "use client";

// // import React, { useState } from "react";
// // import { useCart } from "@/context/CartContext";
// // import { useRouter } from "next/navigation";

// // const CheckoutPage: React.FC = () => {
// //   const { cartItems, setCartItems } = useCart();
// //   const router = useRouter();

// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     address: "",
// //     phone: "",
// //   });


// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();

// //     // Order data to send to Sanity
// //     const orderData = {
// //       user: formData,
// //       products: cartItems,
// //       total: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0 as number),
// //       createdAt: new Date(),
// //     };

// //     try {
// //       // Send order data to Sanity
// //       await fetch("/api/createOrder", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(orderData),
// //       });

// //       // Empty the cart
// //       setCartItems([]);

// //       // Redirect to a success page
// //       router.push("/success");
// //     } catch (error) {
// //       console.error("Order submission failed:", error);
// //     }
// //   };

// //   return (
// //     <div className="p-6 max-w-2xl mx-auto">
// //       <h1 className="text-2xl font-bold mb-6">Checkout</h1>
// //       <form onSubmit={handleSubmit}>
// //         <div className="mb-4">
// //           <label className="block font-medium mb-2">Name</label>
// //           <input
// //             type="text"
// //             name="name"
// //             value={formData.name}
// //             onChange={handleChange}
// //             className="w-full p-2 border rounded"
// //             required
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block font-medium mb-2">Email</label>
// //           <input
// //             type="email"
// //             name="email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             className="w-full p-2 border rounded"
// //             required
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block font-medium mb-2">Address</label>
// //           <input
// //             type="text"
// //             name="address"
// //             value={formData.address}
// //             onChange={handleChange}
// //             className="w-full p-2 border rounded"
// //             required
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block font-medium mb-2">Phone</label>
// //           <input
// //             type="tel"
// //             name="phone"
// //             value={formData.phone}
// //             onChange={handleChange}
// //             className="w-full p-2 border rounded"
// //             required
// //           />
// //         </div>

// //         <button
// //           type="submit"
// //           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// //         >
// //           Place Order
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default CheckoutPage;


// // 'use client';

// // import React, { useEffect, useState } from 'react';
// // import { useCart } from '@/context/CartContext';

// // const Checkout = () => {
// //   const { cart } = useCart(); // Cart context se cart ki value le rahe hain
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     address: '',
// //   });

// //   useEffect(() => {
// //     if (!cart || cart.length === 0) {
// //       console.error('Cart is empty!');
// //     }
// //   }, [cart]);

// //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();

// //     // Validate cart and form data
// //     if (!cart || cart.length === 0) {
// //       alert('Your cart is empty. Add products to proceed.');
// //       return;
// //     }

// //     if (!formData.name || !formData.email || !formData.address) {
// //       alert('Please fill all the fields.');
// //       return;
// //     }

// //     // Prepare order data
// //     const orderData = {
// //       customer: formData,
// //       items: cart.map(item => ({
// //         id: item._id,
// //         title: item.title,
// //         price: item.price,
// //         quantity: item.quantity,
// //       })),
// //       total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
// //     };

// //     console.log('Submitting Order:', orderData);

// //     try {
// //       const response = await fetch('/api/orders', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(orderData),
// //       });

// //       if (response.ok) {
// //         alert('Order placed successfully!');
// //         localStorage.removeItem('cart'); // Clear cart
// //         window.location.href = '/thank-you'; // Redirect to thank you page
// //       } else {
// //         throw new Error('Failed to place order.');
// //       }
// //     } catch (error) {
// //       console.error('Error placing order:', error);
// //       alert('Something went wrong. Please try again.');
// //     }
// //   };

// //   return (
// //     <div className="p-6 max-w-lg mx-auto">
// //       <h1 className="text-2xl font-bold mb-4">Checkout</h1>
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           name="name"
// //           placeholder="Your Name"
// //           value={formData.name}
// //           onChange={handleInputChange}
// //           className="border p-2 w-full mb-4"
// //           required
// //         />
// //         <input
// //           type="email"
// //           name="email"
// //           placeholder="Your Email"
// //           value={formData.email}
// //           onChange={handleInputChange}
// //           className="border p-2 w-full mb-4"
// //           required
// //         />
// //         <input
// //           type="text"
// //           name="address"
// //           placeholder="Your Address"
// //           value={formData.address}
// //           onChange={handleInputChange}
// //           className="border p-2 w-full mb-4"
// //           required
// //         />
// //         <button
// //           type="submit"
// //           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// //         >
// //           Submit Order
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Checkout;


// // app/checkout/page.tsx


// // app/checkout/page.tsx
// 'use client';

// import { useUser } from '@clerk/nextjs';
// import { useState } from 'react';
// import { useCart } from '@/context/CartContext'; // Import the CartContext

// export default function CheckoutPage() {
//   const { user } = useUser();
//   const { cart, clearCart } = useCart(); // Use cart and clearCart from CartContext
//   const [userName, setUserName] = useState('');
//   const [userEmail, setUserEmail] = useState(user?.emailAddresses[0]?.emailAddress || '');
//   const [userAddress, setUserAddress] = useState('');

//   const getSelectedProducts = () => {
//     // Map the cart items to Sanity's reference format
//     const selectedProducts = cart.map((product) => ({
//       _type: 'reference',
//       _ref: product._id,
//       quantity: product.quantity,
//     }));

//     return selectedProducts;
//   };

//   // const handleSubmit = async (e: React.FormEvent) => {
//   //   e.preventDefault();

//   //   const order = {
//   //     userId: user?.id,
//   //     userName,
//   //     userEmail,
//   //     userAddress,
//   //     products: getSelectedProducts(), // Get selected products
//   //     orderDate: new Date().toISOString(),
//   //   };

//   //   console.log('Submitting Order:', order); // Log the order data

//   //   const response = await fetch('/api/orders', {
//   //     method: 'POST',
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //     },
//   //     body: JSON.stringify(order),
//   //   });

//   //   if (response.ok) {
//   //     alert('Order placed successfully!');
//   //     clearCart(); // Clear the cart after successful order
//   //     window.location.href = '/orders';
//   //   } else {
//   //     const errorData = await response.json(); // Log the error response
//   //     console.error('Error Response:', errorData);
//   //     alert('Failed to place order.');
//   //   }
//   // };


//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
  
//     const order = {
//       userId: user?.id,
//       userName,
//       userEmail,
//       userAddress,
//       products: getSelectedProducts(),
//       orderDate: new Date().toISOString(),
//     };
  
  
//     try {
//       const response = await fetch('/api/orders', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(order),
//       });
  
//       const result = await response.json(); // Get response data
  
//       if (response.ok) {
//         alert('Order placed successfully!');
//         clearCart();
//         window.location.href = '/orders';
//       } else {
//         console.error('Error Response:', result);
//         alert(`Failed to place order: ${result.error}`);
//       }
//     } catch (error) {
//       console.error("Network or Server Error:", error);
//       alert("Something went wrong. Check console for details.");
//     }
//   };
  

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Your Name"
//         value={userName}
//         onChange={(e) => setUserName(e.target.value)}
//         required
//       />
//       <input
//         type="email"
//         placeholder="Your Email"
//         value={userEmail}
//         onChange={(e) => setUserEmail(e.target.value)}
//         required
//       />
//       <input
//         type="text"
//         placeholder="Your Address"
//         value={userAddress}
//         onChange={(e) => setUserAddress(e.target.value)}
//         required
//       />
//       <button type="submit">Submit Order</button>
//     </form>
//   );
// }

import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}
