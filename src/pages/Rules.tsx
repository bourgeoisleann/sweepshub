import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Gift, Users, Clock, CreditCard, CheckCircle, Star, Zap } from 'lucide-react';

const Rules = () => {
  const bonusStructure = [
    {
      icon: <Gift className="text-gold-400" size={32} />,
      title: '70% Welcome Bonus',
      description: 'New players receive a massive 70% bonus on their first deposit',
      details: [
        'Available for first-time depositors only',
        'Minimum deposit of $20 required',
        'Maximum bonus amount of $500',
        'Bonus automatically applied to your account'
      ]
    },
    {
      icon: <Users className="text-gold-400" size={32} />,
      title: '50% Referral Bonus',
      description: 'Earn 50% bonus when you refer friends to Smugglers Gaming',
      details: [
        'Must be claimed within 24 hours of friend\'s deposit',
        'No limit on number of referrals',
        'Automatic credit to your account'
      ]
    },
    {
      icon: <Star className="text-gold-400" size={32} />,
      title: '20% Daily Bonus',
      description: 'Daily bonus for regular players on qualifying deposits',
      details: [
        'Available for all registered players',
        'Can be claimed once per day',
        'Automatic credit to your account',
        'No minimum deposit required'
      ]
    }
  ];

  const gameRules = [
    {
      icon: <Shield className="text-gold-400" size={32} />,
      title: 'Player Eligibility & Account Rules',
      rules: [
        'Must be 18 years or older to participate in any gaming activities',
        'Valid government-issued photo ID required for account verification',
        'One account per person, household, or IP address strictly enforced',
        'Account sharing or allowing others to use your account is forbidden'
      ]
    },
    {
      icon: <CreditCard className="text-gold-400" size={32} />,
      title: 'Deposits & Withdrawals',
      rules: [
        'All deposits and withdrawals must be from verified payment methods',
        'Minimum deposit: $20 | Maximum deposit: $5,000 per transaction',
        'Minimum withdrawal: $50 | Maximum withdrawal: $2,500 per day',
        'Withdrawal processing time: 24-72 hours for most methods',
        'Identity verification required for withdrawals over $500',
        'Anti-money laundering policies strictly enforced'
      ]
    },
    {
      icon: <CheckCircle className="text-gold-400" size={32} />,
      title: 'Fair Play & Game Integrity',
      rules: [
        'Use of bots, scripts, or automated software is strictly prohibited',
        'Collusion with other players or staff members is forbidden',
        'All games use certified random number generators (RNG)',
        'Exploitation of software errors, glitches, or bugs is prohibited',
        'Suspicious betting patterns will trigger account investigation',
        'Game outcomes are final and cannot be disputed after completion'
      ]
    },
    {
      icon: <Zap className="text-gold-400" size={32} />,
      title: 'Platform Rules & Conduct',
      rules: [
        'Respectful behavior required in all interactions',
        'Harassment, abuse, or threatening language is prohibited',
        'Creating multiple accounts to circumvent restrictions is forbidden',
        'Using fraudulent payment methods or stolen cards is illegal',
        'Attempting to manipulate game outcomes will result in account closure',
        'Violation of local, state, or federal laws will be reported'
      ]
    }
  ];

  const importantNotices = [
    {
      title: 'Age Verification Required',
      content: 'All players must be 18 years or older. We reserve the right to request proof of age at any time. Underage accounts will be immediately closed and funds returned.'
    },
    {
      title: 'Jurisdiction & Legal Compliance',
      content: 'These rules are governed by the laws of our licensing jurisdiction. Players are responsible for ensuring compliance with their local gambling laws.'
    },
    {
      title: 'Rule Modifications',
      content: 'Smugglers Gaming reserves the right to modify these rules at any time. Players will be notified of significant changes via email and platform notifications.'
    },
    {
      title: 'Dispute Resolution Process',
      content: 'All disputes will be handled through our customer support team first. Unresolved disputes may be escalated to binding arbitration as outlined in our terms of service.'
    }
  ];

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="py-8 md:py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-casino-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-3">
              Gaming <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-300">Rules</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Please read and understand our gaming rules and bonus structure to ensure a fair and enjoyable experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bonus Structure Section */}
      <section className="py-8 bg-gradient-to-b from-dark-900/50 to-dark-950">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">
              Bonus <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-300">Structure</span>
            </h2>
            <p className="text-base text-gray-300 max-w-3xl mx-auto">
              Take advantage of our generous bonus offers designed to maximize your gaming experience.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-4">
            {bonusStructure.map((bonus, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-b from-dark-800 to-dark-900 p-4 rounded-xl border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-gradient-to-br from-gold-500/20 to-amber-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    {bonus.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gold-300 mb-2">{bonus.title}</h3>
                  <p className="text-gray-300 mb-3 leading-relaxed text-sm">{bonus.description}</p>
                  
                  <ul className="space-y-1.5">
                    {bonus.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-gold-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Rules Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">
              Gaming <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-300">Regulations</span>
            </h2>
            <p className="text-base text-gray-300 max-w-3xl mx-auto">
              Essential rules and regulations to ensure fair play and security for all players.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-4">
            {gameRules.map((category, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-b from-dark-800 to-dark-900 p-4 rounded-xl border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-gold-500/20 to-amber-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gold-300">{category.title}</h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {category.rules.map((rule, ruleIndex) => (
                      <li key={ruleIndex} className="flex items-start gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-gold-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed text-sm">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notices */}
      <section className="py-8 bg-gradient-to-b from-dark-900/50 to-dark-950">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">
              Important <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-300">Notices</span>
            </h2>
            <p className="text-base text-gray-300 max-w-3xl mx-auto">
              Critical information that all players must understand before participating.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto">
            {importantNotices.map((notice, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-amber-500/10 to-gold-500/10 p-4 rounded-xl border border-amber-500/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-base font-bold text-amber-300 mb-2">{notice.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm">{notice.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rules;