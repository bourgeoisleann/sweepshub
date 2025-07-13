import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Search, Star, Zap } from 'lucide-react';
import { games } from '../data/games';

const Games = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGames = games.filter(game =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="py-2 md:py-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-casino-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-xl md:text-3xl font-serif font-bold mb-1 md:mb-2">
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-300">Games</span>
            </h1>
            <p className="text-xs md:text-base text-gray-300 leading-relaxed mb-2 md:mb-3">
              Discover our extensive collection of premium casino games with instant load times and exciting gameplay.
            </p>
            
            <div className="flex items-center gap-2 md:gap-4 justify-center text-gold-300 text-xs md:text-sm">
              <div className="flex items-center gap-2">
                <Star className="text-gold-400" size={12} />
                <span className="font-medium">18+ Platforms</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="text-gold-400" size={12} />
                <span className="font-medium">Instant Load</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-2 md:py-3 bg-gradient-to-b from-dark-900/50 to-dark-950">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-xs md:max-w-sm mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="h-3 w-3 md:h-4 md:w-4 text-gold-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search games..."
                className="w-full pl-8 md:pl-10 pr-3 py-1.5 md:py-2 bg-dark-800 border border-gold-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 transition-colors duration-200 text-xs md:text-sm"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-2 md:py-4">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-2 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-base md:text-xl font-serif font-bold mb-1">
              Available <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-300">Games</span>
            </h2>
            <p className="text-gray-300 text-xs md:text-sm">
              {filteredGames.length} premium games available
            </p>
          </motion.div>

          <div className="grid grid-cols-5 sm:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-1.5 md:gap-2">
            {filteredGames.map((game, index) => (
              <motion.div
                key={game.id}
                className="group relative bg-gradient-to-b from-dark-800 to-dark-900 rounded-md overflow-hidden border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                
                <div className="relative z-10 p-1 md:p-1.5 flex flex-col h-full">
                  <div className="aspect-square mb-1 md:mb-1.5 rounded-sm overflow-hidden bg-dark-700">
                    <img 
                      src={game.logo}
                      alt={`${game.name} logo`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <h3 className="text-xs md:text-sm font-bold text-gold-300 mb-1 md:mb-1.5 text-center group-hover:text-gold-200 transition-colors duration-200 leading-tight flex-grow">
                    {game.name}
                  </h3>
                  
                  <motion.a
                    href={game.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center gap-1 w-full py-0.5 md:py-1 bg-gradient-to-r from-gold-500 to-amber-500 hover:from-amber-500 hover:to-gold-500 text-dark-950 rounded-sm font-bold text-xs transition-all duration-200 overflow-hidden group/button mt-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-gold-500 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center gap-1">
                      <span className="text-xs">Play</span>
                      <ExternalLink size={8} />
                    </span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredGames.length === 0 && (
            <motion.div 
              className="text-center py-4 md:py-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-gold-500/20 to-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3">
                <Search className="text-gold-400" size={16} />
              </div>
              <h3 className="text-base md:text-lg font-bold text-gold-300 mb-1 md:mb-2">No Games Found</h3>
              <p className="text-gray-400 text-xs md:text-sm">Try adjusting your search terms.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-2 md:py-4 bg-gradient-to-b from-dark-900/50 to-dark-950">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-base md:text-xl font-serif font-bold mb-1 md:mb-2">
              Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-300">Games?</span>
            </h2>
            <div className="grid grid-cols-3 gap-2 md:gap-4 mt-2 md:mt-4">
              <div className="text-center">
                <div className="w-6 h-6 md:w-10 md:h-10 bg-gradient-to-br from-gold-500/20 to-amber-500/20 rounded-lg flex items-center justify-center mx-auto mb-1 md:mb-2">
                  <Zap className="text-gold-400" size={12} />
                </div>
                <h3 className="text-xs md:text-base font-bold text-gold-300 mb-1">Instant Loading</h3>
                <p className="text-xs md:text-sm text-gray-400">Lightning-fast game loading</p>
              </div>
              <div className="text-center">
                <div className="w-6 h-6 md:w-10 md:h-10 bg-gradient-to-br from-gold-500/20 to-amber-500/20 rounded-lg flex items-center justify-center mx-auto mb-1 md:mb-2">
                  <Star className="text-gold-400" size={12} />
                </div>
                <h3 className="text-xs md:text-base font-bold text-gold-300 mb-1">Premium Quality</h3>
                <p className="text-xs md:text-sm text-gray-400">High-quality graphics</p>
              </div>
              <div className="text-center">
                <div className="w-6 h-6 md:w-10 md:h-10 bg-gradient-to-br from-gold-500/20 to-amber-500/20 rounded-lg flex items-center justify-center mx-auto mb-1 md:mb-2">
                  <ExternalLink className="text-gold-400" size={12} />
                </div>
                <h3 className="text-xs md:text-base font-bold text-gold-300 mb-1">Easy Access</h3>
                <p className="text-xs md:text-sm text-gray-400">One-click access</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Games;