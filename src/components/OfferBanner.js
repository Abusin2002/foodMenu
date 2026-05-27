// src/components/OfferBanner.js
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Timer, Gift } from 'lucide-react';

const OfferBanner = ({ offer, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative overflow-hidden rounded-2xl"
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${offer.gradient} opacity-90`} />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative p-6 md:p-8">
        <div className="flex items-center justify-between">
          <div className="space-y-4">
            {/* Badge */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full"
            >
              <Gift className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white">{offer.validity}</span>
            </motion.div>

            <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
              {offer.title}
            </h3>
            <p className="text-white/90 text-lg">{offer.description}</p>
            
            {/* Promo Code */}
            <div className="flex items-center space-x-3">
              <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                <span className="text-white font-mono font-bold">{offer.code}</span>
              </div>
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center space-x-2 text-white font-medium"
              >
                <span>Grab Deal</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

          {/* Timer Icon */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="hidden md:block"
          >
            <Timer className="w-24 h-24 text-white/30" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default OfferBanner;