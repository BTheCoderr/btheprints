'use client';

import { Product, getProductsByCategory } from '../lib/products';
import ProductGrid from './ProductGrid';

interface RelatedProductsProps {
  currentProduct: Product;
  onQuickView?: (product: Product) => void;
}

export default function RelatedProducts({
  currentProduct,
  onQuickView,
}: RelatedProductsProps) {
  // Get products from the same category
  const categoryProducts = getProductsByCategory(currentProduct.category)
    .filter((p) => p.id !== currentProduct.id)
    .slice(0, 4); // Show up to 4 related products

  if (categoryProducts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">
      <ProductGrid
        products={categoryProducts}
        onQuickView={onQuickView}
        title="You May Also Like"
      />
    </section>
  );
} 