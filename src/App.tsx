import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Rules from './pages/Rules';
import Games from './pages/Games';
import Payments from './pages/Payments';
import ParticleBackground from './components/ParticleBackground';

export type Page = 'home' | 'about' | 'rules' | 'games' | 'payments';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'rules':
        return <Rules />;
      case 'games':
        return <Games />;
      case 'payments':
        return <Payments />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 text-white relative overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10">
        <Header currentPage={currentPage} onNavigate={setCurrentPage} />
        
        <AnimatePresence mode="wait">
          <motion.main
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.main>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;