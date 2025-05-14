import Link from 'next/link';
import CartButton from '@/components/CartButton';

const categories = [
  { name: 'All Products', path: '/shop' },
  { name: 'Jackets', path: '/shop/jackets' },
  { name: 'T-Shirts', path: '/shop/t-shirts' },
  { name: 'Hoodies', path: '/shop/hoodies' },
  { name: 'Hats', path: '/shop/hats' },
  { name: 'Sets', path: '/shop/sets' },
  { name: 'Custom', path: '/shop/custom' },
];

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <nav className="bg-gray-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="text-xl font-bold gradient-text">
                  BthePrints
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <CartButton />
            </div>
          </div>
        </div>
      </nav>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Category Sidebar */}
          <aside className="md:w-64">
            <nav className="space-y-1">
              {categories.map((category) => (
                <Link
                  key={category.path}
                  href={category.path}
                  className="block px-4 py-2 text-sm rounded-lg hover:bg-gray-900 hover:text-brand-yellow transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
} 