import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [login, setLogin] = useState(true);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const tempToken = localStorage.getItem("token");
    if (tempToken) {
      setLogin(true);
      setToken(tempToken);
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
        setToken(res.data.token);
        localStorage.setItem('token', res.data.token)
      });
  };

  const logoutFunc = () => {
    login(false);
    localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{ login, loginFunc, logoutFunc }}>
      {children}
    </AuthContext.Provider>
  );
};
