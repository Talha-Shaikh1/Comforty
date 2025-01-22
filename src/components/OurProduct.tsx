import React from 'react';
import { fetchOurProducts } from '@/sanity/lib/product/getOurProducts';
import ProductGrid from '@/components/ProductGrid';

export default async function OurProduct() {

  const products = await fetchOurProducts()

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-start my-24 text-gray-800">
        Our Products
      </h2>

      <ProductGrid products={products || []} />
    </div>
  );
}
