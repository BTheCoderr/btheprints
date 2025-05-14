import Link from 'next/link';

export default function CheckoutSuccessPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <div className="bg-gradient-to-r from-brand-yellow to-brand-orange text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8">
        <span className="text-3xl">✓</span>
      </div>
      
      <h1 className="text-4xl font-bold mb-4">Order Placed Successfully!</h1>
      <p className="text-xl text-gray-400 mb-8">
        Thank you for your order. We'll send you a confirmation email shortly.
      </p>
      
      <div className="flex justify-center gap-4">
        <Link
          href="/shop"
          className="bg-gradient-to-r from-brand-yellow to-brand-orange text-black font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity"
        >
          Continue Shopping
        </Link>
        <Link
          href="/contact"
          className="bg-gray-900 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition-colors"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
} 