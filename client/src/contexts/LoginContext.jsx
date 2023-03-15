import React, { createContext, useState } from "react";

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const getUserData = (user) => {
    setUserData(user);
  };
  // Ek single curly bracket k andar sirf ek hi chiz bhej sakte hai ,
  // yedi ek se jayada send krna ho to ya to obj hoga ya array
  return (
    <LoginContext.Provider value={{ userData, getUserData }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
