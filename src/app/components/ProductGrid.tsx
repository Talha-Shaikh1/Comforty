import React from 'react';
import { Product } from '@/types/interfaces';
import ProductCard from './ProductCard';

interface Props {
  products: Product[];
}

const ProductGrid: React.FC<Props> = ({ products }) => {
  if (products.length === 0) {
    return (
      <div className="text-center text-gray-500">
        <p>No products available at the moment. Please check back later.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <ProductCard key={product._id 
          || `product-${index}`
        } product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
