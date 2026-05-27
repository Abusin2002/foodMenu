// src/pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import OfferBanner from '../components/OfferBanner';
import Recommended from '../components/Recommended';
import Footer from '../components/Footer';
import { categories } from '../data/categories';
import { offers } from '../data/offers';
import { foods } from '../data/foods';

const Home = () => {
  const recommendedItems = [
    foods[1][0], // Hyderabadi Biryani
    foods[3][0], // Schezwan Fried Rice
    foods[5][0], // Gulab Jamun
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />

      {/* Categories Section */}
      <section className="py-16 bg-luxury-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              Explore Our Categories
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover our diverse range of culinary delights, from aromatic biryanis to decadent desserts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-16 bg-luxury-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              Exciting Offers
            </h2>
            <p className="text-gray-400">
              Grab these amazing deals before they're gone!
            </p>
          </motion.div>

          <div className="space-y-6">
            {offers.map((offer, index) => (
              <OfferBanner key={offer.id} offer={offer} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Section */}
      <Recommended items={recommendedItems} />

      <Footer />
    </motion.div>
  );
};

export default Home;