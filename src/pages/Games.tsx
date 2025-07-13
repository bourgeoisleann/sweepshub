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
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-300">Games</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              Discover our extensive collection of premium casino games with instant load times and exciting gameplay.
            </p>
            
            <div className="flex items-center gap-6 justify-center text-gold-300">
              <div className="flex items-center gap-2">
                <Star className="text-gold-400" size={20} />
                <span className="font-medium">18+ Platforms</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="text-gold-400" size={20} />
                <span className="font-medium">Instant Load</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-6 bg-gradient-to-b from-dark-900/50 to-dark-950">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gold-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search games..."
                className="w-full pl-12 pr-4 py-3 bg-dark-800 border-2 border-gold-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 transition-colors duration-200"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">
              Available <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-300">Games</span>
            </h2>
            <p className="text-gray-300">
              {filteredGames.length} premium games available
            </p>
          </motion.div>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
            {filteredGames.map((game, index) => (
              <motion.div
                key={game.id}
                className="group relative bg-gradient-to-b from-dark-800 to-dark-900 rounded-lg overflow-hidden border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                
                <div className="relative z-10 p-2">
                  <div className="aspect-square mb-2 rounded-md overflow-hidden bg-dark-700">
                    <img 
                      src={game.logo}
                      alt={`${game.name} logo`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  <h3 className="text-xs font-bold text-gold-300 mb-2 text-center group-hover:text-gold-200 transition-colors duration-200 leading-tight">
                    {game.name}
                  </h3>
                  
                  <motion.a
                    href={game.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center gap-1 w-full py-1.5 bg-gradient-to-r from-gold-500 to-amber-500 hover:from-amber-500 hover:to-gold-500 text-dark-950 rounded-md font-bold text-xs transition-all duration-200 overflow-hidden group/button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-gold-500 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center gap-1">
                      <span className="hidden lg:inline">Play</span>
                      <ExternalLink size={12} />
                    </span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredGames.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gold-500/20 to-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Search className="text-gold-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gold-300 mb-3">No Games Found</h3>
              <p className="text-gray-400">Try adjusting your search terms to find the games you're looking for.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 bg-gradient-to-b from-dark-900/50 to-dark-950">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-300">Games?</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-500/20 to-amber-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="text-gold-400" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gold-300 mb-2">Instant Loading</h3>
                <p className="text-sm text-gray-400">Lightning-fast game loading with optimized performance</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-500/20 to-amber-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Star className="text-gold-400" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gold-300 mb-2">Premium Quality</h3>
                <p className="text-sm text-gray-400">High-quality graphics and immersive gameplay experience</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-500/20 to-amber-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <ExternalLink className="text-gold-400" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gold-300 mb-2">Easy Access</h3>
                <p className="text-sm text-gray-400">One-click access to all your favorite games</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Games;