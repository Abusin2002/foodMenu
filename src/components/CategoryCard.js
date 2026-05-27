// src/components/CategoryCard.js
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ category, index }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onClick={() => navigate(`/category/${category.id}`)}
      className="group cursor-pointer"
    >
      <div className="relative glass-effect rounded-2xl overflow-hidden card-hover">
        {/* Image */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-900 via-transparent to-transparent" />
          
          {/* Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 glass-effect rounded-full text-xs font-medium text-luxury-gold">
              {category.itemCount} Items
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-luxury-gold transition-colors">
            {category.name}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {category.description}
          </p>
          
          {/* Offers */}
          {category.offers && category.offers.length > 0 && (
            <div className="mb-4">
              <div className="flex items-center space-x-1 text-luxury-gold text-xs mb-2">
                <Star className="w-3 h-3 fill-current" />
                <span className="font-medium">Active Offers</span>
              </div>
              <div className="space-y-1">
                {category.offers.slice(0, 2).map((offer, i) => (
                  <p key={i} className="text-xs text-gray-300">{offer}</p>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <motion.div
            whileHover={{ x: 5 }}
            className="flex items-center space-x-2 text-luxury-gold font-medium text-sm"
          >
            <span>Explore Menu</span>
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CategoryCard;