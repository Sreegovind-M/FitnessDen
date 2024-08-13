import React, { createContext, useState } from "react";

export const MyContext = createContext({
  profileName: "",
  age: 0,
  email: "",
  height: 0,
  weight: 0,
  setProfileDetails: () => {},
});

export const MyContextProvider = ({ children }) => {
  const [profileName, setProfileName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const setProfileDetails = ({ profileName, age, email, height, weight }) => {
    setProfileName(profileName);
    setAge(age);
    setEmail(email);
    setHeight(height);
    setWeight(weight);
  };

  return (
    <MyContext.Provider
      value={{
        profileName,
        age,
        email,
        height,
        weight,
        setProfileDetails,  // Add this function to the context
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
