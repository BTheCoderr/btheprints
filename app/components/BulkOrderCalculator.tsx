'use client';

import { useState, useEffect } from 'react';
import { Product } from '../lib/products';

interface BulkOrderCalculatorProps {
  product: Product;
  onSubmit: (order: BulkOrder) => void;
}

export interface BulkOrder {
  product: Product;
  quantity: number;
  sizes: { [key: string]: number };
  color?: string;
  customization?: string;
  totalPrice: number;
}

const BULK_DISCOUNTS = [
  { min: 50, discount: 0.05 }, // 5% off for 50+ items
  { min: 100, discount: 0.10 }, // 10% off for 100+ items
  { min: 250, discount: 0.15 }, // 15% off for 250+ items
  { min: 500, discount: 0.20 }, // 20% off for 500+ items
];

export default function BulkOrderCalculator({
  product,
  onSubmit,
}: BulkOrderCalculatorProps) {
  const [sizes, setSizes] = useState<{ [key: string]: number }>(
    Object.fromEntries(product.sizes.map(size => [size, 0]))
  );
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '');
  const [customization, setCustomization] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [nextDiscount, setNextDiscount] = useState<{ quantity: number; discount: number } | null>(null);

  const totalQuantity = Object.values(sizes).reduce((sum, qty) => sum + qty, 0);

  const getDiscount = (quantity: number) => {
    const discount = BULK_DISCOUNTS
      .slice()
      .reverse()
      .find(d => quantity >= d.min);
    return discount?.discount || 0;
  };

  const calculateTotal = () => {
    const basePrice = product.price * totalQuantity;
    const discount = getDiscount(totalQuantity);
    return basePrice * (1 - discount);
  };

  // Calculate next discount tier
  useEffect(() => {
    const currentDiscount = getDiscount(totalQuantity);
    const nextDiscountTier = BULK_DISCOUNTS.find(d => d.min > totalQuantity);
    
    if (nextDiscountTier) {
      const remaining = nextDiscountTier.min - totalQuantity;
      setNextDiscount({
        quantity: remaining,
        discount: nextDiscountTier.discount * 100
      });
    } else {
      setNextDiscount(null);
    }
  }, [totalQuantity]);

  const validateOrder = () => {
    const newErrors: { [key: string]: string } = {};

    if (totalQuantity === 0) {
      newErrors.quantity = 'Please select quantities for at least one size';
    }

    if (product.minOrder && totalQuantity < product.minOrder) {
      newErrors.quantity = `Minimum order quantity is ${product.minOrder}`;
    }

    if (product.colors && product.colors.length > 0 && !selectedColor) {
      newErrors.color = 'Please select a color';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateOrder()) {
      return;
    }

    onSubmit({
      product,
      quantity: totalQuantity,
      sizes,
      color: selectedColor,
      customization,
      totalPrice: calculateTotal(),
    });
  };

  const handleSizeChange = (size: string, value: string) => {
    const newValue = Math.max(0, parseInt(value) || 0);
    setSizes(prev => ({
      ...prev,
      [size]: newValue
    }));
    setErrors(prev => ({ ...prev, quantity: '' }));
  };

  const discount = getDiscount(totalQuantity);
  const total = calculateTotal();
  const savings = discount > 0 ? (product.price * totalQuantity * discount) : 0;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Bulk Order Calculator</h3>
        
        {/* Size quantities */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="text-sm font-medium text-gray-700">Quantities by Size</h4>
            {errors.quantity && (
              <p className="text-sm text-red-500">{errors.quantity}</p>
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {product.sizes.map((size) => (
              <div key={size} className="space-y-1">
                <label htmlFor={`size-${size}`} className="block text-sm text-gray-600">
                  {size}
                </label>
                <input
                  type="number"
                  id={`size-${size}`}
                  min="0"
                  value={sizes[size]}
                  onChange={(e) => handleSizeChange(size, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Color selection */}
        {product.colors && product.colors.length > 0 && (
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-sm font-medium text-gray-700">Color</h4>
              {errors.color && (
                <p className="text-sm text-red-500">{errors.color}</p>
              )}
            </div>
            <select
              value={selectedColor}
              onChange={(e) => {
                setSelectedColor(e.target.value);
                setErrors(prev => ({ ...prev, color: '' }));
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
            >
              <option value="">Select a color</option>
              {product.colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Customization notes */}
        {product.customizable && (
          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Customization Details</h4>
            <textarea
              value={customization}
              onChange={(e) => setCustomization(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              placeholder="Describe your customization requirements..."
            />
          </div>
        )}

        {/* Order summary */}
        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <h4 className="text-sm font-medium text-gray-900 mb-3">Order Summary</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Total Quantity:</span>
              <span className="font-medium">{totalQuantity} items</span>
            </div>
            <div className="flex justify-between">
              <span>Base Price:</span>
              <span>${product.price.toFixed(2)} per item</span>
            </div>
            {discount > 0 && (
              <>
                <div className="flex justify-between text-green-600">
                  <span>Bulk Discount:</span>
                  <span>{(discount * 100).toFixed(0)}% off</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>You Save:</span>
                  <span>${savings.toFixed(2)}</span>
                </div>
              </>
            )}
            <div className="flex justify-between font-medium text-base pt-2 border-t">
              <span>Total Price:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Next discount tier info */}
          {nextDiscount && (
            <div className="mt-4 text-sm text-gray-600 bg-white p-3 rounded-md border border-gray-200">
              <p>
                Add {nextDiscount.quantity} more items to get {nextDiscount.discount}% off!
              </p>
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={totalQuantity === 0}
          className="mt-6 w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          Request Bulk Order
        </button>
      </div>
    </form>
  );
} 