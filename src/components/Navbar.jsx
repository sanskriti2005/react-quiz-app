import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/login" className="nav-link">
        Login
      </NavLink>
      <NavLink to="/quiz" className="nav-link">
        Quiz
      </NavLink>
      <NavLink to="/result" className="nav-link">
        Result
      </NavLink>
    </nav>
  );
};
