import React, { useState } from 'react';
import './NutritionFact.css';
import Apple from '../../../assets/Images/apple.jpg';
import Banana from '../../../assets/Images/banana.jpg';
import Carrot from '../../../assets/Images/carrot.jpg';
import Spinach from '../../../assets/Images/spinach.jpg';
import Salmon from '../../../assets/Images/salmon.jpg';
import Almonds from '../../../assets/Images/almonds.jpg';

const NutritionFact = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const [searchQuery, setSearchQuery] = useState('');

  const foodFacts = [
    {
      title: 'Apple',
      image: Apple,
      fact: 'Apples are high in fiber and vitamin C, and low in calories. They help in digestion and boost immunity.'
    },
    {
      title: 'Banana',
      image: Banana,
      fact: 'Bananas are rich in potassium and vitamin B6, which are essential for heart health and energy.'
    },
    {
      title: 'Carrot',
      image: Carrot,
      fact: 'Carrots are packed with beta-carotene, which the body converts into vitamin A, promoting good vision.'
    },
    {
      title: 'Spinach',
      image: Spinach,
      fact: 'Spinach is loaded with vitamins A and K, iron, and antioxidants, which support bone health and combat inflammation.'
    },
    {
      title: 'Salmon',
      image: Salmon,
      fact: 'Salmon is an excellent source of omega-3 fatty acids, which are beneficial for heart health and brain function.'
    },
    {
      title: 'Almonds',
      image: Almonds,
      fact: 'Almonds are rich in healthy fats, fiber, and protein, making them great for heart health and maintaining a healthy weight.'
    }
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredFoodFacts = foodFacts.filter((item) =>
    item.title.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="nutrition-fact">
      
      <header className="header">
        <h1>Nutrition Facts</h1>
      </header>

      <main className="main-content">
        <section className="search-section">
          <input
            type="text"
            placeholder="Search for a food or fruit..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </section>

        <section className="food-facts-section">
          <h2>Food & Fruit Facts</h2>
          <div className="food-facts-container">
            {filteredFoodFacts.length > 0 ? (
              filteredFoodFacts.map((item, index) => (
                <div className="food-fact-card" key={index}>
                  <img src={item.image} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p>{item.fact}</p>
                </div>
              ))
            ) : (
              <p className="no-results">No results found</p>
            )}
          </div>
        </section>
      </main>

      {/* <footer className="footer">
        <p>&copy; 2024 Nutrition Fact Website. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default NutritionFact;
