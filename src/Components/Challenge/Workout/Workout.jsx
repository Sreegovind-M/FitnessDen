import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import "../Workout/Workout.css";

const Workout = () => {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/waist?limit=10&offset=0",
      headers: {
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        "x-rapidapi-key": "05651d711fmsh4a52af44fb02c24p159c88jsne95863eb36cb",
      },
    }).then((res) => setWorkouts(shuffleArray(res.data).slice(0, 3)));
  }, []);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div className="workout-section">
      <div className="workout-header">
        <h1>Today's Workouts</h1>
      </div>
      {workouts.slice(0, 3).map((workout, index) => (
        <Accordion key={index} defaultExpanded={index == 0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <h1>{workout.name}</h1>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="exercise-body">
              <div className="exercise-vid">
                <strong>Exercise Demo:</strong>
                <br />
                <img
                  src={workout.gifUrl}
                  alt={workout.name}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="exercise-descrip">
                <h2>
                  Equipment: <span>{workout.equipment}</span>
                </h2>
                <h2>
                  Target: <span>{workout.target}</span>
                </h2>
                <h2>Secondary Muscles</h2>
                <ul>
                  {workout.secondaryMuscles.map((muscle, index) => (
                    <li key={index}>{muscle}</li>
                  ))}
                </ul>
                <h2>Instructions</h2>
                <ul>
                  {workout.instructions.map((ins, index) => (
                    <li key={index}>{ins}</li>
                  ))}
                </ul>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Workout;
