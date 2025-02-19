import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import { QuizItem } from "./QuizItem";

export const Quiz = () => {
  // states for this component
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const { userId } = useContext(AuthContext);
  const navigate = useNavigate();
  const [allQuestionAttempted, setAllQuestionsAttempted] = useState(false);


  // affects to the states and functionalitites
  useEffect(() => {
    axios
      .get("https://mulberry-quilled-thursday.glitch.me/api/questions")
      .then((res) => setQuestions(res.data.questions))
      .catch((err) => console.log(err.message));
  }, []);

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://mulberry-quilled-thursday.glitch.me/api/submit", {
        userId,
        answers,
      })
      .then((res) => alert(res.data.message))
      .catch((err) => alert(err.message));

    navigate(`/result/${userId}`);
  };

  const handleQuizInput = (e) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
    console.log(name, value);
  };

  // Ui render
  return (
    <form onSubmit={handleQuizSubmit} className="quiz">
      {questions.length &&
        questions.map((question) => {
          // console.log(question)
          return (
            <QuizItem
              question={question}
              key={question.id}
              handleQuizInput={handleQuizInput}
            />
          );
        })}
      <input type="submit" value="Submit answers" />
    </form>
  );
};
