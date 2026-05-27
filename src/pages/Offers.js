// src/pages/Offers.js
import React from 'react';
import { motion } from 'framer-motion';
import { Tag, Clock, Gift, Zap } from 'lucide-react';
import OfferBanner from '../components/OfferBanner';
import ComboCard from '../components/ComboCard';
import { offers } from '../data/offers';
import { combos } from '../data/offers';

const Offers = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-luxury-900 py-12"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass-effect rounded-full mb-6">
            <Tag className="w-5 h-5 text-luxury-gold" />
            <span className="text-luxury-gold font-medium">Limited Time Deals</span>
          </div>
          <h1 className="text-5xl font-display font-bold gold-gradient mb-4">
            Special Offers & Deals
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Grab these amazing offers before they expire! Save big on your favorite dishes and combos.
          </p>
        </motion.div>

        {/* Active Offers Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { icon: Tag, label: 'Active Offers', value: '10+' },
            { icon: Clock, label: 'Flash Deals', value: '5' },
            { icon: Gift, label: 'Free Items', value: '8' },
            { icon: Zap, label: 'Hot Deals', value: '3' },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="glass-effect rounded-xl p-6 text-center">
                <Icon className="w-8 h-8 text-luxury-gold mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Special Offers Banner */}
        <section className="mb-12">
          <h2 className="text-3xl font-display font-bold text-white mb-8">
            🎉 Current Promotions
          </h2>
          <div className="space-y-6">
            {offers.map((offer, index) => (
              <OfferBanner key={offer.id} offer={offer} index={index} />
            ))}
          </div>
        </section>

        {/* Combo Deals */}
        <section className="mb-12">
          <h2 className="text-3xl font-display font-bold text-white mb-8">
            🎁 Combo Meals
          </h2>
          <div className="space-y-6">
            {combos.map((combo, index) => (
              <ComboCard key={combo.id} combo={combo} index={index} />
            ))}
          </div>
        </section>

        {/* How to Redeem */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-effect rounded-2xl p-8 mb-12"
        >
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            How to Redeem Offers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: 'Choose Your Deal',
                description: 'Browse through our active offers and select the one you like'
              },
              {
                step: '2',
                title: 'Add to Cart',
                description: 'Add the items to your cart and proceed to checkout'
              },
              {
                step: '3',
                title: 'Apply Code',
                description: 'The discount will be automatically applied or enter the promo code'
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-luxury-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-luxury-gold font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Terms */}
        <div className="text-center text-gray-500 text-sm">
          <p>* Offers are valid for a limited time only. Terms and conditions apply.</p>
          <p>* Cannot be combined with other offers unless specified.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Offers;