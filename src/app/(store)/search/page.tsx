import ProductGrid from '@/app/components/ProductGrid';
import { searchProductsByName } from '@/sanity/lib/product/searchProductByName'
import React from 'react'

export default async function searchPage({
    searchParams,
}: {
    searchParams: Promise<{
        query: string;
    }>
}) {

    const { query } = await searchParams;
    const products = await searchProductsByName(query);

    if(!products.length){
      return(
        <div className='flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4 '>
          <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-4xl'>
            <h1 className='tex-3xl font-bold mb-6 text-center'>
              No PRoducts found for: {query}
            </h1>
          </div>
        </div>
      )
    }


  return (
    <div className='flex flex-col items-center justify-top min-h-screen p-4'>
      <div className='text-3xl font-bold mb-6 text-center'>
        <h1 className='mb-20'>
          Search results for {query}
        </h1>

        <ProductGrid products={products}/>
      </div>
    </div>
  )
}
