import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useCartStore } from '@/lib/store/cartStore';

export default function CartButton() {
  const items = useCartStore(state => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link
      href="/cart"
      className="relative p-2 text-white hover:text-brand-yellow transition-colors"
    >
      <ShoppingBagIcon className="h-6 w-6" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-brand-yellow text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Link>
  );
} 