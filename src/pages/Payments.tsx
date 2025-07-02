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
    <div className="pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-casino-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Payment <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-300">Methods</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Choose from our secure and convenient payment options for deposits and withdrawals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Payment Features */}
      <section className="py-16 bg-gradient-to-b from-dark-900/50 to-dark-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {paymentFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500/20 to-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gold-300 mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Available <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-300">Payment Options</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Click on any payment method below to make a secure deposit.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl">
              {paymentMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gradient-to-b from-dark-800 to-dark-900 rounded-2xl overflow-hidden border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300 p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-24 h-24 mb-4 rounded-xl overflow-hidden bg-white flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={method.logo}
                        alt={`${method.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gold-300 group-hover:text-gold-200 transition-colors duration-200">
                      {method.name}
                    </h3>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Notice */}
      <section className="py-20 bg-gradient-to-b from-dark-900/50 to-dark-950">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-gold-500/20 to-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Shield className="text-gold-400" size={40} />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Your Security is Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-300">Priority</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              All transactions are protected with industry-standard encryption and security measures. 
              We never store your payment information and all data is transmitted securely.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-dark-800/50 p-6 rounded-xl border border-gold-500/20">
                <h3 className="text-lg font-bold text-gold-300 mb-2">SSL Encryption</h3>
                <p className="text-gray-400 text-sm">256-bit SSL encryption for all transactions</p>
              </div>
              <div className="bg-dark-800/50 p-6 rounded-xl border border-gold-500/20">
                <h3 className="text-lg font-bold text-gold-300 mb-2">PCI Compliant</h3>
                <p className="text-gray-400 text-sm">Fully compliant with payment card industry standards</p>
              </div>
              <div className="bg-dark-800/50 p-6 rounded-xl border border-gold-500/20">
                <h3 className="text-lg font-bold text-gold-300 mb-2">24/7 Monitoring</h3>
                <p className="text-gray-400 text-sm">Continuous security monitoring and fraud detection</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Payments;