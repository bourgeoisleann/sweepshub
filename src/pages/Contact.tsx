import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Users, MessageCircle, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Facebook className="text-blue-400" size={32} />,
      title: 'Facebook Page',
      description: 'Follow our official page for updates and announcements',
      url: 'https://www.facebook.com/smugglers.gaming.hub.2025',
      buttonText: 'Follow Page'
    },
    {
      icon: <Users className="text-blue-400" size={32} />,
      title: 'Facebook Group',
      description: 'Join our community group for discussions and support',
      url: 'https://www.facebook.com/groups/9760352910708468/',
      buttonText: 'Join Group'
    },
    {
      icon: <MessageCircle className="text-green-400" size={32} />,
      title: 'Direct Message',
      description: 'Send us a direct message for immediate assistance',
      url: 'https://www.facebook.com/smugglers.gaming.hub.2025',
      buttonText: 'Message Us'
    }
  ];

  return (
    <div className="pt-16 md:pt-18">
      {/* Hero Section */}
      <section className="py-3 md:py-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-casino-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-xl md:text-3xl font-serif font-bold mb-2 md:mb-3">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-300">Us</span>
            </h1>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              Get in touch with us through our social media channels for support, updates, and community discussions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-3 md:py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-b from-dark-800 to-dark-900 p-3 md:p-4 rounded-xl border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-gold-500/20 to-amber-500/20 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-gold-300 mb-1 md:mb-2">{method.title}</h3>
                  <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">{method.description}</p>
                  
                  <motion.a
                    href={method.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-gold-500 to-amber-500 hover:from-amber-500 hover:to-gold-500 text-dark-950 rounded-lg font-bold text-xs md:text-sm transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {method.buttonText} <ExternalLink size={14} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-3 md:py-6 bg-gradient-to-b from-dark-900/50 to-dark-950">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-lg md:text-2xl font-serif font-bold mb-2 md:mb-3">
              Need Immediate <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-300">Help?</span>
            </h2>
            <p className="text-gray-300 mb-3 md:mb-4 text-xs md:text-sm">
              Our support team is ready to assist you with any questions or issues.
            </p>
            
            <motion.a
              href="https://www.facebook.com/smugglers.gaming.hub.2025"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 md:gap-3 px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-bold text-sm md:text-base overflow-hidden shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={16} />
              <span>Message Us Now</span>
              <ExternalLink size={14} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-3 md:py-6">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-gold-500/10 to-amber-500/10 p-3 md:p-4 rounded-xl border border-gold-500/30">
              <h3 className="text-base md:text-lg font-bold text-gold-300 mb-1 md:mb-2">Business Hours</h3>
              <p className="text-gray-300 text-xs md:text-sm mb-2">We typically respond within 1-2 hours during business hours</p>
              <div className="grid grid-cols-2 gap-2 md:gap-4 text-xs md:text-sm">
                <div>
                  <p className="text-gold-400 font-medium">Monday - Friday</p>
                  <p className="text-gray-400">9:00 AM - 11:00 PM EST</p>
                </div>
                <div>
                  <p className="text-gold-400 font-medium">Saturday - Sunday</p>
                  <p className="text-gray-400">10:00 AM - 10:00 PM EST</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;