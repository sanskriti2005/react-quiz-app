import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContextProvider";

export const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const {userId} = useContext(AuthContext);

  useEffect(() => {
    axios
      .get("https://mulberry-quilled-thursday.glitch.me/api/questions")
      .then((res) => setQuestions(res.data.questions))
      .catch((err) => console.log(err.message));
  }, []);


  const handleQuizSubmit = (e) => {
    e.preventDefault();
    axios.post('https://mulberry-quilled-thursday.glitch.me/api/submit', {userId, answers})
    .then(res => console.log(res))
    .catch(err => alert(err.message))
  }

  const handleQuizInput = (e) => {
    const {name, value} = e.target
    setAnswers({...answers, [name]:value})
    console.log(name, value);
  }
  return (
    <form onSubmit={handleQuizSubmit}>
      {questions.length &&
        questions.map((question) => {
          return (
            <div key={question.id}>
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
              </div>
            </div>
          );
        })}
        <input type="submit" value="Submit answers" />
    </form>
  );
};
