import React, { useState } from "react";

export const QuizItem = ({ question, handleQuizInput }) => {
  const [showAns, setShowAns] = useState(false);
  const [correctOrNot, setCorrectOrNot] = useState(false);
  const [allQ, setAllQ] = useState([]);

  const handleShowAns = (id) => {
    setShowAns(!showAns);
    axios
      .get("https://mulberry-quilled-thursday.glitch.me/api/questions")
      .then((res) => setAllQ(res.data.questions))
      .catch((err) => console.log(err.message));

    const questionEle = allQ.find((ele) => ele.id === id);
    if (questionEle.answer === question.answer) {
      setCorrectOrNot(true);
    } else {
      setCorrectOrNot(false);
    }
  };
  
  return (
    <div key={question.id} id={question.id}>
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
        <button type="button" onClick={() => handleShowAns(question.id)}>
          Show Answers
        </button>
      </div>
    </div>
  );
};
