import { client } from "../client";

export const getProductsByCategory = async (slug: string) => {
  const query = `*[_type == "product" && category.slug.current == $slug] {
    _id,
    title,
    "imageUrl": image.asset->url,
    price,
    badge,
    priceWithoutDiscount,
    inventory,
    description,
    slug {
      current 
}
      
    }`;

  try {
    const products = await client.fetch(query, { slug });
    return products;
  } catch (error) {
    console.error("error in fetching products by category", error);

    return [];
  }
};
