import React from "react";
import { motion } from "framer-motion";
import "../Home/Home.css";
import video from "../../assets/Video/hero-video.mp4";
import Features from "./Features/Features";
import PersonalTraining from "./PersonalTraining/PersonalTraining";
import Testimonials from "./Testimonials/Testimonials";
import NavBar from "../NavigationBar/NavBar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navi = useNavigate();
  const toChallenge = () => {
    navi("/challenge");
  }
  return (
    <div className="header-section">
      <div className="hero-section">
        <div className="hero-section-body">
          <div className="hero-title">
            <h1>It's Not fitness.</h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 6, ease: "easeInOut" }}
              style={{
                position: "absolute",
                left: 0,
                top: "9%",
                height: "7px",
                backgroundColor: "black",
              }}
            />
            <br />
            <h1>
              <span>It's Life.</span>
              <br />
                <button onClick={toChallenge}>JOIN NOW</button>
            </h1>
          </div>
          <div className="hero-video-section">
            <video className="hero-video" autoPlay muted>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="home-body-container">
        <Features/>
        <PersonalTraining />
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
