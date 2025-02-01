import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

export const Navbar = () => {
   // states for this component
  const { login, logoutFunc } = useContext(AuthContext);

  // affects to the states and functionalitites
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
