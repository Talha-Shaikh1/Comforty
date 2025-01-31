import { client } from "../client"


export const getAllProductsByCategory = async(categorySlug: string) => {
  const query = `*[_type == 'products' && categories->slug.current == $categorySlug]{
    _id,
    title,
    "imageUrl": image.asset->url,
    price,
    badge,
    description,
    inventory,
    priceWithoutDiscount,
  }`

  try {
    const products = await client.fetch(query, { categorySlug })
    return products
  } catch (error) {
    console.error("error in fetching products by category", error)

    return []
  }
}