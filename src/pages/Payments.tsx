import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, CreditCard } from 'lucide-react';

const Payments = () => {
  const paymentMethods = [
    {
      name: 'CashApp',
      logo: '/cashapp copy.png',
      url: 'https://buy.stripe.com/aEUeYH9P32yfdIk9AA'
    },
    {
      name: 'Chime',
      logo: '/IMG_0818.jpeg',
      url: 'https://app.chime.com/link/qr?u=deezzylee'
    },
    {
      name: 'Venmo',
      logo: '/venmo.png',
      url: 'https://venmo.com/u/kaykaylove08'
    },
    {
      name: 'PayPal',
      logo: '/paypal.png',
      url: 'https://www.paypal.com/qrcodes/p2pqrc/9PFBDE43LAM56'
    }
  ];

  const paymentFeatures = [
    {
      icon: <Shield className="text-gold-400" size={32} />,
      title: 'Secure Transactions',
      description: 'All payments are protected with bank-level encryption and security protocols.'
    },
    {
      icon: <Zap className="text-gold-400" size={32} />,
      title: 'Instant Processing',
      description: 'Most deposits are processed instantly, allowing you to start playing immediately.'
    },
    {
      icon: <CreditCard className="text-gold-400" size={32} />,
      title: 'Multiple Options',
      description: 'Choose from our trusted payment methods to suit your preferences.'
    }
  ];

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="py-3 md:py-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-casino-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-xl md:text-3xl font-serif font-bold mb-2 md:mb-3">
              Payment <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-300">Methods</span>
            </h1>
            <p className="text-xs md:text-base text-gray-300 leading-relaxed">
              Choose from our secure and convenient payment options for deposits and withdrawals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Payment Methods Grid - Compact Layout */}
      <section className="py-3 md:py-6">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-3 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-lg md:text-2xl font-serif font-bold mb-1 md:mb-2">
              Available <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-300">Payment Options</span>
            </h2>
            <p className="text-xs md:text-sm text-gray-300 max-w-2xl mx-auto">
              Click on any payment method below to make a secure deposit.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 max-w-3xl w-full">
              {paymentMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gradient-to-b from-dark-800 to-dark-900 rounded-xl overflow-hidden border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300 p-2 md:p-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-8 h-8 md:w-12 md:h-12 mb-1 md:mb-2 rounded-lg overflow-hidden bg-white flex items-center justify-center p-1 md:p-1.5 group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={method.logo}
                        alt={`${method.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    <h3 className="text-sm md:text-base font-bold text-gold-300 group-hover:text-gold-200 transition-colors duration-200">
                      {method.name}
                    </h3>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment Features */}
      <section className="py-3 md:py-6 bg-gradient-to-b from-dark-900/50 to-dark-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            {paymentFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-6 h-6 md:w-10 md:h-10 bg-gradient-to-br from-gold-500/20 to-amber-500/20 rounded-lg flex items-center justify-center mx-auto mb-1 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xs md:text-base font-bold text-gold-300 mb-1 md:mb-2">{feature.title}</h3>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Notice */}
      <section className="py-3 md:py-6">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-gold-500/20 to-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-4">
              <Shield className="text-gold-400" size={16} />
            </div>
            <h2 className="text-lg md:text-2xl font-serif font-bold mb-2 md:mb-3">
              Your Security is Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-300">Priority</span>
            </h2>
            <p className="text-xs md:text-sm text-gray-300 leading-relaxed mb-3 md:mb-4">
              All transactions are protected with industry-standard encryption and security measures. 
              We never store your payment information and all data is transmitted securely.
            </p>
            <div className="grid grid-cols-3 gap-2 md:gap-3 text-center">
              <div className="bg-dark-800/50 p-2 md:p-3 rounded-lg border border-gold-500/20">
                <h3 className="text-xs md:text-sm font-bold text-gold-300 mb-1">SSL Encryption</h3>
                <p className="text-gray-400 text-xs md:text-sm">256-bit SSL encryption</p>
              </div>
              <div className="bg-dark-800/50 p-2 md:p-3 rounded-lg border border-gold-500/20">
                <h3 className="text-xs md:text-sm font-bold text-gold-300 mb-1">PCI Compliant</h3>
                <p className="text-gray-400 text-xs md:text-sm">Payment card compliant</p>
              </div>
              <div className="bg-dark-800/50 p-2 md:p-3 rounded-lg border border-gold-500/20">
                <h3 className="text-xs md:text-sm font-bold text-gold-300 mb-1">24/7 Monitoring</h3>
                <p className="text-gray-400 text-xs md:text-sm">Continuous monitoring</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Payments;