import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold gradient-text mb-4">About BthePrints</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          We're passionate about bringing your creative vision to life through quality screen printing and exceptional customer service.
        </p>
      </div>

      {/* Our Story */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/images/placeholders/placeholder.jpg"
            alt="Our Workshop"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-400 mb-4">
            Founded with a passion for creativity and quality, BthePrints has been transforming ideas into wearable art since 2020. What started as a small custom t-shirt operation has grown into a full-service screen printing business.
          </p>
          <p className="text-gray-400">
            Our motto "YOU THINK IT, WE PRINT IT" isn't just a catchphrase – it's our commitment to bringing your vision to life, no matter how simple or complex.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-900 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-brand-yellow to-brand-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Quality Printing</h3>
            <p className="text-gray-400">
              Premium materials and advanced printing techniques for lasting results.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-brand-yellow to-brand-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Quick Turnaround</h3>
            <p className="text-gray-400">
              Fast production times without compromising on quality.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-brand-yellow to-brand-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Custom Designs</h3>
            <p className="text-gray-400">
              From simple text to complex artwork, we bring your ideas to life.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p className="text-gray-400 mb-8">
          Let's create something amazing together. Contact us for a custom quote or browse our products.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/contact"
            className="bg-gradient-to-r from-brand-yellow to-brand-orange text-black font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
          <Link
            href="/shop"
            className="bg-gray-900 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition-colors"
          >
            View Products
          </Link>
        </div>
      </div>
    </div>
  );
} 