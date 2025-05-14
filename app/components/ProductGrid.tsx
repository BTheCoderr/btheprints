'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../lib/products';
import WishlistButton from './WishlistButton';

interface ProductGridProps {
  products: Product[];
  onQuickView?: (product: Product) => void;
  showWishlist?: boolean;
  title?: string;
}

export default function ProductGrid({
  products,
  onQuickView,
  showWishlist = true,
  title,
}: ProductGridProps) {
  return (
    <div>
      {title && (
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div 
              className="aspect-square overflow-hidden rounded-lg bg-gray-100 relative cursor-pointer"
              onClick={() => onQuickView?.(product)}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-200"
              />
              {product.customizable && (
                <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                  Customizable
                </div>
              )}
              {showWishlist && (
                <WishlistButton
                  product={product}
                  className="absolute top-2 left-2 text-gray-700 hover:text-black"
                />
              )}
              {onQuickView && (
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-75 px-4 py-2 rounded-md">
                    Quick View
                  </span>
                </div>
              )}
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-900">
                <Link href={`/product/${product.id}`} className="hover:underline">
                  {product.name}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {product.colors?.join(", ")}
              </p>
              <div className="mt-2 flex items-center justify-between">
                <p className="text-lg font-medium text-gray-900">
                  ${product.price.toFixed(2)}
                </p>
                {product.minOrder && product.minOrder > 1 && (
                  <span className="text-sm text-gray-500">
                    Min: {product.minOrder}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 