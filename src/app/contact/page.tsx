'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  orderType: 'apparel' | 'merchandise' | 'other';
  quantity: string;
  description: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    orderType: 'apparel',
    quantity: '',
    description: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      orderType: 'apparel',
      quantity: '',
      description: ''
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold gradient-text mb-4">Contact Us</h1>
        <p className="text-xl text-gray-400">
          Have a custom design in mind? Let's bring it to life!
        </p>
      </div>

      <div className="bg-gray-900 rounded-lg p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow"
              required
            />
          </div>

          <div>
            <label htmlFor="orderType" className="block text-sm font-medium mb-2">
              Order Type
            </label>
            <select
              id="orderType"
              value={formData.orderType}
              onChange={(e) => setFormData({ ...formData, orderType: e.target.value as FormData['orderType'] })}
              className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow"
              required
            >
              <option value="apparel">Custom Apparel</option>
              <option value="merchandise">Custom Merchandise</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="quantity" className="block text-sm font-medium mb-2">
              Estimated Quantity
            </label>
            <input
              type="number"
              id="quantity"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow"
              required
              min="1"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-2">
              Project Description
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow h-32"
              required
              placeholder="Tell us about your project, including design details, colors, and any specific requirements."
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-brand-yellow to-brand-orange text-black font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Other Ways to Reach Us</h2>
        <div className="space-y-2 text-gray-400">
          <p>Email: info@btheprints.com</p>
          <p>Phone: (555) 123-4567</p>
          <p>Address: 123 Print Street, Design City, ST 12345</p>
        </div>
      </div>
    </div>
  );
} 