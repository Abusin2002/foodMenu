// src/data/foods.js
export const foods = {
  1: [ // Biryani items
    {
      id: 101,
      name: "Hyderabadi Dum Biryani",
      price: 349,
      image: "https://images.pexels.com/photos/9609844/pexels-photo-9609844.jpeg?auto=compress&cs=tinysrgb&w=500",
      description: "Slow-cooked basmati rice with tender marinated chicken, saffron, and caramelized onions",
      isVeg: false,
      spicyLevel: 3,
      rating: 4.8,
      isAvailable: true,
      badges: ["Bestseller", "Chef Special"],
      isFavorite: false,
      discount: 15
    },
    {
      id: 102,
      name: "Vegetable Biryani",
      price: 279,
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=500&q=80",
      description: "Fragrant rice with garden-fresh vegetables and authentic spices",
      isVeg: true,
      spicyLevel: 2,
      rating: 4.6,
      isAvailable: true,
      badges: ["Healthy Choice"],
      isFavorite: false,
      discount: 10
    },
    {
      id: 103,
      name: "Mutton Biryani",
      price: 429,
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500",
      description: "Tender mutton pieces layered with aromatic rice and secret spices",
      isVeg: false,
      spicyLevel: 4,
      rating: 4.9,
      isAvailable: true,
      badges: ["Premium", "Bestseller"],
      isFavorite: false,
      discount: 0
    }
  ],
  3: [ // Chinese items
    {
      id: 301,
      name: "Schezwan Fried Rice",
      price: 249,
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500",
      description: "Spicy schezwan rice with vegetables and choice of protein",
      isVeg: false,
      spicyLevel: 4,
      rating: 4.5,
      isAvailable: true,
      badges: ["Spicy Lover"],
      isFavorite: false,
      discount: 20
    },
    {
      id: 302,
      name: "Manchurian Balls",
      price: 219,
      image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500",
      description: "Crispy vegetable balls in tangy manchurian gravy",
      isVeg: true,
      spicyLevel: 3,
      rating: 4.7,
      isAvailable: true,
      badges: ["Bestseller", "New"],
      isFavorite: false,
      discount: 0
    }
  ],
  5: [ // Desserts items
    {
      id: 501,
      name: "Gulab Jamun",
      price: 149,
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500",
      description: "Soft milk dumplings soaked in rose-flavored sugar syrup",
      isVeg: true,
      spicyLevel: 0,
      rating: 4.8,
      isAvailable: true,
      badges: ["Chef Special", "Bestseller"],
      isFavorite: false,
      discount: 10
    },
    {
      id: 502,
      name: "Chocolate Lava Cake",
      price: 199,
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500",
      description: "Warm chocolate cake with molten center, served with ice cream",
      isVeg: true,
      spicyLevel: 0,
      rating: 4.6,
      isAvailable: true,
      badges: ["New"],
      isFavorite: false,
      discount: 0
    }
  ]
};

// Add more categories as needed