'use client';

import { useProduct } from '../contexts/ProductContext';
import ProductGrid from './ProductGrid';
import { Product } from '../lib/products';

interface RecentlyViewedProps {
  onQuickView?: (product: Product) => void;
}

export default function RecentlyViewed({ onQuickView }: RecentlyViewedProps) {
  const { recentlyViewed } = useProduct();

  if (recentlyViewed.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">
      <ProductGrid
        products={recentlyViewed}
        onQuickView={onQuickView}
        title="Recently Viewed"
      />
    </section>
  );
} 