import { products, ProductCategory } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return [
    { category: 'jackets' },
    { category: 't-shirts' },
    { category: 'hoodies' },
    { category: 'hats' },
    { category: 'sets' },
    { category: 'custom' },
  ];
}

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = params.category as ProductCategory;
  const validCategories: ProductCategory[] = ['jackets', 't-shirts', 'hoodies', 'hats', 'sets', 'custom'];
  
  if (!validCategories.includes(category)) {
    notFound();
  }

  const categoryProducts = products.filter(product => product.category === category);
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">{categoryName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
} 