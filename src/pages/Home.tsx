import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Shield, Zap, Crown, MessageCircle, CreditCard } from 'lucide-react';
import type { Page } from '../App';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const features = [
    {
      icon: <Crown className="text-gold-400" size={32} />,
      title: '18+ Platforms',
      description: 'Premium gaming platforms for mature audiences'
    },
    {
      icon: <Zap className="text-gold-400" size={32} />,
      title: 'Instant Load',
      description: 'Lightning-fast game loading and seamless experience'
    },
    {
      icon: <Shield className="text-gold-400" size={32} />,
      title: 'Fast Cashout',
      description: 'Quick and secure withdrawal processing'
    },
    {
      icon: <Star className="text-gold-400" size={32} />,
      title: 'Premium Quality',
      description: 'High-quality games from top providers'
    }
  ];

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative py-3 md:py-6 overflow-hidden">
        <div className="absolute inset-0 bg-casino-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-3 md:gap-6">
            <motion.div 
              className="lg:w-1/2 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="mb-2 md:mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-2xl md:text-4xl font-serif font-bold leading-tight mb-2 md:mb-3">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500">
                    Smugglers
                  </span>
                  <br />
                  <span className="text-white">Gaming</span>
                </h1>
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2 md:mb-3">
                  <div className="h-1 w-12 bg-gradient-to-r from-gold-500 to-amber-500 rounded"></div>
                  <p className="text-gold-300 font-medium tracking-wider uppercase text-xs md:text-sm">
                    Premium Casino Experience
                  </p>
                  <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-gold-500 rounded"></div>
                </div>
              </motion.div>

              <motion.p 
                className="text-sm md:text-lg text-gray-300 mb-3 md:mb-4 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Experience the thrill of premium online casino gaming with instant load times and lightning-fast cashouts.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-1.5 md:gap-2 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.button
                  onClick={() => onNavigate('games')}
                  className="group relative px-4 py-2 md:px-5 md:py-2.5 bg-gradient-to-r from-gold-500 to-amber-500 text-dark-950 rounded-lg font-bold text-xs md:text-sm overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center gap-2">
                    Play Now <ArrowRight size={16} />
                  </span>
                </motion.button>
                
                <motion.button
                  onClick={() => onNavigate('payments')}
                  className="group relative px-4 py-2 md:px-5 md:py-2.5 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg font-bold text-xs md:text-sm overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center gap-2">
                    Payment Methods <CreditCard size={16} />
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-gold-500 to-amber-500 rounded-3xl blur-2xl opacity-30 animate-glow"></div>
                <motion.img 
                  src="/smugglers gaming.jpeg" 
                  alt="Smugglers Gaming" 
                  className="relative w-full max-w-xs md:max-w-md h-auto rounded-2xl shadow-2xl border-2 border-gold-500/50"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Message Us Now Button Section */}
      <section className="py-2 md:py-4 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.a
              href="https://www.facebook.com/smugglers.gaming.hub.2025"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white rounded-xl font-bold text-base md:text-lg overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                backgroundPosition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear'
                }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <span className="relative flex items-center gap-3">
                <MessageCircle size={20} className="animate-pulse" />
                <span className="text-base md:text-xl font-bold">MESSAGE US NOW</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </motion.a>
            
            <motion.p 
              className="mt-2 md:mt-3 text-xs md:text-sm text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Get instant support and start your gaming journey today!
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-3 md:py-6 bg-gradient-to-b from-dark-900/50 to-dark-950">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-3 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-lg md:text-3xl font-serif font-bold mb-2 md:mb-3">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-300">Smugglers Gaming</span>
            </h2>
            <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto">
              We provide the ultimate online casino experience with cutting-edge technology and premium service.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-b from-dark-800 to-dark-900 p-2 md:p-4 rounded-xl border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                
                <div className="relative z-10">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-gold-500/20 to-amber-500/20 rounded-lg flex items-center justify-center mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-gold-300 mb-1 md:mb-2">{feature.title}</h3>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-3 md:py-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 to-amber-500/10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-lg md:text-3xl font-serif font-bold mb-2 md:mb-3">
              Ready to Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-300">Gaming Adventure?</span>
            </h2>
            <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
              Join thousands of players who trust Smugglers Gaming for their online casino experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-1.5 md:gap-2 justify-center">
              <motion.button
                onClick={() => onNavigate('games')}
                className="group relative px-4 py-2 md:px-6 md:py-2.5 bg-gradient-to-r from-gold-500 to-amber-500 text-dark-950 rounded-lg font-bold text-xs md:text-sm overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2">
                  Explore Games <ArrowRight size={16} />
                </span>
              </motion.button>
              
              <motion.button
                onClick={() => onNavigate('payments')}
                className="px-4 py-2 md:px-6 md:py-2.5 border-2 border-gold-500 text-gold-300 hover:bg-gold-500/10 rounded-lg font-bold text-xs md:text-sm transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Payment Methods
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;