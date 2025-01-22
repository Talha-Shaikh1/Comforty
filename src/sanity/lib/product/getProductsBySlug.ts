import { client } from '../client';

export const fetchProductBySlug = async (slug: string) => {
  const query = `*[_type == "product" && slug.current == $slug][0]`;
  const product = await client.fetch(query, { slug });
  return product;
};

export default fetchProductBySlug;