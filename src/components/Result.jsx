import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Result = () => {
  // states for this component
  const { userId } = useParams();
  const [response, setResponse] = useState({});

  // affects to the states and functionalitites
  useEffect(() => {
    axios
      .get(`https://mulberry-quilled-thursday.glitch.me/api/result/${userId}`)
      .then((res) => setResponse(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  // Ui render
  return (
    <div className="result">
      <h1>🎉Yay! Quiz Completed!🎉</h1>
      <p>You answered {response.score} out of {response.totalQuestions} correctly!</p>
    </div>
  );
};
