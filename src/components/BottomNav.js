// src/components/BottomNav.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Grid, Tag, Phone } from 'lucide-react';

const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/categories', icon: Grid, label: 'Menu' },
    { path: '/offers', icon: Tag, label: 'Offers' },
    { path: '/contact', icon: Phone, label: 'Contact' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
      <div className="glass-effect border-t border-white/10">
        <div className="flex justify-around items-center h-16 px-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className="relative flex flex-col items-center justify-center w-16 h-full"
              >
                {isActive && (
                  <motion.div
                    layoutId="bottomNav"
                    className="absolute top-0 w-12 h-1 bg-luxury-gold rounded-b-full"
                  />
                )}
                <Icon
                  className={`w-5 h-5 mb-1 transition-colors ${
                    isActive ? 'text-luxury-gold' : 'text-gray-400'
                  }`}
                />
                <span
                  className={`text-xs transition-colors ${
                    isActive ? 'text-luxury-gold font-medium' : 'text-gray-400'
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomNav;