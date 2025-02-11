import React from 'react';


// Function to convert string to title case
function toTitleCase(str: string) {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

import ProductGrid from '@/app/components/ProductGrid';
import { getProductsByCategory } from '@/sanity/lib/product/getProductsByCategory';

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
 const {slug} = await params

 console.log("Slug", slug)

 const products = await getProductsByCategory(slug)

  console.log("Products :" , products)

  const categoryTitle = toTitleCase((await params).slug.split('-').join(' '));

  

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-start text-gray-800 my-12 pb-12">
        Products in {categoryTitle} Category
      </h2>
      {/* <ProductGrid products={products || []} /> */}
      <ProductGrid products={products} /> 
    </div>
  );
}
