export type ProductCategory = 'jackets' | 't-shirts' | 'hoodies' | 'hats' | 'sets' | 'custom';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  images: string[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: '514-buffalo-plaid',
    name: '514 Buffalo Plaid Jacket',
    description: 'Classic buffalo plaid jacket with custom screen printing. Perfect for any season.',
    price: 89.99,
    category: 'jackets',
    images: ['/images/products/514-buffalo-plaid.svg'],
    featured: true
  },
  {
    id: 'bruh-denim',
    name: 'BRUH Denim Jacket',
    description: 'Premium denim jacket with BRUH design screen printed on the back.',
    price: 99.99,
    category: 'jackets',
    images: ['/images/products/bruh-denim.svg'],
    featured: true
  },
  {
    id: 'classic-tee',
    name: 'Classic T-Shirt',
    description: 'Premium cotton t-shirt perfect for custom designs.',
    price: 24.99,
    category: 't-shirts',
    images: ['/images/products/classic-tee.svg']
  },
  {
    id: 'premium-hoodie',
    name: 'Premium Hoodie',
    description: 'High-quality hoodie available for custom designs.',
    price: 49.99,
    category: 'hoodies',
    images: ['/images/products/premium-hoodie.svg']
  },
  {
    id: 'snapback-cap',
    name: 'Snapback Cap',
    description: 'Adjustable snapback cap ready for your custom design.',
    price: 29.99,
    category: 'hats',
    images: ['/images/products/snapback-cap.svg']
  }
]; 