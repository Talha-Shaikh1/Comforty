import { client } from '../client';
import groq from 'groq';
import { Product } from '@/types/interfaces';

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const PRODUCT_BY_CATEGORY_QUERY = groq`*[_type == "products" && references(*[_type == "categories" && slug.current == '${category}']._id)]{
    title,
  "imageUrl": image.asset->url,
  price,
  badge,
  priceWithoutDiscount, 
  inventory,
  slug
  }`;

  try {
    const products: Product[] = await client.fetch(PRODUCT_BY_CATEGORY_QUERY, {
      slug: `${category}*`
    });

    // Return empty array instead of throwing an error for no results
    if (!products || products.length === 0) {
      console.warn(`No products found for "${category}".`);
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
