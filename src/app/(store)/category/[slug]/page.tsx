import ProductGrid from "@/app/components/ProductGrid";
import { getAllProductsByCategory } from "@/sanity/lib/product/getProductsByCategory";
import React from "react";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const products = await getAllProductsByCategory(slug);

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold mb-6 text-center">
          {slug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}{" "}
          Collection
        </h1>
      </div>

      <ProductGrid products={products || []} />
    </div>
  );
}
