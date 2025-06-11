'use client';

import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';

export default function Privacy() {
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      
      {/* Privacy Policy Content */}
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
              Privacy Protocol
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your data security is our prime directive. Review our comprehensive privacy protocols.
            </motion.p>
          </div>

          {/* Privacy Content */}
          <motion.div
            className="glass-panel p-8 rounded-2xl border border-brand-primary/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="space-y-8 text-gray-100">
              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4 holographic-text">
                  Data Collection Protocol
                </h2>
                <p className="mb-4">
                  BthePrints collects information you provide directly to us, such as when you create an account, 
                  make a purchase, or contact us. This may include your name, email address, shipping address, 
                  and payment information.
                </p>
                <p>
                  We also automatically collect certain information about your device when you use our services, 
                  including your IP address, browser type, and usage data to improve our platform performance.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4 holographic-text">
                  Information Usage
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Process and fulfill your orders</li>
                  <li>Communicate with you about your account and orders</li>
                  <li>Improve our products and services</li>
                  <li>Send promotional communications (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4 holographic-text">
                  Data Security Measures
                </h2>
                <p className="mb-4">
                  We implement industry-standard security measures to protect your personal information, 
                  including encryption, secure servers, and regular security audits.
                </p>
                <p>
                  Payment information is processed through secure, PCI-compliant payment processors and 
                  is never stored on our servers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4 holographic-text">
                  Your Rights
                </h2>
                <p className="mb-4">
                  You have the right to access, update, or delete your personal information at any time. 
                  You may also opt out of promotional communications.
                </p>
                <p>
                  For any privacy-related requests or concerns, contact us at privacy@btheprints.com.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4 holographic-text">
                  Contact Information
                </h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-brand-primary/10 rounded-lg border border-brand-primary/30">
                  <p className="font-mono text-brand-primary">
                    Email: privacy@btheprints.com<br />
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