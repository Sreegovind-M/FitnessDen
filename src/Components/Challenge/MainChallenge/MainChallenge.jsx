import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import prof from "../../../assets/Images/prof.png";
import coinsimg from "../../../assets/Images/coins.png";
import "./MainChallenge.css";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { LineChart } from "@mui/x-charts/LineChart";
import { createTheme } from "@mui/material/styles";
import { MyContext } from "../../DetailsContext/MyContext";
import { useContext } from "react";

const MainChallenge = () => {
  const [coins, setCoins] = useState(0);
  const [calorie, setCalorie] = useState(0);

  const [value, setValue] = useState([
    dayjs("2022-04-17"),
    dayjs("2022-04-21"),
  ]);

  const leaderboardData = [
    { name: "User 1", score: 120 },
    { name: "User 2", score: 110 },
    { name: "User 3", score: 100 },
    { name: "User 4", score: 90 },
    { name: "User 5", score: 85 },
  ];

  const { profileName, age, email, height, weight } = useContext(MyContext); // Access the context

  const location = useLocation();
  const { title, level } = location.state;

  const navi = useNavigate();
  const toWorkout = () => navi("/workout");
  const toAllWorkout = () => navi("/allWorkouts");
  const toDiet = () => navi("/recipe");

  return (
    <div className="main-challenge-bg">
      <div className="main-challenge-section">
        <div className="main-challenge-header">
          <div className="main-challenge-heading">
            <h1>{title}</h1>
          </div>
          <div className="main-challenge-top-bar">
            <div>
              <img src={prof} alt="Profile" height={28} width={28} />
              <h3>{profileName}</h3>
            </div>
            <div>
              <h3>{level}</h3>
            </div>
            <div>
              <img src={coinsimg} alt="Coins" height={28} width={28} />
              <h3>{coins}</h3>
            </div>
          </div>
        </div>
        <div className="main-challenge-body">
          <div className="main-challenge-col-1">
            <div className="main-challenge-box">
              <h2>Weight: {weight} kg</h2>
            </div>
            <div className="main-challenge-box" onClick={toWorkout}>
              <h2>Today's Workouts</h2>
            </div>
            <div className="main-challenge-box" onClick={toAllWorkout}>
              <h2>Workout List</h2>
            </div>
          </div>
          <div className="main-challenge-col-2">
            <div className="main-challenge-box">
              <h2>Body Fat: {weight / 5} %</h2>
            </div>
            <div className="main-challenge-box">
              <h2>Calories Burnt: {calorie}</h2>
            </div>
            <div className="main-challenge-box" onClick={toDiet}>
              <h2>Diet</h2>
            </div>
          </div>
          <div className="main-challenge-col-3">
            <div className="workout-log-calendar">
              <h2>Challenge Streak</h2>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateRangePicker
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                  renderInput={(startProps, endProps) => (
                    <>
                      <input
                        ref={startProps.inputRef}
                        {...startProps.inputProps}
                        className="date-input"
                      />
                      <span className="to-text">to</span>
                      <input
                        ref={endProps.inputRef}
                        {...endProps.inputProps}
                        className="date-input"
                      />
                    </>
                  )}
                />
              </LocalizationProvider>
            </div>
            <div className="weight-change-graph">
              <h2>Weight</h2>
              <LineChart
                xAxis={[{ data: [7, 14, 21, 28] }]}
                series={[
                  {
                    data: [50, 52, 51, 54],
                  },
                ]}
                width={400}
                height={160}
                className="weight-chart"
              />
            </div>
          </div>
          <div className="main-challenge-col-4">
            <h2>Leaderboard</h2>
            <div className="main-challenge-leaderboard">
              {leaderboardData.map((entry, index) => (
                <div key={index} className="leaderboard-entry">
                  <span>{entry.name}</span>
                  <span>{entry.score}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainChallenge;
