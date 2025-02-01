import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Login } from "./Login";

export const Home = () => {
  return (
    <div>
      <div>
        <h1>🎉Welcome to the quiz App</h1>
        <p>
          Test you knowledge and challenge yourself with a quiz. Please <Link to="/login">Login</Link> to get started.
        </p>
      </div>
      <form></form>
    </div>
  );
};
