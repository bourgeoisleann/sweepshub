import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, Info, FileText, Gamepad2, CreditCard } from 'lucide-react';
import type { Page } from '../App';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { id: 'home' as Page, label: 'Home', icon: Home },
    { id: 'about' as Page, label: 'About', icon: Info },
    { id: 'rules' as Page, label: 'Rules', icon: FileText },
    { id: 'games' as Page, label: 'Games', icon: Gamepad2 },
    { id: 'payments' as Page, label: 'Payments', icon: CreditCard },
  ];

  const handleNavigation = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-dark-950 shadow-2xl border-b border-gold-500/20 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <motion.button
            onClick={() => handleNavigation('home')}
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-gold-500 to-amber-500 rounded-xl blur-lg opacity-75 animate-glow"></div>
              <img 
                src="/smugglers gaming.jpeg" 
                alt="Smugglers Gaming" 
                className="relative h-10 w-10 md:h-12 md:w-12 rounded-lg border-2 border-gold-500 shadow-2xl object-cover" 
              />
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl md:text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-300">
                Smugglers Gaming
              </h1>
              <p className="text-xs text-gold-300/80 font-medium tracking-wider">PREMIUM CASINO</p>
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-gold-500 to-amber-500 text-dark-950'
                      : 'text-gold-200 hover:text-gold-100 hover:bg-gold-500/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                  {item.label}
                </motion.button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-gold-300 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.nav
        className={`lg:hidden fixed inset-x-0 top-[76px] bg-dark-950 shadow-2xl border-b border-gold-500/20 ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          y: isMenuOpen ? 0 : -20
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium text-left transition-all duration-200 ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-gold-500 to-amber-500 text-dark-950'
                      : 'text-gold-200 hover:text-gold-100 hover:bg-gold-500/10'
                  }`}
                >
                  <Icon size={20} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </motion.nav>
    </motion.header>
  );
};

export default Header;