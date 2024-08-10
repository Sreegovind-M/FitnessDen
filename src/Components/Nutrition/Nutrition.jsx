import React, { useState, useRef } from "react";
import "./Nutrition.css";
import Doctor1 from "../../assets/Images/doctor1.jpg";
import Doctor2 from "../../assets/Images/doctor2.jpg";
import Doctor3 from "../../assets/Images/doctor3.jpg";
import Success1 from "../../assets/Images/success1.jpg";
import Success2 from "../../assets/Images/success2.jpg";
import Success3 from "../../assets/Images/success3.jpg";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

// SuccessStories Component
const SuccessStories = () => {
  const stories = [
    {
      name: "Rahul Verma",
      image: Success1,
      story:
        "I transformed my life by following a balanced diet and consistent exercise. I lost 20kg in 6 months and now feel more energetic than ever!",
    },
    {
      name: "Neha Singh",
      image: Success3,
      story:
        "With proper nutrition and guidance, I managed to overcome my unhealthy eating habits. Now, I enjoy a balanced lifestyle!",
    },
    {
      name: "Ankit Mehra",
      image: Success2,
      story:
        "Switching to a high-protein diet helped me gain muscle and improve my overall health. It's been an incredible journey!",
    },
  ];

  return (
    <section className="success-stories">
      <h2>Success Stories</h2>
      <div className="stories-container">
        {stories.map((story, index) => (
          <div className="story-card" key={index}>
            <img src={story.image} alt={story.name} />
            <h3>{story.name}</h3>
            <p>{story.story}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// CalorieCalculator Component
const CalorieCalculator = () => {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [calories, setCalories] = useState(null);

  const calculateCalories = (event) => {
    event.preventDefault();

    // Mifflin-St Jeor Equation
    let bmr;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Activity factor
    const activityFactors = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9,
    };

    const totalCalories = bmr * activityFactors[activityLevel];
    setCalories(totalCalories.toFixed(0));
  };

  const resetForm = () => {
    setGender("male");
    setAge("");
    setWeight("");
    setHeight("");
    setActivityLevel("sedentary");
    setCalories(null);
  };

  return (
    <div className="interactive-section">
      <h2>Calorie Calculator</h2>
      <p>
        Estimate your daily calorie needs based on your personal information.
      </p>
      <div className="calculator-container">
        <form onSubmit={calculateCalories}>
          <label>
            Gender: &nbsp;
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label>
            Age: &nbsp;
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter age"
              required
            />
          </label>
          <label>
            Height (cm): &nbsp;
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter height"
              required
            />
          </label>
          <label>
            Weight (kg): &nbsp;
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter weight"
              required
            />
          </label>
          <label>
            Activity Level: &nbsp;
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
            >
              <option value="sedentary">
                Sedentary (little to no exercise)
              </option>
              <option value="light">
                Lightly active (light exercise/sports 1-3 days/week)
              </option>
              <option value="moderate">
                Moderately active (moderate exercise/sports 3-5 days/week)
              </option>
              <option value="active">
                Active (hard exercise/sports 6-7 days a week)
              </option>
              <option value="veryActive">
                Very active (very hard exercise/sports & physical job)
              </option>
            </select>
          </label>
          <div className="form-buttons">
            <button type="submit">Calculate</button>
            <button type="button" onClick={resetForm}>
              Reset
            </button>
          </div>
          {calories !== null && (
            <div className="result">
              <h3>Estimated Daily Calories Needed:</h3>
              <p>{calories} kcal</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

// Nutrition Component
function Nutrition() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const introRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const scrollToIntro = () => {
    introRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const navi = useNavigate();
  const toNurition = () => {
    navi("/nutrition");
  };
  const toRecipe = () => {
    navi("/recipe");
  };

  const toNutritionFact = () => {
    navi("/nutritionfact");
  };

  return (
    <div className="nutrition-page">
      {/* <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
        <a href="/nutrition" className="logoname">
          <div className="logo">MyFitness</div>
        </a> */}
      <ul className={`nav-links ${isMenuOpen ? "show-menu" : ""}`}>
        <li onClick={toNurition}>
          <a>Home</a>
        </li>
        <li onClick={toRecipe}>
          <a>Recipes</a>
        </li>
        <li onClick={toNutritionFact}>
          <a>Nutritional Facts</a>
        </li>
      </ul>
      {/* <button
          className="menu-bar"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <div className="menu-icon">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>
      </nav> */}
      <header className="nutrition-header">
        <div className="header-content">
          <h1>Feed Your Body, Fuel Your Life</h1>
          <p>
            “Let food be thy medicine and medicine be thy food.” – Hippocrates
          </p>
          <p>
            Discover the power of nutritious food and how it can transform your
            well-being.
          </p>
          <button onClick={scrollToIntro}>Get Started</button>
        </div>
      </header>
      <div className="content">
        <section ref={introRef} className="intro-nutrition">
          <h2>Introduction to Nutrition</h2>
          <p>
            Nutrition is crucial for achieving fitness goals and overall
            well-being. It involves understanding how different nutrients impact
            your body and performance. Proper nutrition helps in muscle growth,
            energy production, and maintaining overall health.
          </p>
          <p>
            <strong>Macronutrients:</strong> Proteins, carbohydrates, and fats
            are essential for providing energy and supporting bodily functions.
            Proteins are vital for muscle repair, carbs provide energy, and fats
            support cellular functions.
          </p>
          <p>
            <strong>Micronutrients:</strong> Vitamins and minerals are needed in
            smaller amounts but are crucial for various bodily processes,
            including immune function, bone health, and energy production.
          </p>
        </section>
        <section className="meal-plans">
          <h2>Meal Plans & Recipes</h2>
          <p>
            Explore our range of healthy meal plans and recipes to help you stay
            on track with your nutrition goals.
          </p>
          <div className="meal-plans-container">
            <div className="meal-plan">
              <h3>Balanced Diet Plan</h3>
              <p>
                A comprehensive plan to ensure you get the right balance of
                nutrients throughout your week.
              </p>
              <a href="#recipes" className="button-link">
                Explore Recipes
              </a>
            </div>
            <div className="meal-plan">
              <h3>High Protein Plan</h3>
              <p>
                For those looking to build muscle and increase protein intake.
              </p>
              <a href="#recipes" className="button-link">
                Explore Recipes
              </a>
            </div>
            <div className="meal-plan">
              <h3>Low Carb Plan</h3>
              <p>
                Ideal for those aiming to reduce carbohydrate intake and manage
                weight.
              </p>
              <a href="#recipes" className="button-link">
                Explore Recipes
              </a>
            </div>
          </div>
        </section>
        <section className="expert-tips">
          <h2>Expert Tips & Tricks</h2>
          <div className="tips-container">
            <div className="tip-card">
              <img src={Doctor1} alt="Dr. Anil Sharma" />
              <h3>Dr. Anil Sharma</h3>
              <p>
                <strong>Tip:</strong> Start your day with a glass of warm water
                with lemon. It helps kick-start your metabolism and aids
                digestion.
              </p>
            </div>
            <div className="tip-card">
              <img src={Doctor3} alt="Ms. Priya Patel" />
              <h3>Ms. Priya Patel</h3>
              <p>
                <strong>Tip:</strong> Incorporate a variety of colors in your
                diet. Different colors indicate different nutrients and
                antioxidants.
              </p>
            </div>
            <div className="tip-card">
              <img src={Doctor2} alt="Dr. Rajesh Kumar" />
              <h3>Dr. Rajesh Kumar</h3>
              <p>
                <strong>Tip:</strong> Avoid processed foods and opt for whole
                foods. Processed foods often contain hidden sugars and unhealthy
                fats.
              </p>
            </div>
          </div>
        </section>
        <SuccessStories />
        <CalorieCalculator /> {/* Include CalorieCalculator Component */}
      </div>
      <div className="footer-container">{/* <Footer /> */}</div>
    </div>
  );
}

export default Nutrition;
