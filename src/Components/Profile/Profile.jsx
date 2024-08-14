import React, { useState, useEffect, useContext } from "react";
import ProfImg from "../../assets/Images/Profile_Training.jpg";
import "../Profile/Profile.css";
import coins from "../../assets/Images/coins.png";
import { MyContext } from "../DetailsContext/MyContext";
import { useNavigate } from "react-router-dom";

const badges = [
  { id: 1, name: "Streak Master", description: "5 Days Fire Streak" },
  { id: 2, name: "Champion", description: "Top of the Leaderboard" },
  { id: 3, name: "Consistent", description: "30 Days Logged In" },
];

const Profile = () => {
  const { setProfileDetails } = useContext(MyContext);

  const [profileData, setProfileData] = useState({
    profileName: "",
    age: "",
    email: "",
    height: "",
    weight: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfileDetails(profileData);
  };

  const handleReset = () => {
    setProfileData({
      profileName: "",
      age: "",
      email: "",
      height: "",
      weight: "",
    });
  };
  const [streaks, setStreaks] = useState(Array(31).fill(false));
  const toggleStreak = (index) => {
    const newStreaks = [...streaks];
    newStreaks[index] = !newStreaks[index];
    setStreaks(newStreaks);
  };

  const [coinss, setCoinss] = useState(0);

  const currentDate = new Date();
  const monthNames = [
    "January",
    "February",
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
  const currentMonth = monthNames[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();

  const navi = useNavigate();

  const toDashboard = () => {
    navi("/dashboard");
  }
  return (
    <div className="profile-container">
      <div className="profile-nav">
        <h1>Public Profile</h1>
        <div className="combo-sea-db">
          <img src={coins} alt="" height={33} width={33} />
          <h2>{coinss} coins</h2>
        </div>
      </div>

      <div className="profile-container-body">
        <div className="c1">
          <div className="prof-logo">
            <div className="prof-bg">
              <img src={ProfImg} alt="Profile" />
            </div>
          </div>
          <div className="prof-body">
            <form onSubmit={handleSubmit}>
              <div className="form__group field">
                <input
                  type="text"
                  name="profileName"
                  className="form__field"
                  placeholder="Name"
                  value={profileData.profileName}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="profileName" className="form__label">
                  Name
                </label>
              </div>
              <div className="form__group field">
                <input
                  type="number"
                  name="age"
                  className="form__field"
                  placeholder="Age"
                  value={profileData.age}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="age" className="form__label">
                  Age
                </label>
              </div>
              <div className="form__group field">
                <input
                  type="email"
                  name="email"
                  className="form__field"
                  placeholder="Email"
                  value={profileData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email" className="form__label">
                  Email
                </label>
              </div>
              <div className="form__group field">
                <input
                  type="number"
                  name="height"
                  className="form__field"
                  placeholder="Height(cm)"
                  value={profileData.height}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="height" className="form__label">
                  Height (cm)
                </label>
              </div>
              <div className="form__group field">
                <input
                  type="number"
                  name="weight"
                  className="form__field"
                  placeholder="Weight(kg)"
                  value={profileData.weight}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="weight" className="form__label">
                  Weight (kg)
                </label>
              </div>
              <div className="form__buttons">
                <button type="submit" className="form__button update-button">
                  Update
                </button>
                <button
                  type="button"
                  className="form__button reset-button"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
              <div className="go-to-dashboard">
                <a onClick={toDashboard} className="dashboard-link">
                  Go to Dashboard
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="c2">
          <div className="calendar">
            <h2>
              {currentMonth} {currentYear}
            </h2>
            <br />
            <div className="calendar-grid">
              {Array.from({ length: 31 }, (_, i) => (
                <div
                  key={i}
                  className={`day ${streaks[i] ? "active" : ""}`}
                  onClick={() => toggleStreak(i)}
                >
                  {i + 1}
                  {streaks[i] && <span className="firestreak">🔥</span>}
                </div>
              ))}
            </div>
          </div>

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
        </div>
        <div className="c3">
          <h3>Leaderboard</h3>
          <ol>
            <li>Sreegovind - 1500 points</li>
            <li>Sudharshan - 1450 points</li>
            <li>Thiruvarulselvan - 1400 points</li>
            <li>Sudharshan S - 1350 points</li>
            <li>Sukumar - 1300 points</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Profile;
