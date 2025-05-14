'use client';

import { products } from '@/lib/products';
import { useCartStore } from '@/lib/store/cartStore';
import { notFound } from 'next/navigation';
import Image from 'next/image';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find(p => p.id === params.id);
  const addToCart = useCartStore(state => state.addItem);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="aspect-square relative rounded-lg overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-bold text-brand-yellow mb-6">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-400 mb-8">{product.description}</p>
          
          <button 
            onClick={() => addToCart(product)}
            className="w-full md:w-auto bg-gradient-to-r from-brand-yellow to-brand-orange text-black font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
} 