import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedProducts } from './lib/products';
import ProductGallery from './components/ProductGallery';

// Get featured products
const featuredProducts = getFeaturedProducts();

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="fade-in-up stagger-1">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                  Custom <span className="modern-heading">Screen Printing</span>
                  <br />
                  <span className="text-4xl md:text-5xl lg:text-6xl font-light">For Every Occasion</span>
                </h1>
              </div>
              <div className="fade-in-up stagger-2">
                <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
                  From apparel to merchandise - <span className="italic text-brand-primary font-semibold">you think it, we print it!</span>
                </p>
              </div>
              <div className="fade-in-up stagger-3">
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link 
                    href="/shop" 
                    className="btn-brand text-lg px-8 py-4"
                  >
                    Shop Now
                  </Link>
                  <Link 
                    href="/contact" 
                    className="btn-secondary text-lg px-8 py-4"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="floating-animation">
                  <div className="glass-card p-8 relative">
                    <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 relative">
                      <Image
                        src="/images/placeholders/hero-placeholder.jpg"
                        alt="Screen Printing Process"
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand-primary rounded-full pulse-glow"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-brand-accent-1 rounded-full pulse-glow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-brand-primary rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-brand-accent-1 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-brand-accent-2 rounded-full opacity-30 animate-pulse"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-primary/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Our Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional screen printing services designed to bring your vision to life with exceptional quality and attention to detail.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="service-card group fade-in-up stagger-1">
              <div className="feature-icon group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.47 15.47 0 011.622-3.395m3.42 3.42a15.998 15.998 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.998 15.998 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Custom Designs</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Professional design services to bring your ideas to life with creative expertise and attention to detail.
              </p>
            </div>
            
            <div className="service-card group fade-in-up stagger-2">
              <div className="feature-icon group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Lightning Fast</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Quick turnaround times without compromising quality - because your deadlines matter to us.
              </p>
            </div>
            
            <div className="service-card group fade-in-up stagger-3">
              <div className="feature-icon group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m-15 0A2.25 2.25 0 005.25 12v6.75a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25V12a2.25 2.25 0 00-1.5-2.122m-15 0h15" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Bulk Orders</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Special pricing and dedicated support for large quantity orders and corporate partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <ProductGallery />

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Featured Products</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular items, carefully selected for their quality and versatility.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className={`group fade-in-up stagger-${(index % 3) + 1}`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-square overflow-hidden bg-gray-100 relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.customizable && (
                      <div className="absolute top-4 right-4 bg-brand-primary text-white text-sm font-semibold px-3 py-1 rounded-full">
                        Customizable
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">
                      {product.colors?.join(", ")}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-2xl font-bold text-gray-900">
                        ${product.price.toFixed(2)}
                      </p>
                      {product.minOrder && product.minOrder > 1 && (
                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          Min: {product.minOrder}
                        </span>
                      )}
                    </div>
                    <Link
                      href={`/product/${product.id}`}
                      className="block w-full text-center btn-brand"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link
              href="/shop"
              className="btn-brand text-lg px-8 py-4"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your <span className="modern-heading">Custom Project?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Let's bring your ideas to life with our professional screen printing services. 
              From concept to completion, we're here to make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-brand text-lg px-8 py-4"
              >
                Get Started Today
              </Link>
              <Link
                href="/about"
                className="btn-secondary text-lg px-8 py-4"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-brand-accent-1/10 rounded-full blur-3xl"></div>
      </section>
    </div>
  );
}
