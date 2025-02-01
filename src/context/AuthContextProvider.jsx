import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [login, setLogin] = useState(true);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const tempToken = localStorage.getItem('userId');
    if (tempToken) {
      setLogin(true);
      setUserId(tempToken)
    } else {
      setLogin(false);
    }
  }, []);

  const loginFunc = ({ username, password }) => {
    axios
      .post("https://mulberry-quilled-thursday.glitch.me/login", {
        username,
        password,
      })
      .then((res) => {
        setLogin(true);
        localStorage.setItem('userId', res.data.userId)
      });
  };

  const logoutFunc = () => {
    setLogin(false);
    localStorage.removeItem('userId')
  }

  return (
    <AuthContext.Provider value={{ login, loginFunc, logoutFunc, userId }}>
      {children}
    </AuthContext.Provider>
  );
};
