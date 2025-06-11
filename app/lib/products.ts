export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  sizes: string[];
  category: string;
  featured?: boolean;
  available: boolean;
  colors?: string[];
  customizable?: boolean;
  minOrder?: number;
};

const categories = [
  "jackets",
  "t-shirts",
  "hoodies",
  "hats",
  "sets",
  "custom"
];

export const products: Product[] = [
  {
    id: "1",
    name: "514 Buffalo Plaid Jacket",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop&crop=center",
    description: "Custom buffalo plaid jacket featuring the iconic 514 logo. Perfect for making a bold statement with classic red and black pattern.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    category: "jackets",
    featured: true,
    available: true,
    colors: ["Red/Black"],
    customizable: true
  },
  {
    id: "2",
    name: "BRUH Denim Jacket",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=600&h=600&fit=crop&crop=center",
    description: "Custom white denim jacket with BRUH design. Premium quality denim with professional grade printing.",
    sizes: ["S", "M", "L", "XL"],
    category: "jackets",
    available: true,
    colors: ["White"],
    customizable: true
  },
  {
    id: "3",
    name: "Yellow Custom Denim",
    price: 139.99,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop&crop=center",
    description: "Yellow denim jacket with custom patches and prints. Make a statement with this unique piece.",
    sizes: ["S", "M", "L", "XL"],
    category: "jackets",
    available: true,
    colors: ["Yellow"],
    customizable: true
  },
  {
    id: "4",
    name: "Knicks Custom Hat",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=600&fit=crop&crop=center",
    description: "Custom Knicks-themed hat with unique cartoon print. Perfect for showing your team spirit.",
    sizes: ["One Size"],
    category: "hats",
    available: true,
    colors: ["Blue/Orange"],
    customizable: true,
    featured: true
  },
  {
    id: "5",
    name: "Teddy Bear Gang Tee",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop&crop=center",
    description: "Teddy Bear Gang custom t-shirt. High-quality print on premium cotton.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    category: "t-shirts",
    available: true,
    colors: ["White", "Black"],
    customizable: true
  },
  {
    id: "6",
    name: "Ill Vill Providence",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=600&fit=crop&crop=center",
    description: "Ill Vill Providence custom design t-shirt. Represent your city in style.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    category: "t-shirts",
    available: true,
    colors: ["Black", "White"],
    customizable: true
  },
  {
    id: "7",
    name: "Graduation Custom Set",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=600&fit=crop&crop=center",
    description: "Custom graduation-themed apparel set. Celebrate your achievement in style.",
    sizes: ["S", "M", "L", "XL"],
    category: "sets",
    available: true,
    customizable: true,
    minOrder: 5
  },
  {
    id: "8",
    name: "Premium Streetwear Hoodie",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=600&fit=crop&crop=center",
    description: "Premium quality streetwear hoodie with custom designs. Perfect for urban fashion.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    category: "hoodies",
    available: true,
    colors: ["Black", "Gray", "Navy"],
    customizable: true,
    featured: true
  },
  {
    id: "9",
    name: "Vintage Band Tee",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=600&h=600&fit=crop&crop=center",
    description: "Vintage-style band t-shirt with distressed printing and retro graphics.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    category: "t-shirts",
    available: true,
    colors: ["Black", "White", "Vintage"],
    customizable: true
  },
  {
    id: "10",
    name: "Athletic Performance Tee",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=600&fit=crop&crop=center",
    description: "High-performance athletic t-shirt with moisture-wicking fabric and custom prints.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    category: "t-shirts",
    available: true,
    colors: ["White", "Gray", "Navy", "Red"],
    customizable: true
  },
  {
    id: "11",
    name: "Designer Snapback",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=600&fit=crop&crop=center",
    description: "Premium snapback hat with embroidered designs and adjustable fit.",
    sizes: ["One Size"],
    category: "hats",
    available: true,
    colors: ["Black", "White", "Red", "Navy"],
    customizable: true
  },
  {
    id: "12",
    name: "Corporate Uniform Set",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=600&h=600&fit=crop&crop=center",
    description: "Professional corporate uniform set with custom branding and logos.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    category: "sets",
    available: true,
    customizable: true,
    minOrder: 10
  }
];

export function getProductsByCategory(category: string) {
  if (category === "all") {
    return products;
  }
  return products.filter(product => product.category === category);
}

export function getFeaturedProducts() {
  return products.filter(product => product.featured);
}

export function getCategories() {
  return categories;
}

export function getProductById(id: string) {
  return products.find(product => product.id === id);
} 