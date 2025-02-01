import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

export const Navbar = () => {
  const { login, logoutFunc } = useContext(AuthContext);
  return (
    <nav>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      {login ? (
        <button onClick={logoutFunc}>Logout</button>
      ) : (
        <NavLink to="/login" className="nav-link">
          Login
        </NavLink>
      )}

      <NavLink to="/quiz" className="nav-link">
        Quiz
      </NavLink>
      <NavLink to="/result" className="nav-link">
        Result
      </NavLink>
    </nav>
  );
};
