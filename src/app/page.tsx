import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold gradient-text mb-4">
            BthePrints
          </h1>
          <p className="text-2xl text-white mb-8">
            YOU THINK IT, WE PRINT IT
          </p>
          <Link 
            href="/shop"
            className="bg-gradient-to-r from-brand-yellow to-brand-orange text-black font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {['Jackets', 'T-Shirts', 'Hoodies', 'Hats', 'Sets', 'Custom'].map((category) => (
            <Link
              key={category}
              href={`/shop/${category.toLowerCase()}`}
              className="group relative h-64 overflow-hidden rounded-lg bg-gray-900 hover:opacity-90 transition-opacity"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">{category}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
} 