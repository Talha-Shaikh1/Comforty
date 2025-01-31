import { client } from '../client';
import groq from 'groq';
import { Product } from '@/types/interfaces';

export async function fetchAllProducts() {
  const query = groq`*[_type == "products"]{
    _id,
    title,
    "imageUrl": image.asset->url,
    price,
    badge,
    description,
    priceWithoutDiscount,
    inventory,
    slug
  }`;

  try {
    const data: Product[] = await client.fetch(query);
    if (!data || data.length === 0) {
      throw new Error('No products found.');
    }
    return data;
  } catch (error: unknown) {
    
    if (error instanceof Error) {
      console.error('Error fetching products:', error.message);
      throw new Error(error.message); 
    }
    throw new Error('An unknown error occurred while fetching products.');
  }
}

