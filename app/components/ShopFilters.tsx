'use client';

import { useState } from 'react';
import { Product } from '../lib/products';

interface ShopFiltersProps {
  onSearch: (searchTerm: string) => void;
  onPriceRange: (min: number, max: number) => void;
  onSizeFilter: (sizes: string[]) => void;
  availableSizes: string[];
}

export default function ShopFilters({
  onSearch,
  onPriceRange,
  onSizeFilter,
  availableSizes,
}: ShopFiltersProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handlePriceChange = () => {
    const min = minPrice ? parseFloat(minPrice) : 0;
    const max = maxPrice ? parseFloat(maxPrice) : Infinity;
    onPriceRange(min, max);
  };

  const handleSizeToggle = (size: string) => {
    const newSizes = selectedSizes.includes(size)
      ? selectedSizes.filter(s => s !== size)
      : [...selectedSizes, size];
    setSelectedSizes(newSizes);
    onSizeFilter(newSizes);
  };

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div>
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
          Search Products
        </label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by name..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
        />
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Price Range</h3>
        <div className="flex gap-2">
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            onBlur={handlePriceChange}
            placeholder="Min"
            className="w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
          />
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            onBlur={handlePriceChange}
            placeholder="Max"
            className="w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
          />
        </div>
      </div>

      {/* Size Filter */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Sizes</h3>
        <div className="flex flex-wrap gap-2">
          {availableSizes.map((size) => (
            <button
              key={size}
              onClick={() => handleSizeToggle(size)}
              className={`px-3 py-1 text-sm border rounded-md ${
                selectedSizes.includes(size)
                  ? 'bg-black text-white border-black'
                  : 'border-gray-300 hover:border-black'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 