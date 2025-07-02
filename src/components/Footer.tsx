import React from 'react';
import { motion } from 'framer-motion';
import { Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-950 pt-16 pb-8" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <img src="/smugglers gaming.jpeg" alt="Smugglers Gaming" className="h-10 w-10 rounded-full" />
              <span className="text-white font-serif font-bold text-xl">Smugglers Gaming</span>
            </div>
            <p className="text-white/60 mb-6">
              The premier destination for online casino gaming with 18+ platforms, instant load times, and fast cashouts.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex justify-center md:justify-start">
              <a 
                href="https://www.facebook.com/smugglers.gaming.hub.2025"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-gold-400 transition-colors duration-200"
              >
                <Facebook size={18} />
                <span>Follow us on Facebook</span>
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/40 text-sm mb-4 md:mb-0">
              © 2025 Smugglers Gaming. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;