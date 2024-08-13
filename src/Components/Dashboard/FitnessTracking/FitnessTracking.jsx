import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../FitnessTracking/FitnessTracking.css";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import CalorieCalculator from "./CalorieCalculator/CalorieCalculator";
import prof from "../../../assets/Images/prof.png";
import goto from "../../../assets/Images/goto.png";
import heart from "../../../assets/Images/heart.svg";
import fire from "../../../assets/Images/fire.svg";
import steps from "../../../assets/Images/steps.svg";
import water from "../../../assets/Images/water.svg";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { BarPlot } from "@mui/x-charts/BarChart";
import { AreaPlot } from "@mui/x-charts/LineChart";
import { LineChart } from "@mui/x-charts/LineChart";
import { MyContext } from "../../DetailsContext/MyContext";

const FitnessTracking = () => {
  const [calorie, setCalorie] = useState(0);
  const navi = useNavigate();
  const toWorkout = () => {
    navi("/workout");
  };
  const toDiet = () => {
    navi("/recipe");
  };
  const toChallenge = () => {
    navi("/challenge");
  };

  const data = [
    { label: "Proteins", value: 300, color: "#00C49F" },
    { label: "Carbs", value: 450, color: "#FFBB28" },
    { label: "Fats", value: 200, color: "#FF8042" },
  ];
  const sizing = {
    margin: { right: 5 },
    width: 200,
    height: 200,
    legend: { hidden: true },
  };
  const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

  const getArcLabel = (params) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(0)}%`;
  };

  const largeValues = [0, 25, 30, 55, 75, 60, 43, 79, 94, 32, 11, 77, 91];

  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const xLabels = [
    "Page A",
    "Page B",
    "Page C",
    "Page D",
    "Page E",
    "Page F",
    "Page G",
  ];

  const uDataa = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const xLabelss = [
    "Page A",
    "Page B",
    "Page C",
    "Page D",
    "Page E",
    "Page F",
    "Page G",
  ];

  const today = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const { weight, height, profileName, email, age } = useContext(MyContext);
  return (
    <div>
      <div className="fitness-tracking-section">
        <div className="fitness-tracking-container">
          <div className="fitness-tracking-heading-section">
            <h1>Fitness Tracker</h1>
            <div className="fitness-tracking-top-header">
              <div className="fitness-tracking-top-header-left">
                <h2>Hello User</h2>
                <p>
                  {days[today.getDay()]}, {today.getDate()}{" "}
                  {months[today.getMonth()]}
                </p>
              </div>
              <div className="fitness-tracking-top-header-right">
                <div className="fitness-tracking-top-header-right-name">
                  <h2>{profileName}</h2>
                  <p>{email}</p>
                </div>
                <img src={prof} alt="no" height={40} width={40} />
              </div>
            </div>
          </div>
          <div className="fitness-tracking-body">
            <div className="fitness-tracking-first-box-section">
              <div className="fitness-tracking-box box-1">
                <div className="fitness-tracking-box-top-img">
                  <div className="ftb-top-img-left">
                    <img src={heart} alt="" height={30} width={30} />
                  </div>
                  <div className="ftb-top-img-right">
                    <img src={goto} alt="" height={30} width={30} />
                  </div>
                </div>
                <div className="fitness-tracking-box-heading">
                  <h1>Active Minutes</h1>
                  <h1>125 Min</h1>
                </div>
                <div className="fitness-tracking-box-bottom-img">
                  <Typography>Active Minutes</Typography>
                  <LineChart
                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                    series={[
                      {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                      },
                    ]}
                    width={220}
                    height={150}
                  />
                </div>
              </div>
              <div className="fitness-tracking-box box-2">
                <div className="fitness-tracking-box-top-img">
                  <div className="ftb-top-img-left">
                    <img src={fire} alt="" height={30} width={30} />
                  </div>
                  <div className="ftb-top-img-right">
                    <img src={goto} alt="" height={30} width={30} />
                  </div>
                </div>
                <div className="fitness-tracking-box-heading">
                  <h1>Calories Burned</h1>
                  <h1>200 cal</h1>
                </div>
                <div className="fitness-tracking-box-bottom-img">
                  <Typography>Burnt Calories</Typography>
                  <ChartContainer
                    width={220}
                    height={150}
                    series={[{ data: uData, label: "uv", type: "bar" }]}
                    xAxis={[{ scaleType: "band", data: xLabels }]}
                  >
                    <BarPlot />
                  </ChartContainer>
                </div>
              </div>
              <div className="fitness-tracking-box box-3">
                <div className="fitness-tracking-box-top-img">
                  <div className="ftb-top-img-left">
                    <img src={steps} alt="" height={30} width={30} />
                  </div>
                  <div className="ftb-top-img-right">
                    <img src={goto} alt="" height={30} width={30} />
                  </div>
                </div>
                <div className="fitness-tracking-box-heading">
                  <h1>Steps Taken</h1>
                  <h1>3400 Steps</h1>
                </div>
                <div className="fitness-tracking-box-bottom-img">
                  <Typography>Active Minutes</Typography>
                  <ChartContainer
                    width={220}
                    height={150}
                    series={[
                      {
                        data: uData,
                        type: "line",
                        label: "uv",
                        area: true,
                        stack: "total",
                      },
                    ]}
                    xAxis={[{ scaleType: "point", data: xLabels }]}
                  >
                    <AreaPlot />
                  </ChartContainer>
                </div>
              </div>
              <div className="fitness-tracking-box box-4">
                <div className="fitness-tracking-box-top-img">
                  <div className="ftb-top-img-left">
                    <img src={water} alt="" height={30} width={30} />
                  </div>
                  <div className="ftb-top-img-right">
                    <img src={goto} alt="" height={30} width={30} />
                  </div>
                </div>
                <div className="fitness-tracking-box-heading">
                  <h1>Water Intake</h1>
                  <h1>1 / 5 Litres</h1>
                </div>
                <div className="fitness-tracking-box-bottom-img">
                  <Typography>Water Intake</Typography>
                  <LineChart
                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                    series={[
                      {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                      },
                    ]}
                    width={220}
                    height={150}
                  />
                </div>
              </div>
              <div className="fitness-tracking-right-box-section">
                <div className="ftb-right-box boxr1">
                  <h1>Weight</h1>
                  <h2>{weight}</h2>
                </div>
                <div className="ftb-right-box boxr2">
                  <h1>Height</h1>
                  <h2>{height}</h2>
                </div>
                <div className="ftb-right-box boxr3">
                  <h1>Age</h1>
                  <h2>{age}</h2>
                </div>
              </div>
            </div>
            <div className="fitness-tracking-second-box-section">
              <div className="fitness-tracking-second-left-box-section">
                <div className="ftsl-calorie-box" onClick={toDiet}>
                  <div className="ftsl-pie-chart">
                    <h1>Calorie Tracker</h1>
                    <PieChart
                      series={[
                        {
                          outerRadius: 80,
                          data,
                          arcLabel: getArcLabel,
                        },
                      ]}
                      sx={{
                        [`& .${pieArcLabelClasses.root}`]: {
                          fill: "white",
                          fontSize: 14,
                        },
                      }}
                      {...sizing}
                    />
                  </div>
                  <div className="ftsl-calorie-descrip">
                    <h3>Total Calorie: 2200 / 2700 kcl</h3>
                    <h3>Protein: 40 / 120 g</h3>
                    <h3>Carbohydrates: 120 / 170 g</h3>
                    <h3>Fats: 20 / 60 g</h3>
                  </div>
                </div>
                <div className="fitness-tracking-second-box-nav-section">
                  <div
                    className="fts-nav-top challenge-box"
                    onClick={toChallenge}
                  >
                    <h1>Challenge</h1>
                  </div>
                  <div className="fts-nav-top workouts-box" onClick={toWorkout}>
                    <h1>Workouts</h1>
                  </div>
                </div>
                <div className="fitness-tracking-activity-section">
                  <h1>Recent Activity</h1>
                  <LineChart
                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                    series={[
                      {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                      },
                    ]}
                    width={500}
                    height={250}
                    margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
                    grid={{ vertical: true, horizontal: true }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessTracking;
