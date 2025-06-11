import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="hero-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="bg-brand-primary rounded-xl p-3 transform group-hover:rotate-3 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <span className="text-xl font-black text-brand-dark">B</span>
              </div>
              <div>
                <div className="font-black text-xl text-gradient">BthePrints</div>
                <div className="text-xs text-gray-300 font-medium">Custom Screen Printing</div>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Custom screen printing for apparel, merchandise, and more. Quality designs that bring your vision to life.
            </p>
            <p className="text-sm text-gray-400 font-semibold italic">
              "You think it, we print it!"
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 text-gradient">Shop</h3>
            <ul className="space-y-3">
              <FooterLink href="/shop" label="All Products" />
              <FooterLink href="/shop?category=t-shirts" label="T-Shirts" />
              <FooterLink href="/shop?category=hoodies" label="Hoodies" />
              <FooterLink href="/shop?category=jackets" label="Jackets" />
              <FooterLink href="/shop?category=accessories" label="Accessories" />
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 text-gradient">Company</h3>
            <ul className="space-y-3">
              <FooterLink href="/about" label="About Us" />
              <FooterLink href="/contact" label="Contact" />
              <FooterLink href="/faq" label="FAQ" />
              <FooterLink href="/terms" label="Terms & Conditions" />
              <FooterLink href="/privacy" label="Privacy Policy" />
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 text-gradient">Connect With Us</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://www.instagram.com/btheprints_/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-brand-primary flex items-center group transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mr-3 group-hover:bg-brand-primary/20 transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-semibold">Instagram</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@btheprints.com" 
                  className="text-gray-300 hover:text-brand-primary flex items-center group transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mr-3 group-hover:bg-brand-primary/20 transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <span className="font-semibold">info@btheprints.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+15551234567" 
                  className="text-gray-300 hover:text-brand-primary flex items-center group transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mr-3 group-hover:bg-brand-primary/20 transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <span className="font-semibold">(555) 123-4567</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300 font-medium">
            &copy; {currentYear} BthePrints. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a 
              href="https://www.instagram.com/btheprints_/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-primary/20 flex items-center justify-center text-gray-300 hover:text-brand-primary transition-all duration-300 hover:scale-110"
            >
              <span className="sr-only">Instagram</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-brand-primary rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-brand-accent-1 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-brand-accent-2 rounded-full opacity-30 animate-pulse"></div>
    </footer>
  );
};

// Footer Link Component
const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <li>
    <Link 
      href={href} 
      className="text-gray-300 hover:text-brand-primary transition-all duration-300 relative group font-medium"
    >
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary group-hover:w-full transition-all duration-300"></span>
    </Link>
  </li>
);

export default Footer;
