import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedProducts } from './lib/products';
import ProductGallery from './components/ProductGallery';
import ParticleBackground from './components/ParticleBackground';
import CyberButton from './components/CyberButton';
import FuturisticHero from './components/FuturisticHero';

// Get featured products
const featuredProducts = getFeaturedProducts();

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Futuristic Hero Section */}
      <FuturisticHero />

      {/* Featured Gallery Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-gradient">Featured Work</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Witness the power of custom screen printing that transforms ideas into reality.
            </p>
          </div>
          
          <ProductGallery products={featuredProducts} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 scan-lines opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="neon-text">Why Choose BthePrints?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of custom apparel with our cutting-edge technology and unmatched quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon="⚡"
              title="Lightning Fast"
              description="State-of-the-art production with 24-48 hour turnaround on standard orders."
              delay={0.1}
            />
            <FeatureCard
              icon="🎨"
              title="AI-Enhanced Design"
              description="Our design AI helps optimize your artwork for maximum impact and durability."
              delay={0.2}
            />
            <FeatureCard
              icon="🔬"
              title="Quantum Quality"
              description="Revolutionary printing technology ensures colors that last beyond conventional limits."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card-enhanced p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-gradient">Ready to Go Viral?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join creative entrepreneurs who are building their brands with cutting-edge printing solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop">
                <CyberButton variant="neon" size="lg" glitchEffect>
                  🚀 Explore Products
                </CyberButton>
              </Link>
              <Link href="/contact">
                <CyberButton variant="secondary" size="lg">
                  💬 Start Project
                </CyberButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 data-stream opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="50+" label="Happy Customers" delay={0.1} />
            <StatCard number="2-3" label="Day Turnaround" delay={0.2} />
            <StatCard number="24/7" label="Design Support" delay={0.3} />
            <StatCard number="∞" label="Creative Possibilities" delay={0.4} />
          </div>
        </div>
      </section>
    </div>
  );
}

// Component Definitions
const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  delay 
}: { 
  icon: string; 
  title: string; 
  description: string; 
  delay: number; 
}) => (
  <div className={`glass-card-enhanced p-8 text-center fade-in-up`} style={{ animationDelay: `${delay}s` }}>
    <div className="text-4xl mb-4 floating">{icon}</div>
    <h3 className="text-2xl font-bold mb-4 text-gradient">{title}</h3>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </div>
);

const StatCard = ({ 
  number, 
  label, 
  delay 
}: { 
  number: string; 
  label: string; 
  delay: number; 
}) => (
  <div className={`text-center fade-in-up`} style={{ animationDelay: `${delay}s` }}>
    <div className="text-4xl md:text-5xl font-black mb-2 neon-text">{number}</div>
    <div className="text-sm md:text-base text-gray-400 font-medium">{label}</div>
  </div>
);
