import React, { useState } from "react";
import "../CalorieCalculator/CalorieCalculator.css";

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

export default CalorieCalculator;
