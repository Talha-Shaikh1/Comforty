import { client } from '@/sanity/lib/client';
import { Product } from '@/types/interfaces';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { TrolleyIcon } from '@sanity/icons';
import { fetchFeatureProducts } from '@/sanity/lib/product/getFeatureProducts';


export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;}
) {
  const { slug } = await params;
  const query = `*[_type == "products" && slug.current == $slug][0]{
  _id,
    title,
    "imageUrl": image.asset->url,
    price,
    badge,
    priceWithoutDiscount,
    inventory,
    description,
  }` ;
  const product: Product | null = await client.fetch(query, { slug });
  const featureProduct = await fetchFeatureProducts();

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div className=" px-4 py-8 ">
      <div className="flex gap-8 flex-col md:flex-row items-center justify-center">
        
        <div className=" h-full md:h-96">
          <Image
            src={product.imageUrl}
            alt={product.title}
            height={450}
            width={450}
            className="rounded-lg shadow-md"
          />
        </div>

        
        <div className="flex flex-col justify-center items-center md:items-start">
          <div className="flex flex-col justify-center md:items-start items-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {product.title}
            </h1>
            <div className="w-28 py-2 bg-[#029FAE] text-center rounded-3xl text-white font-semibold ">
            {product.priceWithoutDiscount && (
              <span className="text-gray-500 line-through mr-2">
                ${product.priceWithoutDiscount}
              </span>
            )}
            <span className="text-white font-bold">${product.price}</span>
            </div>
          </div>

          <hr className="my-6 w-80" />
          <div className="w-96 flex flex-col justify-center items-center md:items-start">
            <p className="text-gray-400 md:text-start text-center">{product.description}</p>
            <div className="mt-6 w-48 py-3 bg-[#029FAE] text-white text-lg font-medium rounded-md hover:bg-teal-600 transition duration-300 flex text-center justify-center items-center">
            <TrolleyIcon className="w-8 h-8"/>
            <button >
              Add to Cart
            </button>
            </div>
            
          </div>
        </div>
      </div>

      
    </div>

{/* Featured Products Section */}
<div className="mt-36">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Featured Products
          </h2>
          <Link href={"/products/"} className="underline underline-offset-4">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {featureProduct.slice(0, 5).map((item) => (
            <div
              key={item._id}
              className=" p-4 rounded-lg transition duration-300"
            >
              <div className="relative w-full h-32 mb-4">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <div className="flex justify-between">
              <h3 className="text-sm font-medium text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">${item.price}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}



