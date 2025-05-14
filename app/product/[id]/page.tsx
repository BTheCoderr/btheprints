import { Metadata } from "next";
import { getProductById } from "../../lib/products";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = getProductById(params.id);
  
  if (!product) {
    return {
      title: "Product Not Found | BthePrints",
      description: "Sorry, we couldn't find the product you're looking for.",
    };
  }
  
  return {
    title: `${product.name} | BthePrints`,
    description: product.description,
    openGraph: {
      title: `${product.name} | BthePrints`,
      description: product.description,
      images: [
        {
          url: product.image || "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | BthePrints`,
      description: product.description,
      images: [product.image || "/images/og-image.jpg"],
    },
  };
}

import ClientPage from './ClientPage';

export default function ProductPage({ params }: { params: { id: string } }) {
  return <ClientPage params={params} />;
}
