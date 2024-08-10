import React, { useState, useEffect } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CartPage from "../CartPage/CartPage";
import "../ShopsHome.css";
import yoga from "../../../assets/Images/yoga_mat.jpeg";
import bands from "../../../assets/Images/bandsjpeg.jpeg";
import bottle from "../../../assets/Images/bottle.jpeg";
import watch from "../../../assets/Images/watch.jpg";
import backpack from "../../../assets/Images/backpackjpeg.jpeg";

const products = [
  {
    id: 1,
    name: "High-Performance Yoga Mat",
    price: 29.99,
    description:
      "Durable, non-slip surface for all your yoga and stretching needs.",
    image: yoga,
  },
  {
    id: 2,
    name: "Premium Resistance Bands Set",
    price: 19.99,
    description:
      "Versatile bands for strength training and flexibility exercises.",
    image: bands,
  },
  {
    id: 3,
    name: "Pro-Grade Blender Bottle",
    price: 12.99,
    description: "Perfect for mixing protein shakes and smoothies on the go.",
    image: bottle,
  },
  {
    id: 4,
    name: "Fitness Tracker Watch",
    price: 89.99,
    description:
      "Track your steps, calories, and heart rate with this sleek fitness tracker.",
    image: watch,
  },
  {
    id: 5,
    name: "BackPack Gym Bag, Stealth Black, 30 L",
    price: 89.99,
    description:
      "Designed for comfort with padded, adjustable straps and durable, water-resistant fabric.",
    image: backpack,
  },
  {
    id: 6,
    name: "Adjustable Kettlebell",
    price: 79.99,
    description:
      "This adjustable kettlebell lets you change weights easily, ranging from 10 to 40 pounds, making it ideal for various exercises and space-saving.",
    image: "/Images/kettlebell.jpeg",
  },
  {
    id: 7,
    name: "Compact Treadmill",
    price: 399.99,
    description:
      "Foldable and space-saving treadmill with adjustable speed settings and built-in heart rate monitor.",
    image: "/Images/treadmill.jpeg",
  },
  {
    id: 8,
    name: "Whey Protein Isolate",
    price: 49.99,
    description:
      "Pure whey protein isolate with 25g of protein per serving. Ideal for muscle recovery and lean muscle growth.",
    image: "/Images/whey_isolate.jpeg",
  },
  {
    id: 9,
    name: "Medicine Ball",
    price: 34.99,
    description:
      "Durable medicine ball for explosive strength training and core exercises.",
    image: "/Images/medicine_ball.jpeg",
  },
  {
    id: 10,
    name: "Adjustable Weight Bench",
    price: 149.99,
    description:
      "Versatile bench with multiple incline settings, perfect for various strength exercises.",
    image: "/Images/weight_bench.jpeg",
  },
  {
    id: 11,
    name: "Ab Wheel Roller",
    price: 19.99,
    description:
      "Sturdy ab wheel with comfortable grips for effective core workouts.",
    image: "/Images/ab_wheel.jpeg",
  },
  {
    id: 12,
    name: "Jump Rope with Counter",
    price: 15.99,
    description:
      "Heavy-duty jump rope with built-in counter to track your jumps and improve cardio endurance.",
    image: "/Images/jump_rope.jpeg",
  },
  {
    id: 13,
    name: "Sports Water Bottle with Filter",
    price: 22.99,
    description:
      "Reusable water bottle with built-in filter to ensure clean hydration during workouts.",
    image: "/Images/sports_bottle.jpeg",
  },
  {
    id: 14,
    name: "Adjustable Hand Weights",
    price: 39.99,
    description:
      "Set of hand weights with adjustable increments for personalized strength training.",
    image: "/Images/hand_weights.jpeg",
  },
  {
    id: 15,
    name: "Hydrolyzed Whey Protein",
    price: 59.99,
    description:
      "Fast-absorbing hydrolyzed whey protein with 30g of protein per serving, designed for rapid muscle recovery.",
    image: "/Images/hydrolyzed_whey_protein.jpeg",
  },
  {
    id: 16,
    name: "Pull-Up Bar",
    price: 29.99,
    description:
      "Sturdy pull-up bar for home workouts, supports multiple grip positions.",
    image: "/Images/pull_up_bar.jpeg",
  },
  {
    id: 17,
    name: "Resistance Band Handles",
    price: 12.99,
    description:
      "Comfortable handles for resistance bands to enhance your strength training routine.",
    image: "/Images/resistance_band_handles.jpeg",
  },
  {
    id: 18,
    name: "Fitness Ball",
    price: 26.99,
    description:
      "Anti-burst fitness ball for core strengthening, balance exercises, and flexibility.",
    image: "/Images/fitness_ball.jpeg",
  },
  {
    id: 19,
    name: "Gym Chalk",
    price: 9.99,
    description:
      "High-quality gym chalk for a secure grip during lifting and training sessions.",
    image: "/Images/gym_chalk.jpeg",
  },
  {
    id: 20,
    name: "Weighted Vest",
    price: 89.99,
    description:
      "Adjustable weighted vest to add extra resistance to your workouts and enhance performance.",
    image: "/Images/weighted_vest.jpeg",
  },
  {
    id: 21,
    name: "Core Sliders",
    price: 14.99,
    description:
      "Dual-sided core sliders for smooth sliding exercises that engage your core muscles.",
    image: "/Images/core_sliders.jpeg",
  },
  {
    id: 22,
    name: "Balance Board",
    price: 34.99,
    description:
      "Sturdy balance board to improve stability, core strength, and coordination.",
    image: "/Images/balance_board.jpeg",
  },
  {
    id: 23,
    name: "Resistance Loop Bands",
    price: 18.99,
    description:
      "Set of resistance loop bands for targeted strength training and flexibility exercises.",
    image: "/Images/loop_bands.jpeg",
  },
  {
    id: 24,
    name: "Swimming Kickboard",
    price: 16.99,
    description:
      "Lightweight kickboard to improve swimming technique and build leg strength.",
    image: "/Images/kickboard.jpeg",
  },
  {
    id: 25,
    name: "Hand Grippers",
    price: 13.99,
    description:
      "Adjustable hand grippers to strengthen grip and forearm muscles.",
    image: "/Images/hand_grippers.jpeg",
  },
  {
    id: 26,
    name: "Neoprene Dumbbells",
    price: 27.99,
    description:
      "Colorful neoprene dumbbells ideal for light to moderate strength training and toning.",
    image: "/Images/neoprene_dumbbells.jpeg",
  },
  {
    id: 27,
    name: "Speed Agility Ladder",
    price: 22.99,
    description:
      "Adjustable speed and agility ladder for improving footwork and coordination.",
    image: "/Images/agility_ladder.jpeg",
  },
  {
    id: 28,
    name: "Resistance Tubes Set",
    price: 24.99,
    description:
      "Set of resistance tubes with different resistance levels for a full-body workout.",
    image: "/Images/resistance_tubes.jpeg",
  },
  {
    id: 29,
    name: "Fitness Tracker Armband",
    price: 18.99,
    description:
      "Comfortable armband to hold your fitness tracker securely while you exercise.",
    image: "/Images/armband.jpeg",
  },
  {
    id: 30,
    name: "Yoga Wheel",
    price: 29.99,
    description:
      "Versatile yoga wheel to assist with stretching, backbends, and improving flexibility.",
    image: "/Images/yoga_wheel.jpeg",
  },
  {
    id: 31,
    name: "Casein Protein Powder",
    price: 54.99,
    description:
      "Slow-digesting casein protein powder with 24g of protein per serving, perfect for nighttime muscle repair.",
    image: "/Images/casein_protein.jpeg",
  },
  {
    id: 32,
    name: "Plant-Based Protein Blend",
    price: 44.99,
    description:
      "A blend of pea, rice, and hemp proteins with 20g of protein per serving. Ideal for vegans and those with dairy sensitivities.",
    image: "/Images/plant_based_protein.jpeg",
  },
  {
    id: 33,
    name: "Whey Protein Gold",
    price: 39.99,
    description:
      "Premium protein for muscle growth and recovery with 25g of protein per serving.",
    image: "/Images/meal_replacement_shake.jpeg",
  },
  {
    id: 34,
    name: "Egg White Protein Powder",
    price: 45.99,
    description:
      "High-quality egg white protein powder with 26g of protein per serving, perfect for building lean muscle mass.",
    image: "/Images/egg_white_protein.jpeg",
  },
  {
    id: 35,
    name: "Collagen Protein Powder",
    price: 49.99,
    description:
      "Collagen protein powder with 20g of protein per serving, supports joint health and skin elasticity.",
    image: "/Images/collagen_protein.jpeg",
  },
  {
    id: 36,
    name: "BCAA Protein Powder",
    price: 39.99,
    description:
      "Branched-Chain Amino Acid (BCAA) protein powder with 7g of BCAAs per serving to enhance endurance and reduce muscle fatigue.",
    image: "/Images/bcaa_protein.jpeg",
  },
  {
    id: 37,
    name: "Pre-Workout Protein Supplement",
    price: 34.99,
    description:
      "Pre-workout protein supplement with 20g of protein and added caffeine for energy and focus during workouts.",
    image: "/Images/pre_workout_protein.jpeg",
  },
  {
    id: 38,
    name: "Low-Carb Protein Powder",
    price: 42.99,
    description:
      "Low-carb protein powder with 25g of protein per serving and less than 5g of carbs, perfect for ketogenic diets.",
    image: "/Images/low_carb_protein.jpeg",
  },
  {
    id: 39,
    name: "Pumpkin Seed Protein",
    price: 39.99,
    description:
      "Nutritious pumpkin seed protein with 20g of protein per serving, providing essential amino acids and vitamins.",
    image: "/Images/pumpkin_seed_protein.jpeg",
  },
  {
    id: 40,
    name: "Soy Protein Isolate",
    price: 42.99,
    description:
      "Soy protein isolate with 25g of protein per serving, ideal for building muscle and supporting overall health.",
    image: "/Images/soy_protein_isolate.jpeg",
  },
  {
    id: 41,
    name: "Creatine Monohydrate",
    price: 29.99,
    description:
      "Pure creatine monohydrate to enhance strength, power, and muscle growth. Ideal for high-intensity workouts.",
    image: "/Images/creatine_monohydrate.jpeg",
  },
  {
    id: 42,
    name: "Micronized Creatine",
    price: 34.99,
    description:
      "Micronized creatine for better absorption and reduced bloating. Supports muscle recovery and endurance.",
    image: "/Images/micronized_creatine.jpeg",
  },
  {
    id: 43,
    name: "Creatine HCL",
    price: 39.99,
    description:
      "Creatine HCL for superior solubility and minimal water retention. Boosts strength and performance.",
    image: "/Images/creatine_hcl.jpeg",
  },
  {
    id: 44,
    name: "Creatine Capsules",
    price: 32.99,
    description:
      "Convenient creatine capsules for on-the-go use. Supports muscle power and athletic performance.",
    image: "/Images/creatine_capsules.jpeg",
  },
];

const Cart = ({ cartItems, onRemove }) => (
  <div className="cart">
    <h2>Cart</h2>
    {cartItems.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => onRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const Shopping = () => {
  const [cart, setCart] = useState([]);
  const [sortOrder, setSortOrder] = useState("default");
  const [searchTerm, setSearchTerm] = useState("");
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    if (updatedCart.length === 0) {
      setIsCartVisible(false); // Hide the cart overlay if empty
    }
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOrder) {
      case "lowToHigh":
        return a.price - b.price;
      case "highToLow":
        return b.price - a.price;
      case "default":
        return a.id - b.id;
      default:
        return 0;
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="shopping-page">
      <header className="shopping-header">
        <div className="header-center">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-bar"
          />
        </div>
        <div className="header-right">
          <button
            className="cart-icon"
            onClick={() => setIsCartVisible(!isCartVisible)}
          >
            <span role="img" aria-label="cart">
              🛒
            </span>
            {cart.length > 0 && (
              <span className="cart-count">{cart.length}</span>
            )}
          </button>
        </div>
      </header>

      <main>
        <section className="filters">
          <h2>Sort By</h2>
          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="sort-select"
          >
            <option value="default">Default</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </section>

        <section className="products">
          <h2>All Products</h2>
          <ul>
            {sortedProducts.map((product) => (
              <li key={product.id} className="product-item">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p>
                    <strong>${product.price.toFixed(2)}</strong>
                  </p>
                  <button onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {isCartVisible && (
          <CartPage
            cartItems={cart}
            onRemove={handleRemoveFromCart}
            onClose={() => setIsCartVisible(false)}
          />
        )}
      </main>
    </div>
  );
};

export default Shopping;
