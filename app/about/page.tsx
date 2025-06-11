'use client';

import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';

export default function About() {
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      
      {/* About Content */}
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
              Entity Profile
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-100 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Advanced printing systems. Quantum-level precision. Superior output protocols.
            </motion.p>
          </div>

          {/* About Content */}
          <motion.div
            className="glass-panel p-8 rounded-2xl border border-brand-primary/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="space-y-8 text-gray-100">
              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4 holographic-text">
                  Origin Protocol
                </h2>
                <p className="mb-4">
                  BthePrints.exe launched in 2024 with a focused mission: bring cutting-edge creative expression 
                  to screen printing through innovative technology. Starting as a passion project, we've processed 
                  custom designs for local creators and growing businesses.
                </p>
                <p className="mb-4">
                  Through dedication to quality, creative innovation, and exceptional customer service, 
                  we're building our reputation one satisfied customer at a time as we scale our operations.
                </p>
                <p>
                  Core directive: <span className="font-bold text-brand-primary">"You.think(it) → We.print(it)"</span> 
                  - Unlimited creative processing capability.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4 holographic-text">
                  System Protocols
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 border border-brand-primary/20 rounded-lg">
                    <div className="text-3xl font-bold text-brand-primary mb-2">01</div>
                    <h3 className="font-bold text-brand-primary mb-2">Design.Initialize()</h3>
                    <p className="text-sm">Collaborative design matrix. Input creative parameters or upload existing data.</p>
                  </div>
                  <div className="text-center p-4 border border-brand-primary/20 rounded-lg">
                    <div className="text-3xl font-bold text-brand-primary mb-2">02</div>
                    <h3 className="font-bold text-brand-primary mb-2">Print.Execute()</h3>
                    <p className="text-sm">Quantum-precision screen printing arrays deploy your design onto premium substrates.</p>
                  </div>
                  <div className="text-center p-4 border border-brand-primary/20 rounded-lg">
                    <div className="text-3xl font-bold text-brand-primary mb-2">03</div>
                    <h3 className="font-bold text-brand-primary mb-2">Deliver.Complete()</h3>
                    <p className="text-sm">Quality verification protocols engaged. Secure packaging systems deployed.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4 holographic-text">
                  Hardware Specifications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-brand-primary mb-3">Printing Matrix</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>M&R Sportsman EX 8-color.array</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>Riley Hopkins 6-color.system</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>Flash_dryer.pro + conveyor.belt</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-primary mb-3">Design Protocol</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <span>Adobe_Creative.suite_max</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <span>Wacom_interface.tablets</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <span>Color_separation.ai</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4 holographic-text">
                  Quality Assurance Protocol
                </h2>
                <p>
                  At BthePrints, our quality control process ensures every print meets our high standards. 
                  If your order doesn't meet your expectations, we'll work with you to make it right. 
                  <span className="text-brand-primary font-bold">Customer_Satisfaction.exe - Always Active</span>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4 holographic-text">
                  System Operators
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-brand-primary/20 to-purple-500/20 rounded-full mx-auto mb-3 flex items-center justify-center border border-brand-primary/30">
                      <span className="text-brand-primary font-bold">AVATAR_001</span>
                    </div>
                    <h3 className="font-bold text-brand-primary">John.exe</h3>
                    <p className="text-sm text-gray-300">Founder & Lead.Operator</p>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-brand-primary/20 to-purple-500/20 rounded-full mx-auto mb-3 flex items-center justify-center border border-brand-primary/30">
                      <span className="text-brand-primary font-bold">AVATAR_002</span>
                    </div>
                    <h3 className="font-bold text-brand-primary">Jane.ai</h3>
                    <p className="text-sm text-gray-300">Design.Director</p>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-brand-primary/20 to-purple-500/20 rounded-full mx-auto mb-3 flex items-center justify-center border border-brand-primary/30">
                      <span className="text-brand-primary font-bold">AVATAR_003</span>
                    </div>
                    <h3 className="font-bold text-brand-primary">Mike.sys</h3>
                    <p className="text-sm text-gray-300">Production.Manager</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4 holographic-text">
                  System Contact
                </h2>
                <p>
                  For questions regarding our entity profile, contact us at:
                </p>
                <div className="mt-4 p-4 bg-brand-primary/10 rounded-lg border border-brand-primary/30">
                  <p className="font-mono text-brand-primary">
                    Email: info@btheprints.com<br />
                    Entity.Status: ACTIVE<br />
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