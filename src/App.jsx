import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Home } from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";
import { Quiz } from "./components/Quiz";
import { Result } from "./components/Result";
import { ResultItem } from "./components/ResultItem";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/result" element={<ResultItem/>}/>
        <Route path="/result/:userId" element={<Result/>}/>
      </Routes>
    </>
  );
}

export default App;
