// src/components/ComboCard.js
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Zap } from 'lucide-react';

const ComboCard = ({ combo, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.02 }}
      className="relative glass-effect rounded-2xl overflow-hidden card-hover"
    >
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="relative w-full md:w-48 h-48 md:h-auto overflow-hidden">
          <img
            src={combo.image}
            alt={combo.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-900/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Zap className="w-5 h-5 text-luxury-gold" />
                <h3 className="text-xl font-display font-bold text-white">
                  {combo.name}
                </h3>
              </div>
              <p className="text-gray-400 text-sm">{combo.description}</p>
            </div>
            
            {combo.badge && (
              <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full text-xs font-bold">
                {combo.badge}
              </span>
            )}
          </div>

          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold gold-gradient">₹{combo.offerPrice}</span>
                <span className="text-lg text-gray-500 line-through">₹{combo.originalPrice}</span>
              </div>
              <span className="inline-block mt-2 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                Save {combo.discount}%
              </span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-luxury-gold text-luxury-900 font-semibold rounded-full flex items-center space-x-2 hover:shadow-lg hover:shadow-luxury-gold/25 transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add Combo</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ComboCard;