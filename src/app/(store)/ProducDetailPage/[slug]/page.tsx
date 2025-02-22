
import { Product } from "@/types/interfaces";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchFeatureProducts } from "@/sanity/lib/product/getFeatureProducts";
import Head from "next/head";
import getProductBySlug from "@/sanity/lib/product/getProductBySlug";
import AddToCartButton from "@/app/components/AddToCartButton";

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params
  const product: Product = await getProductBySlug(slug)
  const featureProduct = await fetchFeatureProducts()


  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Head>
        <title>{product.title} - Buy Now | Comforty</title>
        <meta
          name="description"
          content={`Buy ${product.title} at Comforty. ${product.description}`}
        />
        <meta property="og:title" content={`${product.title} - Comforty`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.imageUrl} />
      </Head>
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
              <p className="text-gray-400 md:text-start text-center">
                {product.description}
              </p>
              <AddToCartButton product={product}/>
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
              <Link href={`/ProducDetailPage/${item.slug.current}`}>
                <div className="relative w-full h-32 mb-4">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </Link>
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
  );
}
