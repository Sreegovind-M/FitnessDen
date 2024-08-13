import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useEffect } from 'react';
import './Recipe.css';
// import Food1 from '../../../assets/Images/food1.jpg';
// import Food2 from '../../../assets/Images/food2.jpg';
// import Food3 from '../../../assets/Images/food3.jpg';
// import Food4 from '../../../assets/Images/food4.jpg';
// import Food5 from '../../../assets/Images/food5.jpg';
// import Food6 from '../../../assets/Images/food6.jpg';
// import Food7 from '../../../assets/Images/food7.jpg';
// import Food8 from '../../../assets/Images/food8.jpg';
// import Food9 from '../../../assets/Images/food9.jpg'; 
// import Food10 from '../../../assets/Images/food10.jpg'; 
// import Food11 from '../../../assets/Images/food11.jpg'; 
// import Food12 from '../../../assets/Images/food12.jpg'; 
import Food13 from '../../../assets/Images/food13.jpg'; 
import Food14 from '../../../assets/Images/food14.jpg'; 
import Food15 from '../../../assets/Images/food15.jpg'; 
import Food16 from '../../../assets/Images/food16.jpg'; 
import Food17 from '../../../assets/Images/food17.jpg'; 
import Food18 from '../../../assets/Images/food18.jpg'; 
import Food19 from '../../../assets/Images/food19.jpg'; 
import Food20 from '../../../assets/Images/food20.jpg'; 
import Food21 from '../../../assets/Images/food21.jpg'; 
import Food22 from '../../../assets/Images/food22.jpg'; 
import Food23 from '../../../assets/Images/food23.jpg'; 
import Food24 from '../../../assets/Images/food24.jpg'; 

const Recipe = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  // const recipes = [
  //   { title: 'Grilled Chicken', image: Food1 },
  //   { title: 'Quinoa Salad', image: Food2 },
  //   { title: 'Vegan Tacos', image: Food3 },
  //   { title: 'Greek Yogurt Bowl', image: Food4 },
  //   { title: 'Protein Smoothie', image: Food5 },
  //   { title: 'Baked Salmon', image: Food6 }
  // ];

  const [general, setGeneral] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3001/recipe/"
    }).then((res) => setGeneral(res.data));
    
  }, [])
  const [balanceddiet, setBalancedDiet] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3001/balanceddiet/"
    }).then((res) => setBalancedDiet(res.data));
    
  }, [])
  const [highprotein, setHighProtein] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3001/highprotein/"
    }).then((res) => setHighProtein(res.data));
    
  }, [])
  const [lowcarb, setLowCarb] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3001/lowcarb/"
    }).then((res) => setLowCarb(res.data));
    
  }, [])

  // const balancedDiet = [
  //   { title: 'Chicken & Veggie Stir-Fry', image: Food7 },
  //   { title: 'Chickpea Salad', image: Food8 },
  //   { title: 'Turkey & Avocado Wrap', image: Food9 },
  //   { title: 'Sweet Potato & Black Bean Chili', image: Food10 },
  //   { title: 'Salmon & Quinoa Bowl', image: Food11 },
  //   { title: 'Greek Yogurt & Fruit Parfait', image: Food12 }
  // ];

  // const highProteinPlan = [
  //   { title: 'Grilled Steak', image: Food13 },
  //   { title: 'Chicken Breast & Asparagus', image: Food14 },
  //   { title: 'Egg White Omelette', image: Food15 },
  //   { title: 'Greek Yogurt with Berries', image: Food16 },
  //   { title: 'Tuna Salad', image: Food17 },
  //   { title: 'Protein Pancakes', image: Food18 }
  // ];

  // const lowCarbPlan = [
  //   { title: 'Zucchini Noodles', image: Food19 },
  //   { title: 'Stuffed Bell Peppers', image: Food20 },
  //   { title: 'Cauliflower Rice', image: Food21 },
  //   { title: 'Chicken Salad Lettuce Wraps', image: Food22 },
  //   { title: 'Avocado Egg Salad', image: Food23 },
  //   { title: 'Grilled Shrimp Skewers', image: Food24 }
  // ];

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const toNutrition = () => navigate("/nutrition");
  const toRecipe = () => navigate("/recipe");
  const toNutritionFact = () => navigate("/nutritionfact");

  return (
    <div className="recipe-page">
      <ul className={`nav-links ${isMenuOpen ? "show-menu" : ""}`}>
        <li onClick={toNutrition}><a>Home</a></li>
        <li onClick={toRecipe}><a>Recipes</a></li>
        <li onClick={toNutritionFact}><a>Nutritional Facts</a></li>
      </ul>
      
      <section className="quotes-section">
        <div className="quotes-content">
          <h1>"Cooking is love made visible"</h1>
          <p>"Great recipes come from great love for food. Share your passion with every dish you create."</p>
        </div>
      </section>

      <section className="recipe-section">
        <h2>General Food Recipes</h2>
        <div className="recipe-container">
          {general.map((general, index) => (
            <div className="recipe-card" key={index}>
              <img src={general.image} alt={general.title} />
              <h3>{general.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="balanced-diet-section" id='balanceddietplan'>
        <h2>Balanced Diet Plan</h2>
        <p>A comprehensive plan to ensure you get the right balance of nutrients throughout your week.</p>
        <div className="balanced-diet-container">
          {balanceddiet.map((balanceddiet, index) => (
            <div className="diet-card" key={index}>
              <img src={balanceddiet.image} alt={balanceddiet.title} />
              <h3>{balanceddiet.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="high-protein-plan-section" id='highproteinplan'>
        <h2>High Protein Plan</h2>
        <p>For those looking to build muscle and increase protein intake.</p>
        <div className="high-protein-container">
          {highprotein.map((highprotein, index) => (
            <div className="high-protein-card" key={index}>
              <img src={highprotein.image} alt={highprotein.title} />
              <h3>{highprotein.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="low-carb-plan-section" id='lowcarbplan'>
        <h2>Low Carb Plan</h2>
        <p>Ideal for those aiming to reduce carbohydrate intake and manage weight.</p>
        <div className="low-carb-container">
          {lowcarb.map((lowcarb, index) => (
            <div className="low-carb-card" key={index}>
              <img src={lowcarb.image} alt={lowcarb.title} />
              <h3>{lowcarb.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Recipe;