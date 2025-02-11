import { Product } from '@/types/interfaces';
import { client } from '../client';
import { groq } from 'next-sanity';

export const getProductBySlug = async (slug: string) => {
  const query = groq`*[_type == "products" && slug.current == $slug][0]{
  _id,
    title,
    "imageUrl": image.asset->url,
    price,
    badge,
    priceWithoutDiscount,
    inventory,
    description,
  }`;
  const product: Product = await client.fetch(query, { slug });
  return product;
};

export default getProductBySlug;