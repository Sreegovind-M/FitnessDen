import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavigationBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Challenge from "./Components/Challenge/Challenge";
import ChallengeHome from "./Components/Challenge/ChallengeHome/ChallengeHome";
import MainChallenge from "./Components/Challenge/MainChallenge/MainChallenge";
import Workout from "./Components/Challenge/Workout/Workout";
import AllWorkout from "./Components/Challenge/AllWorkouts/AllWorkouts";
import Dashboard from "./Components/Dashboard/Dashboard";
import FitnessTracking from "./Components/Dashboard/FitnessTracking/FitnessTracking";
import PersonalTraining from "./Components/Home/PersonalTraining/PersonalTraining";
import ShopsHome from "./Components/Shops/ShopsHome";
import AllProducts from "./Components/Shops/AllProducts/AllProducts";
import CartPage from "./Components/Shops/CartPage/CartPage";
import Login from "./Components/Login/Login";
import Nutrition from "./Components/Nutrition/Nutrition";
import NutritionFact from "./Components/Nutrition/NutritionFact/NutritionFact";
import Recipe from "./Components/Nutrition/Recipe/Recipe";
import Profile from "./Components/Profile/Profile";
import SignUp from "./Components/SignUp/SignUp";
import { MyContextProvider } from "./Components/DetailsContext/MyContext";
import ChallengeManagement from "./Components/Dashboard/ChallengeManagement/ChallengeManagement";
import Feedback from "./Components/Dashboard/Feedback/Feedback";

const AppContent = () => {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";
  const isSignUpPage = location.pathname === "/signup";

  return (
    <div>
      <MyContextProvider>
        {!isLoginPage && !isSignUpPage && <NavBar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/challengeHome" element={<ChallengeHome />} />
          <Route path="/mainChallenge" element={<MainChallenge />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/allWorkouts" element={<AllWorkout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/fitnessTracking" element={<FitnessTracking />} />
          <Route path="/personalTraining" element={<PersonalTraining />} />
          <Route path="/shopsHome" element={<ShopsHome />} />
          <Route path="/allProducts" element={<AllProducts />} />
          <Route path="/cartPage" element={<CartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/nutrition" element={<Nutrition />}></Route>
          <Route path="/nutritionfact" element={<NutritionFact />}></Route>
          <Route path="/recipe" element={<Recipe />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route
            path="/challengemanagement"
            element={<ChallengeManagement />}
          ></Route>
          <Route path="/feedback" element={<Feedback/>}></Route>
        </Routes>
        {!isLoginPage && !isSignUpPage && <Footer />}
      </MyContextProvider>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
