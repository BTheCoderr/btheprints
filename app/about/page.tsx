import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About BthePrints | Custom Screen Printing",
  description: "Learn about BthePrints, a premier custom screen printing company specializing in high-quality apparel and merchandise for individuals, teams, and businesses.",
};

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">About BthePrints</h1>
        <p className="text-xl text-gray-600 mb-8">
          Your trusted partner for high-quality custom screen printing.
        </p>
        <div className="h-1 w-20 mx-auto brand-gradient rounded"></div>
      </div>
      
      {/* Our Story */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            BthePrints began with a passion for creative expression through custom apparel. 
            Founded in 2018, we started as a small operation printing designs for friends 
            and local businesses in our hometown.
          </p>
          <p className="text-gray-600 mb-4">
            What began as a side project quickly grew into a full-fledged business as word 
            spread about our commitment to quality, creativity, and customer satisfaction. 
            Today, we proudly serve clients nationwide, from individuals seeking custom pieces 
            to businesses looking for branded merchandise.
          </p>
          <p className="text-gray-600">
            Our motto <span className="font-medium italic">"You think it, we print it"</span> reflects 
            our dedication to bringing your creative visions to life, no matter how simple or complex.
          </p>
        </div>
        <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
          <div className="text-gray-500">Image Placeholder</div>
        </div>
      </div>
      
      {/* Our Process */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
            <h3 className="text-xl font-bold mb-2">Design</h3>
            <p className="text-gray-600">
              Work with our design team to create your vision or submit your own artwork. 
              We'll ensure it's optimized for the best print quality.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
            <h3 className="text-xl font-bold mb-2">Print</h3>
            <p className="text-gray-600">
              Using state-of-the-art screen printing equipment, we carefully transfer your 
              design onto high-quality materials with precision and vibrant colors.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
            <h3 className="text-xl font-bold mb-2">Deliver</h3>
            <p className="text-gray-600">
              After thorough quality checks, we carefully package and ship your 
              custom-printed items right to your door.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Equipment */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Equipment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Screen Printing</h3>
            <p className="text-gray-600 mb-4">
              We use professional-grade manual and automatic screen printing presses 
              that allow us to handle both small and large orders with consistent quality. 
              Our equipment can print up to 8 colors, allowing for vibrant, detailed designs.
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>M&R Sportsman EX 8-color press</li>
              <li>Riley Hopkins 6-color press</li>
              <li>Professional flash dryers and conveyor dryer</li>
              <li>Exposure unit for precise screen development</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Design & Pre-Press</h3>
            <p className="text-gray-600 mb-4">
              Our design studio is equipped with industry-standard software and hardware to 
              create, modify, and prepare artwork for optimal printing results.
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Adobe Creative Suite (Photoshop, Illustrator)</li>
              <li>Professional design tablets</li>
              <li>Color separation software</li>
              <li>Custom screen preparation area</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Quality Promise */}
      <div className="bg-brand-gradient text-white p-8 rounded-lg mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Quality Promise</h2>
          <p className="text-lg mb-0">
            At BthePrints, we stand behind the quality of our work. If you're not 100% 
            satisfied with your order, we'll make it right. That's our guarantee.
          </p>
        </div>
      </div>
      
      {/* Team */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="h-56 w-56 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-bold">John Doe</h3>
            <p className="text-gray-600">Founder & Lead Printer</p>
          </div>
          <div className="text-center">
            <div className="h-56 w-56 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-bold">Jane Smith</h3>
            <p className="text-gray-600">Design Director</p>
          </div>
          <div className="text-center">
            <div className="h-56 w-56 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-bold">Mike Johnson</h3>
            <p className="text-gray-600">Production Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
} 