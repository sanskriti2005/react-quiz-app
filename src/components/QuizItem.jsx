import React, { useState } from "react";

export const QuizItem = ({ question, handleQuizInput }) => {
  const [showAns, setShowAns] = useState(false);
  const [correctOrNot, setCorrectOrNot] = useState(false);
  const [allQ, setAllQ] = useState([]);

  const handleShowAns = (e) => {
    e.preventDefault()
    setShowAns(!showAns);
  };
  
  return (
    <form key={question.id} id={question.id} className="quiz-card">
      <p>{question.question}</p>
      <div>
        <div>
          <input
            type="radio"
            name={question.id}
            value={question.options[0]}
            onChange={handleQuizInput}
          />{" "}
          <label>{question.options[0]}</label>{" "}
        </div>
        <div>
          <input
            type="radio"
            name={question.id}
            value={question.options[1]}
            onChange={handleQuizInput}
          />
          <label>{question.options[1]}</label>{" "}
        </div>
        <div>
          <input
            type="radio"
            name={question.id}
            value={question.options[2]}
            onChange={handleQuizInput}
          />
          <label>{question.options[2]}</label>{" "}
        </div>
        <div>
          <input
            type="radio"
            name={question.id}
            value={question.options[3]}
            onChange={handleQuizInput}
          />{" "}
          <label>{question.options[3]}</label>
        </div>
        <button type="submit" onClick={(e) => handleShowAns(e)}>
          Show Answers
        </button>
      </div>
    </form>
  );
};
