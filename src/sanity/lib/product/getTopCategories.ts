import { client } from "../client";
import groq from "groq";
import { Category } from "@/types/interfaces";

export async function fetchTopCategories(): Promise<Category[]> {
  const query = groq`*[_type == "categories"]{
    title,
    _id,
    slug,
    "imageUrl": image.asset->url,
    "productCount": count(*[_type == "products" && references(^._id)]),
  }`;

  try {
    const data: Category[] = await client.fetch(query);
    if (!data || data.length === 0) {
      throw new Error("No Categories found.");
    }
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching Categories:", error.message);
      throw new Error(error.message);
    }
    throw new Error("An unknown error occurred while fetching categories.");
  }
}
