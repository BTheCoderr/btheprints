import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link 
      href={`/shop/product/${product.id}`}
      className="group bg-gray-900 rounded-lg overflow-hidden transition-transform hover:scale-[1.02]"
    >
      <div className="aspect-square relative">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-1">{product.name}</h3>
        <p className="text-gray-400 text-sm mb-2 line-clamp-2">{product.description}</p>
        <p className="text-brand-yellow font-bold">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
} 