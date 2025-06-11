"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CyberButton from "../components/CyberButton";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again later.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Futuristic Hero Section */}
      <section className="hero-gradient text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-accent-1/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-black mb-8">
              <span className="holographic">Contact Protocol</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Initialize communication channel. Ready to transform your vision into reality with cutting-edge screen printing technology.
            </p>
            
            {/* Tech specs display */}
            <motion.div 
              className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold neon-text">24H</div>
                <div className="text-xs text-gray-400 font-medium">RESPONSE TIME</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold neon-text">FREE</div>
                <div className="text-xs text-gray-400 font-medium">CONSULTATION</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold neon-text">∞</div>
                <div className="text-xs text-gray-400 font-medium">POSSIBILITIES</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="glass-card-enhanced p-8 h-full scan-lines relative overflow-hidden">
                <h2 className="text-3xl font-black mb-6">
                  <span className="neon-text">TRANSMISSION HUB</span>
                </h2>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Multiple communication protocols available. Our AI-enhanced support system is standing by 
                  to process your custom printing requirements and optimize your vision for maximum impact.
                </p>
                
                <div className="space-y-6">
                  <ContactItem
                    icon={<EmailIcon />}
                    title="EMAIL PROTOCOL"
                    content="info@btheprints.com"
                    href="mailto:info@btheprints.com"
                  />
                  <ContactItem
                    icon={<PhoneIcon />}
                    title="VOICE CHANNEL"
                    content="(555) 123-4567"
                    href="tel:+15551234567"
                  />
                  <ContactItem
                    icon={<InstagramIcon />}
                    title="SOCIAL FEED"
                    content="@btheprints_"
                    href="https://www.instagram.com/btheprints_/"
                    external
                  />
                </div>

                {/* Enhanced Quick Info Cards */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <motion.div 
                    className="glass-card p-4 neon-border"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="text-2xl font-black neon-text mb-1">24-48H</div>
                    <div className="text-xs text-gray-600 font-mono">RESPONSE TIME</div>
                  </motion.div>
                  <motion.div 
                    className="glass-card p-4 cyber-btn"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="text-2xl font-black text-brand-accent-1 mb-1">FREE</div>
                    <div className="text-xs text-gray-600 font-mono">QUOTE & DESIGN</div>
                  </motion.div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-brand-primary/50" />
                <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-brand-primary/50" />
                <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-brand-primary/50" />
                <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-brand-primary/50" />
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="glass-card-enhanced p-8 relative overflow-hidden">
                <h3 className="text-2xl font-black mb-6 neon-text">SEND TRANSMISSION</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitStatus === "success" && (
                    <motion.div
                      className="neon-border bg-green-50/10 backdrop-blur-sm border-green-500/50 rounded-xl p-4 mb-6"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-bold text-green-400">
                            TRANSMISSION SUCCESSFUL! Processing your request...
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  {submitStatus === "error" && (
                    <motion.div
                      className="neon-border bg-red-50/10 backdrop-blur-sm border-red-500/50 rounded-xl p-4 mb-6"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-bold text-red-400">
                            {errorMessage || "TRANSMISSION FAILED. Please retry."}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2 font-mono">
                      NAME IDENTIFIER *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-brand-primary/30 focus:border-brand-primary focus:ring-brand-primary/20 focus:ring-4 transition-all duration-300 bg-black/20 backdrop-blur-sm text-white placeholder-gray-400"
                      placeholder="Enter your designation"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 font-mono">
                      EMAIL PROTOCOL *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-brand-primary/30 focus:border-brand-primary focus:ring-brand-primary/20 focus:ring-4 transition-all duration-300 bg-black/20 backdrop-blur-sm text-white placeholder-gray-400"
                      placeholder="your.contact@domain.net"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2 font-mono">
                      SUBJECT CODE *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-brand-primary/30 focus:border-brand-primary focus:ring-brand-primary/20 focus:ring-4 transition-all duration-300 bg-black/20 backdrop-blur-sm text-white"
                    >
                      <option value="">Select transmission type</option>
                      <option value="custom-order">Custom Order Request</option>
                      <option value="quote">Quote Request</option>
                      <option value="design-help">Design Assistance</option>
                      <option value="bulk-order">Bulk Order Inquiry</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2 font-mono">
                      MESSAGE DATA *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-brand-primary/30 focus:border-brand-primary focus:ring-brand-primary/20 focus:ring-4 transition-all duration-300 bg-black/20 backdrop-blur-sm text-white placeholder-gray-400 resize-none"
                      placeholder="Describe your vision, requirements, and any specific details..."
                    />
                  </div>
                  
                  <button type="submit" className="w-full">
                    <CyberButton
                      variant="neon"
                      size="lg"
                      disabled={isSubmitting}
                      glitchEffect
                    >
                      {isSubmitting ? "TRANSMITTING..." : "SEND TRANSMISSION"}
                    </CyberButton>
                  </button>
                </form>

                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-brand-primary/50" />
                <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-brand-primary/50" />
                <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-brand-primary/50" />
                <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-brand-primary/50" />
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                <span className="holographic">Knowledge Base</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Access frequently requested information from our neural database.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FAQItem
                question="What is your turnaround time?"
                answer="Our AI-optimized production system delivers standard orders in 24-48 hours. Rush orders can be processed in as little as 12 hours with our quantum acceleration protocol."
              />
              <FAQItem
                question="Do you offer design services?"
                answer="Yes! Our AI-enhanced design team provides free consultation and can create custom artwork optimized for screen printing. Upload your concept and we'll enhance it for maximum impact."
              />
              <FAQItem
                question="What's the minimum order quantity?"
                answer="No minimum required! Whether you need 1 piece or 1000, our flexible production system can accommodate any quantity with competitive pricing."
              />
              <FAQItem
                question="What file formats do you accept?"
                answer="We accept all major formats: AI, EPS, PDF, PNG, JPG, PSD. Our AI upscaling technology can enhance low-resolution images to print quality."
              />
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

// Component Definitions
const ContactItem = ({ 
  icon, 
  title, 
  content, 
  href, 
  external = false 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: string; 
  href: string; 
  external?: boolean; 
}) => (
  <motion.a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className="flex items-center p-4 glass-card hover:glass-card-enhanced transition-all duration-300 group"
    whileHover={{ scale: 1.02, x: 5 }}
    transition={{ type: "spring", stiffness: 300, damping: 30 }}
  >
    <div className="flex-shrink-0 w-12 h-12 bg-brand-primary/20 rounded-xl flex items-center justify-center group-hover:bg-brand-primary/30 transition-colors duration-300">
      {icon}
    </div>
    <div className="ml-4">
      <p className="text-sm font-bold text-brand-primary font-mono">{title}</p>
      <p className="text-gray-800 font-semibold">{content}</p>
    </div>
    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </motion.a>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => (
  <motion.div 
    className="glass-card-enhanced p-6 cyber-btn relative overflow-hidden"
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 30 }}
  >
    <h3 className="text-lg font-black mb-3 text-gradient">{question}</h3>
    <p className="text-gray-600 leading-relaxed">{answer}</p>
  </motion.div>
);

const EmailIcon = () => (
  <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.017 0C8.396 0 7.888.013 7.63.072 2.679.272.316 2.676.072 7.626.013 7.888 0 8.396 0 12.017c0 3.624.013 4.09.072 4.347.204 4.967 2.626 7.347 7.626 7.626.26.003.658.056 4.347.056s4.137-.015 4.436-.074c4.963-.279 7.347-2.644 7.626-7.626C24-.013 24 8.396 24 12.017c0 3.624-.013 4.09-.072 4.347-.279 4.967-2.644 7.347-7.626 7.626-.26.003-.658.056-4.347.056s-4.137-.015-4.436-.074c-4.963-.279-7.347-2.644-7.626-7.626C.013 16.09 0 15.624 0 12.017c0-3.624.013-4.09.072-4.347C.279 2.644 2.644.272 7.626.072 7.888.013 8.396 0 12.017 0zm0 2.16c-3.538 0-3.966.013-5.36.072-4.075.193-6.25 2.368-6.443 6.443-.059 1.394-.072 1.822-.072 5.36s.013 3.966.072 5.36c.193 4.075 2.368 6.25 6.443 6.443 1.394.059 1.822.072 5.36.072s3.966-.013 5.36-.072c4.075-.193 6.25-2.368 6.443-6.443.059-1.394.072-1.822.072-5.36s-.013-3.966-.072-5.36c-.193-4.075-2.368-6.25-6.443-6.443-1.394-.059-1.822-.072-5.36-.072zM12.017 5.838a6.179 6.179 0 110 12.358 6.179 6.179 0 010-12.358zm0 10.178a3.999 3.999 0 100-7.998 3.999 3.999 0 000 7.998zm7.846-10.405a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
  </svg>
); 