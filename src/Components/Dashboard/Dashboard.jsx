import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import dashboard from "../../assets/Images/dashboard.jpg";

const Dashboard = () => {
  const navi = useNavigate();
  const toFt = () => {
    navi("/fitnessTracking");
  };

  const toCm = () => {
    navi("/challengemanagement");
  }
  const toFeedback = () => {
    navi("/feedback");
  }

  const dashboardItems = [
    {
      ani: "https://lottie.host/embed/79f776f6-824d-4c6d-9f45-cc7f4f8c24b7/6L5OaG3xLG.json",
      head: "Fitness Tracker",
      descrip:
        "Keep an eye on your progress with real-time updates on your workouts, steps, and overall activity levels.",
      reverse: false,

    },
    {
      ani: "https://lottie.host/embed/fecf4af3-d1a8-49ce-a66c-fb3c339253cf/lERDRltVCM.json",
      head: "Challenge Management",
      descrip:
      "Easily join, create, and manage fitness challenges to stay motivated and compete with friends or the community.",
      reverse: true,
    },
    {
      ani: "https://lottie.host/embed/94151d94-ac50-4824-a2f2-2e9118cd3ad3/Fb922stZGP.json",
      head: "Activity Summary",
      descrip:
        "Get a quick overview of your daily, weekly, and monthly activities to track your fitness journey and achievements.",
      reverse: false,
    },
    {
      ani: "https://lottie.host/embed/316178e2-82de-40a2-acca-675f3c11f9d8/xplhmUs7nF.json",
      head: "Personal Health Metrics",
      descrip:
        "Monitor essential health metrics like heart rate, calories burned, and sleep patterns to ensure you're on track with your fitness goals.",
      reverse: true,
    },
    {
      ani: "https://lottie.host/embed/3a3f583c-0b84-4c56-9a91-dea551fa0fd6/71OjROrtBy.json",
      head: "User Feedbacks",
      descrip:
        "Read and share experiences with the community to stay motivated and get insights on how others are achieving their fitness objectives.",
      reverse: false,
    },
  ];

  return (
    <div>
      <div className="dashboard-section">
        <div className="dashboard-container">
          <div className="dashboard-header-section">
            <div className="dashboard-header">
              <h1>Elevate your workout</h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  left: 0,
                  top: "21%",
                  height: "7px",
                  backgroundColor: "black",
                }}
              />
              <br />
              <h1>
                <span>Track your progress</span>
              </h1>
            </div>
            <div className="dashboard-header-bg-img">
              <img src={dashboard} alt="" />
            </div>
          </div>
          <div className="dashboard-body-container">
            <div className="dashboard-body">
              <h1>Your Fitness Dashboard</h1>
              {dashboardItems.map((items, index) => (
                <div
                  className={`dashboard-box ${items.reverse ? "reverse" : ""}`}
                  key={index}
                >
                  <div className="dashboard-box-img">
                    <iframe src={items.ani}></iframe>
                  </div>
                  <div className="dashboard-box-descrip">
                    <h1>{items.head}</h1>
                    <p>{items.descrip}</p>
                    <button onClick={index == 0 ? toFt : "" || index == 1 ? toCm : "" || index == 4 ? toFeedback : ""}>Go to {items.head}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
