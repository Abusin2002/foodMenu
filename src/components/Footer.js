// src/components/Footer.js
import React from 'react';
import { ChefHat, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-luxury-800 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <ChefHat className="w-8 h-8 text-luxury-gold" />
              <span className="text-2xl font-display font-bold gold-gradient">LuxEats</span>
            </div>
            <p className="text-gray-400 text-sm">
              Premium dining experience with carefully curated menu items from around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Menu', 'Special Offers', 'Catering', 'Private Events'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-luxury-gold text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-luxury-gold" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-luxury-gold" />
                <span>info@luxeats.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-luxury-gold" />
                <span>123 Gourmet Street, Foodie Lane</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Clock className="w-4 h-4 text-luxury-gold" />
                <span>Mon - Fri: 11:00 AM - 11:00 PM</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Clock className="w-4 h-4 text-luxury-gold" />
                <span>Sat - Sun: 10:00 AM - 12:00 AM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 LuxEats. All rights reserved. Designed with ❤️ for food lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
