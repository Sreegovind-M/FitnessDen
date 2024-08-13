import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../ChallengeManagement/ChallengeManagement.css";

const ChallengeManagement = () => {
  const [challenges, setChallenges] = useState([]);

  const navi = useNavigate();
  const toChallengeHome = () => {
    navi("/mainChallenge");
  };

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3001/api/",
    })
      .then((res) => setChallenges(res.data))
      .catch((error) => console.error("Error fetching challenges:", error));
  }, []);

  const joinedChallenges = challenges.filter((challenge) => challenge.isJoin);

  return (
    <div className="challenge-management-container">
      <div className="challenge-management-section">
        <div className="challenge-management-header">
          <h1>Your Challenges</h1>
        </div>
        <div className="challenge-management-body">
          {joinedChallenges.length > 0 ? (
            <div className="challenge-management-box-section">
              {joinedChallenges.map((challenge) => (
                <div key={challenge._id}>
                  <div>
                    <div className="challenge-management-card">
                      <div className="challenge-management-card-content">
                        <img src={challenge.image} alt={challenge.title} />
                        <h2>{challenge.title}</h2>
                        <p>{challenge.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <h1>No Challenges Joined</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChallengeManagement;
