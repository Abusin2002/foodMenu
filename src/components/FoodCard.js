// src/components/FoodCard.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Flame, Leaf, Clock, Award } from 'lucide-react';

const FoodCard = ({ food, index }) => {
  const [isFavorite, setIsFavorite] = useState(food.isFavorite);

  const SpicyIndicator = ({ level }) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Flame
            key={i}
            className={`w-3 h-3 ${i < level ? 'text-red-500 fill-current' : 'text-gray-600'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative glass-effect rounded-2xl overflow-hidden card-hover">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={food.image}
            alt={food.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-900 via-transparent to-transparent" />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              food.isVeg ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
            }`}>
              <span className="flex items-center space-x-1">
                <Leaf className="w-3 h-3" />
                <span>{food.isVeg ? 'Veg' : 'Non-Veg'}</span>
              </span>
            </span>
            
            {food.badges?.map((badge, i) => (
              <span key={i} className="px-3 py-1 bg-luxury-gold/20 text-luxury-gold rounded-full text-xs font-medium flex items-center space-x-1">
                <Award className="w-3 h-3" />
                <span>{badge}</span>
              </span>
            ))}
          </div>

          {/* Favorite Button */}
          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={() => setIsFavorite(!isFavorite)}
            className="absolute top-4 right-4 p-2 glass-effect rounded-full"
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorite ? 'text-red-500 fill-current' : 'text-white'
              }`}
            />
          </motion.button>

          {/* Discount Badge */}
          {food.discount > 0 && (
            <div className="absolute bottom-4 right-4">
              <span className="px-3 py-1 bg-red-500 text-white rounded-full text-xs font-bold">
                {food.discount}% OFF
              </span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-display font-bold text-white group-hover:text-luxury-gold transition-colors">
              {food.name}
            </h3>
            <div className="text-right">
              <div className="flex items-center space-x-1">
                <span className="text-xl font-bold gold-gradient">₹{food.price}</span>
              </div>
              {food.discount > 0 && (
                <span className="text-xs text-gray-500 line-through">
                  ₹{Math.round(food.price / (1 - food.discount / 100))}
                </span>
              )}
            </div>
          </div>

          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {food.description}
          </p>

          {/* Meta Information */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Rating */}
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium text-yellow-500">{food.rating}</span>
              </div>

              {/* Spicy Level */}
              <SpicyIndicator level={food.spicyLevel} />
            </div>

            {/* Availability */}
            <div className="flex items-center space-x-1">
              <div className={`w-2 h-2 rounded-full ${
                food.isAvailable ? 'bg-green-500' : 'bg-red-500'
              }`} />
              <span className={`text-xs ${
                food.isAvailable ? 'text-green-400' : 'text-red-400'
              }`}>
                {food.isAvailable ? 'Available' : 'Sold Out'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodCard;