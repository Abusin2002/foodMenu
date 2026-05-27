// src/pages/MenuPage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Filter, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import FoodCard from '../components/FoodCard';
import ComboCard from '../components/ComboCard';
import OfferBanner from '../components/OfferBanner';
import Recommended from '../components/Recommended';
import { categories } from '../data/categories';
import { foods } from '../data/foods';
import { offers } from '../data/offers';
import { combos } from '../data/offers';

const MenuPage = () => {
  const { categoryId } = useParams();
  const [sortBy, setSortBy] = useState('recommended');
  const [filterVeg, setFilterVeg] = useState(false);
  
  const category = categories.find(c => c.id === parseInt(categoryId));
  const categoryFoods = foods[categoryId] || [];
  
  const filteredFoods = categoryFoods
    .filter(food => !filterVeg || food.isVeg)
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400">Category not found</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-luxury-900"
    >
      {/* Banner */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src={category.banner}
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-900 via-luxury-900/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <Link to="/categories" className="inline-flex items-center space-x-2 text-white mb-4 hover:text-luxury-gold transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Categories</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
            {category.name}
          </h1>
          <p className="text-gray-300">{category.description}</p>
        </div>
      </div>

      {/* Offer Strip */}
      {category.offers && (
        <div className="bg-luxury-gold/20 border-y border-luxury-gold/30">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex overflow-x-auto space-x-4">
              {category.offers.map((offer, index) => (
                <span key={index} className="flex-shrink-0 text-luxury-gold text-sm font-medium">
                  🎉 {offer}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setFilterVeg(!filterVeg)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filterVeg
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : 'bg-white/5 text-gray-400 border border-white/10 hover:border-white/20'
              }`}
            >
              🥬 Veg Only
            </button>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 focus:outline-none focus:border-luxury-gold/50"
            >
              <option value="recommended">Recommended</option>
              <option value="rating">Rating: High to Low</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          <span className="text-gray-400 text-sm">
            {filteredFoods.length} items found
          </span>
        </div>

        {/* Food Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredFoods.map((food, index) => (
            <FoodCard key={food.id} food={food} index={index} />
          ))}
        </div>

        {/* Combo Offers */}
        <section className="mb-12">
          <h2 className="text-3xl font-display font-bold text-white mb-8">
            🎁 Combo Offers
          </h2>
          <div className="space-y-6">
            {combos.slice(0, 2).map((combo, index) => (
              <ComboCard key={combo.id} combo={combo} index={index} />
            ))}
          </div>
        </section>

        {/* Special Offers */}
        <section className="mb-12">
          <h2 className="text-3xl font-display font-bold text-white mb-8">
            🎉 Special Offers
          </h2>
          <div className="space-y-6">
            {offers.slice(0, 2).map((offer, index) => (
              <OfferBanner key={offer.id} offer={offer} index={index} />
            ))}
          </div>
        </section>

        {/* Recommended */}
        <Recommended items={filteredFoods.slice(0, 5)} />
      </div>
    </motion.div>
  );
};

export default MenuPage;