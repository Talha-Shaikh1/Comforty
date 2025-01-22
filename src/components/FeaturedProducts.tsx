
import React from 'react';
import { fetchFeatureProducts } from '@/sanity/lib/product/getFeatureProducts';
import ProductGrid from '@/components/ProductGrid';

export default async function OurProduct() {
  
  const products = await fetchFeatureProducts();
 
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-start my-24 text-gray-800">
        Feature Products
      </h2>
      {/* <LoaderWrapper
      data={products}
      loading={loading}
      error={error}
      skeleton={<ProductGridSkeleton />}>
      {(products) => <ProductGrid products={products || []} />}
      </LoaderWrapper> */}
      <ProductGrid products={products || []} />
    </div>
  );
}
