import { client } from '../client';
import groq from 'groq';
import { Product } from '@/types/interfaces';

export async function searchProductsByName(searchParam: string): Promise<Product[]> {
  const SEARCH_PRODUCT_QUERY = groq`
    *[_type == "products" && title match $searchParam] | order(name asc) {
      _id,
      title,
      "imageUrl": image.asset->url,
      price,
      badge,
      description,
      priceWithoutDiscount,
      inventory,
      slug
    }
  `;

  try {
    const products: Product[] = await client.fetch(SEARCH_PRODUCT_QUERY, {
      searchParam: `${searchParam}*`
    });

    // Return empty array instead of throwing an error for no results
    if (!products || products.length === 0) {
      console.warn(`No products found for "${searchParam}".`);
      return [];
    }

    return products;
  } catch (error) {
    console.error(
      'Error searching for products:',
      error instanceof Error ? error.message : 'Unknown error.'
    );
    throw new Error('Failed to fetch products. Please try again later.');
  }
}
