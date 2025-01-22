

import React, { useState, useEffect } from 'react';
import { fetchAllProducts } from '@/sanity/lib/product/getAllProducts';
import ProductGrid from '@/components/ProductGrid';
import { Product } from '@/types/interfaces';

export default async function AllProducts() {
  const products = await fetchAllProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-start my-24 text-gray-800">
        All Products
      </h2>
      <ProductGrid products={products || []} />
    </div>
  );
}
