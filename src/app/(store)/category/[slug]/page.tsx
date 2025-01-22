import React from 'react';
import ProductGrid from '@/components/ProductGrid';
import { client } from '@/sanity/lib/client';

// Function to convert string to title case
function toTitleCase(str: string) {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
import { Category } from '@/types/interfaces';


export async function generateStaticParams() {
  const categories = await client.fetch(`*[_type == "categories"]{ slug }`);
  return categories.map((category: Category) => ({
    slug: category.slug.current,
  }));
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const products = await client.fetch(
    `*[_type == "products" && references(*[_type == "categories" && slug.current == $slug]._id)]{
      title,
    "imageUrl": image.asset->url,
    price,
    badge,
    priceWithoutDiscount,
    inventory,
    slug
    }`,
    { slug: params.slug }
  );


  const categoryTitle = toTitleCase(params.slug.split('-').join(' '));

  

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-start text-gray-800 my-12 pb-12">
        Products in {categoryTitle} Category
      </h2>
      <ProductGrid products={products} />
    </div>
  );
}

