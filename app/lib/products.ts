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
    image: "/images/placeholders/product-placeholder.svg",
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
    image: "/images/placeholders/product-placeholder.svg",
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
    image: "/images/placeholders/product-placeholder.svg",
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
    image: "/images/placeholders/product-placeholder.svg",
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
    image: "/images/placeholders/product-placeholder.svg",
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
    image: "/images/placeholders/product-placeholder.svg",
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
    image: "/images/placeholders/product-placeholder.svg",
    description: "Custom graduation-themed apparel set. Celebrate your achievement in style.",
    sizes: ["S", "M", "L", "XL"],
    category: "sets",
    available: true,
    customizable: true,
    minOrder: 5
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