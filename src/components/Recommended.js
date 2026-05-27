// src/components/Recommended.js
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Flame, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Recommended = ({ items }) => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-display font-bold text-white mb-2">
            Recommended For You
          </h2>
          <p className="text-gray-400">Handpicked dishes based on your taste</p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-72"
              >
                <div className="glass-effect rounded-2xl overflow-hidden card-hover">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.isVeg ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                      }`}>
                        {item.isVeg ? '🥬 Veg' : '🍖 Non-Veg'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-display font-bold text-white mb-1">{item.name}</h3>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">{item.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-yellow-500">{item.rating}</span>
                        <div className="flex items-center space-x-1">
                          {[...Array(item.spicyLevel)].map((_, i) => (
                            <Flame key={i} className="w-3 h-3 text-red-500 fill-current" />
                          ))}
                        </div>
                      </div>
                      <span className="text-lg font-bold gold-gradient">₹{item.price}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommended;