import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Award, Clock, Star, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '18+', label: 'Gaming Platforms', icon: <Award className="text-gold-400" size={24} /> },
    { number: '24/7', label: 'Customer Support', icon: <Clock className="text-gold-400" size={24} /> },
    { number: '10K+', label: 'Active Players', icon: <Users className="text-gold-400" size={24} /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="text-gold-400" size={24} /> },
  ];

  const values = [
    {
      icon: <Shield className="text-gold-400" size={32} />,
      title: 'Security First',
      description: 'We prioritize the security and privacy of our players with state-of-the-art encryption and secure payment processing.'
    },
    {
      icon: <Star className="text-gold-400" size={32} />,
      title: 'Premium Experience',
      description: 'Our platform offers the highest quality gaming experience with premium graphics and smooth gameplay.'
    },
    {
      icon: <Zap className="text-gold-400" size={32} />,
      title: 'Lightning Fast',
      description: 'Enjoy instant game loading and lightning-fast cashouts with our optimized gaming infrastructure.'
    },
    {
      icon: <Users className="text-gold-400" size={32} />,
      title: 'Community Focused',
      description: 'We build a strong gaming community with fair play, responsible gaming, and excellent customer service.'
    }
  ];

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-casino-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-300">Smugglers Gaming</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              We are the premier destination for online casino gaming, offering an unparalleled experience 
              with cutting-edge technology, premium games, and exceptional service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-gradient-to-b from-dark-900/50 to-dark-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-gold-500/20 to-amber-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gold-400 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-300">Story</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-base">
                  Founded with a vision to revolutionize online casino gaming, Smugglers Gaming has become 
                  a trusted name in the industry. We combine the excitement of traditional casino games 
                  with modern technology to create an unforgettable gaming experience.
                </p>
                <p className="text-base">
                  Our team of gaming experts and technology professionals work tirelessly to ensure that 
                  every aspect of our platform meets the highest standards of quality, security, and fairness.
                </p>
                <p className="text-base">
                  With over 18 premium gaming platforms and thousands of satisfied players, we continue 
                  to push the boundaries of what's possible in online casino gaming.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-gold-500 to-amber-500 rounded-3xl blur-2xl opacity-20"></div>
              <img
                src="/smugglers gaming.jpeg" 
                alt="Smugglers Gaming Team" 
                className="relative w-full h-auto rounded-2xl shadow-2xl border-2 border-gold-500/30"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 bg-gradient-to-b from-dark-900/50 to-dark-950">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-300">Values</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              These core values guide everything we do and shape the experience we provide to our players.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-b from-dark-800 to-dark-900 p-6 rounded-xl border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-500/20 to-amber-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gold-300 mb-3">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-base">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 to-amber-500/10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-300">Mission</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              To provide the most exciting, secure, and fair online casino gaming experience while 
              fostering a responsible gaming environment that prioritizes player satisfaction and safety.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-amber-500 mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;