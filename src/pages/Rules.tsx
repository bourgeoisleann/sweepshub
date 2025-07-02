import React from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Users, Clock, CreditCard, CheckCircle } from 'lucide-react';

const Rules = () => {
  const ruleCategories = [
    {
      icon: <Users className="text-gold-400" size={32} />,
      title: 'Player Eligibility',
      rules: [
        'Must be 18 years or older to participate',
        'Valid government-issued ID required for verification',
        'One account per person, household, or IP address',
        'Residents of restricted jurisdictions are prohibited',
        'Self-exclusion requests will be honored immediately'
      ]
    },
    {
      icon: <Shield className="text-gold-400" size={32} />,
      title: 'Account Security',
      rules: [
        'Keep login credentials confidential and secure',
        'Report suspicious account activity immediately',
        'Two-factor authentication is strongly recommended',
        'Account sharing is strictly prohibited',
        'Regular password updates are encouraged'
      ]
    },
    {
      icon: <CreditCard className="text-gold-400" size={32} />,
      title: 'Financial Transactions',
      rules: [
        'All deposits and withdrawals must be from verified accounts',
        'Minimum and maximum transaction limits apply',
        'Withdrawal processing time: 24-72 hours',
        'Anti-money laundering policies are strictly enforced',
        'Bonus terms and conditions must be met before withdrawal'
      ]
    },
    {
      icon: <CheckCircle className="text-gold-400" size={32} />,
      title: 'Fair Play',
      rules: [
        'Use of bots, scripts, or automated software is prohibited',
        'Collusion with other players is strictly forbidden',
        'All games use certified random number generators',
        'Exploitation of software errors or glitches is prohibited',
        'Suspicious betting patterns will be investigated'
      ]
    },
    {
      icon: <Clock className="text-gold-400" size={32} />,
      title: 'Responsible Gaming',
      rules: [
        'Set personal deposit and time limits',
        'Take regular breaks from gaming activities',
        'Never chase losses or gamble beyond your means',
        'Seek help if gambling becomes problematic',
        'Self-exclusion tools are available upon request'
      ]
    },
    {
      icon: <AlertTriangle className="text-gold-400" size={32} />,
      title: 'Prohibited Activities',
      rules: [
        'Creating multiple accounts to circumvent restrictions',
        'Using fraudulent payment methods or stolen cards',
        'Attempting to manipulate game outcomes',
        'Harassment or abuse of other players or staff',
        'Violation of any local, state, or federal laws'
      ]
    }
  ];

  const importantNotices = [
    {
      title: 'Age Verification',
      content: 'All players must be 18 years or older. We reserve the right to request proof of age at any time.'
    },
    {
      title: 'Jurisdiction',
      content: 'These rules are governed by the laws of our licensing jurisdiction. Players are responsible for compliance with local laws.'
    },
    {
      title: 'Rule Changes',
      content: 'We reserve the right to modify these rules at any time. Players will be notified of significant changes.'
    },
    {
      title: 'Dispute Resolution',
      content: 'All disputes will be handled through our customer support team and, if necessary, through binding arbitration.'
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
              Gaming <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-300">Rules</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Please read and understand our gaming rules to ensure a fair and enjoyable experience for all players.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rules Categories */}
      <section className="py-20 bg-gradient-to-b from-dark-900/50 to-dark-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {ruleCategories.map((category, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-b from-dark-800 to-dark-900 p-8 rounded-2xl border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold-500/20 to-amber-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gold-300">{category.title}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {category.rules.map((rule, ruleIndex) => (
                      <li key={ruleIndex} className="flex items-start gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-gold-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{rule}</span>
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
              Important <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-300">Notices</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Please pay special attention to these important notices regarding our gaming platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {importantNotices.map((notice, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-amber-500/10 to-gold-500/10 p-8 rounded-2xl border border-amber-500/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-amber-300 mb-4">{notice.title}</h3>
                <p className="text-gray-300 leading-relaxed">{notice.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible Gaming */}
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
              Responsible <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-300">Gaming</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              We are committed to promoting responsible gaming practices. If you or someone you know 
              has a gambling problem, please seek help from professional organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.ncpgambling.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-gold-500 to-amber-500 text-dark-950 rounded-lg font-bold hover:scale-105 transition-transform duration-200"
              >
                Get Help Now
              </a>
              <a 
                href="https://www.gamblersanonymous.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-gold-500 text-gold-300 hover:bg-gold-500/10 rounded-lg font-bold transition-all duration-200"
              >
                Support Resources
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Rules;