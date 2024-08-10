import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../FitnessTracking/FitnessTracking.css";
import { PieChart } from "@mui/x-charts/PieChart";
import CalorieCalculator from "./CalorieCalculator/CalorieCalculator";
import prof from "../../../assets/Images/prof.png"

const FitnessTracking = () => {
  const [calorie, setCalorie] = useState(0);
  const navi = useNavigate();
  const toWorkout = () => {
    navi("/workout");
  };
  const toDiet = () => {
    navi("/recipe")
}


  const data = [
    { id: 0, value: 25, label: "Protein" },
    { id: 1, value: 20, label: "Carbohydrates" },
    { id: 2, value: 10, label: "Fat" },
  ];
  const today = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return (
    <div>
      {/* <div className="fitness-tracking-section">
        <div className="fitness-tracking-container">
          <div className="fitness-tracking-header">
            <h1>fitness tracker</h1>
          </div>
          <div className="fitness-tracking-body">
            <div className="fitness-tracking-col-1">
              <div className="fitness-tracking-box" onClick={toWorkout}>
                <h2>Workouts</h2>
              </div>
              <div className="fitness-tracking-box" onClick={toDiet}>
                <h2>Diet list</h2>
              </div>
            </div>
            <div className="fitness-tracking-col-2">
              <div className="fitness-tracking-box">
                <h2>steps</h2>
              </div>
              <div className="fitness-tracking-box">
                <h2>Calories: {calorie} / 2500</h2>
              </div>
            </div>

            <div className="fitness-tracking-col-3">
              <div className="fitness-tracking-calorie-counter">
                <h1>Calorie Tracker</h1>
                <PieChart
                  series={[
                    {
                      data,
                      highlightScope: { faded: "global", highlighted: "item" },
                      faded: {
                        innerRadius: 70,
                        additionalRadius: -30,
                        color: "gray",
                      },
                    },
                  ]}
                  height={200}
                />
              </div>
            </div>
          </div>
          <div className="fitness-tracking-calorie-calculator">
            <CalorieCalculator />
          </div>
        </div>
      </div> */}

        <div className="fitness-tracking-section">
          <div className="fitness-tracking-container">
            <div className="fitness-tracking-heading-section">
              <h1>Fitness Tracker</h1>
              <div className="fitness-tracking-top-header">
                <div className="fitness-tracking-top-header-left">
                  <h2>Hello User</h2>
                  <p>{days[today.getDay()]}, {today.getDate()} {months[today.getMonth()]}</p>
                </div>
                <div className="fitness-tracking-top-header-right">
                  <div className="fitness-tracking-top-header-right-name">
                    <h2>Name</h2>
                    <p>Email</p>
                  </div>
                  <img src={prof} alt="no" height={40} width={40} />
                </div>
              </div>
            </div>
            <div className="fitness-tracking-body">
              
            </div>
          </div>
        </div>

    </div>
  );
};

export default FitnessTracking;
