import React from "react";
import "./Badges.css";

const Badges = () => {
  const badges = [
    { id: 1, name: "Streak Master", description: "5 Days Fire Streak" },
    { id: 2, name: "Champion", description: "Top of the Leaderboard" },
    { id: 3, name: "Consistent", description: "30 Days Logged In" },
  ];

  return (
    <div className="badges">
      <h2>Badges & Achievements</h2>
      <ul>
        {badges.map((badge) => (
          <li key={badge.id}>
            <div className="badge-icon">🏆</div>
            <div className="badge-info">
              <h3>{badge.name}</h3>
              <p>{badge.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Badges;
