import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import coach from "../../../assets/Images/coach.webp";
import "../ChallengeHome/ChallengeHome.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ChallengeHome = () => {
  const location = useLocation();
  const challenge = location.state?.challenge;
  const navigate = useNavigate();

  const [level, setLevel] = React.useState("");

  const handleClick = () => {
    navigate("/mainChallenge", { state: { title: challenge.title, level } });
  };

  const handleChange = (event) => {
    setLevel(event.target.value);
  };

  if (!challenge) {
    return <p>No challenge data available.</p>;
  }

  return (
    <div className="challenge-home-container">
      <div className="challenge-home-section">
        <div className="challenge-home-headers">
          <div className="challenge-home-img">
            <img src={challenge.img} alt="no" />
          </div>
          <div className="challenge-home-body">
            <h1>{challenge.title}</h1>
            <p>{challenge.descrip}</p>
            <div className="challenge-home-pricing">
              <p>Price:</p>
              <del>
                <h2>$30</h2>
              </del>
              <h2>FREE</h2>
            </div>
            <div className="challenge-home-select">
              <button onClick={handleClick}>Join</button>
              <Box sx={{ minWidth: 150 }}>
                <FormControl fullWidth>
                  <InputLabel
                    id="demo-simple-select-label"
                    style={{ color: "black", fontWeight: "700" }}
                  >
                    Difficulty Level
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={level}
                    label="Difficulty Level"
                    onChange={handleChange}
                    style={{
                      color: "black",
                      fontWeight: "700",
                      textTransform: "uppercase",
                      fontSize: "1.8vh",
                    }}
                  >
                    <MenuItem value="Beginner">Beginner</MenuItem>
                    <MenuItem value="Intermediate">Intermediate</MenuItem>
                    <MenuItem value="Advanced">Advanced</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="challenge-home-ins">
              <p>Instructor: </p>
              <div className="challenge-home-ins-body">
                <p>Hany Rambod</p>
                <img src={coach} alt="" />
              </div>
            </div>
            <div className="challenge-home-soc">
              <h2>Share your challenge on: </h2>
              <div className="challenge-home-soc-link">
                <a href="www.facebook.com" className="fa fa-facebook"></a>
                <a href="www.instagram.com" className="fa fa-instagram"></a>
                <a href="www.twitter.com" className="fa fa-twitter"></a>
                <a href="www.snapchat.com" className="fa fa-snapchat-ghost"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeHome;
