// src/data/offers.js
export const offers = [
  {
    id: 1,
    title: "Weekend Special",
    description: "Flat 30% OFF on all biryanis",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500",
    gradient: "from-red-600 to-orange-600",
    code: "WEEKEND30",
    validity: "Sat & Sun"
  },
  {
    id: 2,
    title: "Family Feast",
    description: "Buy 2 Get 1 Free on BBQ items",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500",
    gradient: "from-purple-600 to-pink-600",
    code: "FAMILYBOGO",
    validity: "All days"
  },
  {
    id: 3,
    title: "Chef's Special Combo",
    description: "Biryani + Dessert at ₹399 only",
    image: "https://images.unsplash.com/photo-1630851840633-f9690e4a6c9f?w=500",
    gradient: "from-gold-600 to-yellow-600",
    code: "CHEFCOMBO",
    validity: "Limited time"
  },
  {
    id: 4,
    title: "Happy Hours",
    description: "50% OFF on all beverages, 4-6 PM",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500",
    gradient: "from-blue-600 to-cyan-600",
    code: "HAPPY50",
    validity: "4 PM - 6 PM"
  }
];

export const combos = [
  {
    id: 1,
    name: "Family Biryani Combo",
    description: "2 Biryanis + 2 Desserts + 4 Beverages",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500",
    originalPrice: 1199,
    offerPrice: 799,
    discount: 33,
    badge: "Best Value"
  },
  {
    id: 2,
    name: "BBQ Party Pack",
    description: "Assorted Grills + Dips + Breads",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500",
    originalPrice: 1499,
    offerPrice: 999,
    discount: 33,
    badge: "Party Special"
  },
  {
    id: 3,
    name: "Chinese Meal Box",
    description: "Fried Rice + Manchurian + Noodles + Soup",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500",
    originalPrice: 699,
    offerPrice: 449,
    discount: 36,
    badge: "Most Popular"
  }
];