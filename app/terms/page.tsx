'use client';

import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';

export default function Terms() {
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      
      {/* Terms Content */}
      <div className="relative z-10 container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 holographic-text"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Service Protocol
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Terms of engagement for our digital printing ecosystem. Please review our operational guidelines.
            </motion.p>
          </div>

          {/* Terms Content */}
          <motion.div
            className="glass-panel p-8 rounded-2xl border border-brand-primary/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="space-y-8 text-gray-100">
              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4 holographic-text">
                  Service Agreement
                </h2>
                <p className="mb-4">
                  By accessing and using BthePrints services, you accept and agree to be bound by the terms and 
                  provision of this agreement. These terms apply to all users of the service.
                </p>
                <p>
                  BthePrints reserves the right to update these terms at any time without prior notice. 
                  Your use of the service following any such change constitutes your agreement to follow 
                  and be bound by the terms as changed.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4 holographic-text">
                  Order Processing
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>All orders are subject to acceptance and availability</li>
                  <li>Processing time: 3-5 business days for standard orders</li>
                  <li>Rush orders available for additional fee</li>
                  <li>Custom designs require approval before production</li>
                  <li>Color matching is approximate and may vary from digital preview</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4 holographic-text">
                  Payment Terms
                </h2>
                <p className="mb-4">
                  Payment is due at the time of order placement. We accept major credit cards, 
                  PayPal, and other approved payment methods.
                </p>
                <p>
                  Prices are subject to change without notice. All sales are final unless the 
                  product is defective or we made an error in production.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4 holographic-text">
                  Intellectual Property
                </h2>
                <p className="mb-4">
                  You retain ownership of your original designs and artwork. However, you grant 
                  BthePrints a license to use your designs for the purpose of fulfilling your order.
                </p>
                <p>
                  You are responsible for ensuring that your designs do not infringe on third-party 
                  copyrights, trademarks, or other intellectual property rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4 holographic-text">
                  Shipping & Returns
                </h2>
                <p className="mb-4">
                  Shipping costs are calculated at checkout based on destination and shipping method selected. 
                  We are not responsible for lost or stolen packages after delivery confirmation.
                </p>
                <p>
                  Returns are accepted within 14 days of delivery for defective products or our errors. 
                  Custom orders cannot be returned unless defective.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4 holographic-text">
                  Limitation of Liability
                </h2>
                <p>
                  BthePrints liability is limited to the cost of the product purchased. We are not liable 
                  for any indirect, incidental, or consequential damages arising from the use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4 holographic-text">
                  System Contact
                </h2>
                <p>
                  For questions regarding these terms, contact us at:
                </p>
                <div className="mt-4 p-4 bg-brand-primary/10 rounded-lg border border-brand-primary/30">
                  <p className="font-mono text-brand-primary">
                    Email: legal@btheprints.com<br />
                    Last Updated: {new Date().toLocaleDateString()}
                  </p>
                </div>
              </section>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Cyber Grid Effect */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      {/* Scan Lines */}
      <div className="absolute inset-0 scan-lines opacity-20" />
    </div>
  );
} 