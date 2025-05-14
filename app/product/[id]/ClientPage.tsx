'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Product } from '../../lib/products';
import { getProductById } from '../../lib/products';
import { useCart } from '../../hooks/useCart';
import { useProduct } from '../../contexts/ProductContext';
import WishlistButton from '../../components/WishlistButton';
import RelatedProducts from '../../components/RelatedProducts';
import RecentlyViewed from '../../components/RecentlyViewed';
import BulkOrderCalculator, { BulkOrder } from '../../components/BulkOrderCalculator';
import QuickView from '../../components/QuickView';

interface ClientPageProps {
  params: {
    id: string;
  };
}

export default function ClientPage({ params }: ClientPageProps) {
  const { addToCart } = useCart();
  const { addToRecentlyViewed } = useProduct();
  const [showBulkCalculator, setShowBulkCalculator] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const product = getProductById(params.id);

  const [selectedSize, setSelectedSize] = useState<string>(product?.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState<string>(product?.colors?.[0] || '');
  const [quantity, setQuantity] = useState(1);

  // Add to recently viewed on mount
  useEffect(() => {
    if (product) {
      addToRecentlyViewed(product);
    }
  }, [product, addToRecentlyViewed]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-semibold">Product not found</h1>
      </div>
    );
  }

  const handleAddToCart = () => {
    setError(null);
    
    if (!selectedSize && product.sizes.length > 0) {
      setError('Please select a size');
      return;
    }
    if (!selectedColor && product.colors && product.colors.length > 0) {
      setError('Please select a color');
      return;
    }
    if (product.minOrder && quantity < product.minOrder) {
      setError(`Minimum order quantity is ${product.minOrder}`);
      return;
    }

    addToCart({
      ...product,
      selectedSize,
      selectedColor,
      quantity,
    });
  };

  const handleBulkOrderSubmit = (order: BulkOrder) => {
    // Here you would typically send this to your backend
    console.log('Bulk order submitted:', order);
    // For now, just show an alert
    alert('Thank you for your bulk order request! We will contact you shortly.');
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
      alert('Failed to share product');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div 
          className={`relative aspect-square cursor-zoom-in transition-transform duration-300 ${
            isZoomed ? 'scale-150' : ''
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            quality={90}
          />
          <WishlistButton
            product={product}
            className="absolute top-4 right-4 text-gray-700 hover:text-black bg-white rounded-full p-2 shadow-md"
          />
          {isZoomed && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white">Click to zoom out</span>
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-gray-500">{product.category}</p>
            </div>
            <button
              onClick={handleShare}
              className="text-gray-500 hover:text-black bg-white rounded-full p-2 shadow-sm hover:shadow-md transition-shadow"
              aria-label="Share product"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
              </svg>
            </button>
          </div>

          <div className="flex items-baseline gap-4">
            <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
            {product.minOrder && (
              <span className="text-sm text-gray-500">
                Min. Order: {product.minOrder} items
              </span>
            )}
          </div>

          <p className="text-gray-600">{product.description}</p>

          {/* Size Selection */}
          {product.sizes.length > 0 && (
            <div>
              <h3 className="text-sm font-medium mb-2">Size</h3>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 text-sm border rounded-md transition-colors ${
                      selectedSize === size
                        ? 'bg-black text-white border-black'
                        : 'border-gray-300 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Color Selection */}
          {product.colors && product.colors.length > 0 && (
            <div>
              <h3 className="text-sm font-medium mb-2">Color</h3>
              <div className="flex gap-2 flex-wrap">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 text-sm border rounded-md transition-colors ${
                      selectedColor === color
                        ? 'bg-black text-white border-black'
                        : 'border-gray-300 hover:border-black'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div>
            <h3 className="text-sm font-medium mb-2">Quantity</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 border rounded-md hover:border-black transition-colors"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-20 px-3 py-1 border rounded-md text-center"
                min="1"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 border rounded-md hover:border-black transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={!product.available}
            className={`w-full py-3 px-6 rounded-md text-white transition-colors ${
              product.available
                ? 'bg-black hover:bg-gray-800'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            {product.available ? 'Add to Cart' : 'Out of Stock'}
          </button>

          {/* Bulk Order Button */}
          <button
            onClick={() => setShowBulkCalculator(!showBulkCalculator)}
            className="w-full py-3 px-6 rounded-md border border-black text-black hover:bg-gray-50 transition-colors"
          >
            {showBulkCalculator ? 'Hide Bulk Calculator' : 'Calculate Bulk Order'}
          </button>

          {/* Bulk Order Calculator */}
          {showBulkCalculator && (
            <div className="mt-8">
              <BulkOrderCalculator
                product={product}
                onSubmit={handleBulkOrderSubmit}
              />
            </div>
          )}

          {/* Additional Product Info */}
          <div className="border-t pt-6 mt-8">
            <h3 className="text-lg font-medium mb-4">Product Details</h3>
            <dl className="space-y-3">
              <div className="flex">
                <dt className="w-24 text-gray-500">Category:</dt>
                <dd className="flex-1">{product.category}</dd>
              </div>
              {product.customizable && (
                <div className="flex">
                  <dt className="w-24 text-gray-500">Customizable:</dt>
                  <dd className="flex-1">Yes - Contact us for details</dd>
                </div>
              )}
              <div className="flex">
                <dt className="w-24 text-gray-500">Available:</dt>
                <dd className="flex-1">
                  <span className={product.available ? 'text-green-600' : 'text-red-600'}>
                    {product.available ? 'In Stock' : 'Out of Stock'}
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts
        currentProduct={product}
        onQuickView={setQuickViewProduct}
      />

      {/* Recently Viewed */}
      <RecentlyViewed onQuickView={setQuickViewProduct} />

      {/* Quick View Modal */}
      {quickViewProduct && (
        <QuickView
          product={quickViewProduct}
          isOpen={true}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </div>
  );
} 