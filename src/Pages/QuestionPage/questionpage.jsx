import React from "react";
import { useState } from "react";
import "./questionpage.css";
import { useLocation, useNavigate } from "react-router-dom";

const QuestionPage = () => {
  const [newData, setNewData] = useState(
    JSON.parse(localStorage.getItem("data"))
  );
  const [questionCounter, setQuestionCounter] = useState(
    +localStorage.getItem("incrementer")
  );
  const [currentQuestion, setCurrentQuestion] = useState(
    +localStorage.getItem("slice")
  );
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  //ONCLICK HANDLER FOR NEXT QUESTION
  const handleNextQuestion = () => {
    setIsActive(true);
    setTimeout(() => {
      const nextQuestionIncrementer = currentQuestion + 1;
      setCurrentQuestion(nextQuestionIncrementer);
      setQuestionCounter(questionCounter + 1);
      setIsActive(true);
      if (+localStorage.getItem("incrementer") >= newData.length) {
        navigate("/summary");
        setQuestionCounter(questionCounter + 1);
      }
      setIsActive(false);
    }, 1000);
  };
  //QUESTION INDEX AND QUESTION INCREMENTER
  localStorage.setItem("slice", currentQuestion);
  localStorage.setItem("incrementer", questionCounter);
  let answers = JSON.parse(localStorage.getItem("answers"));

  return (
    <div className="main-div">
      <div className="container-container">
        <h1 className="question-div">
          {newData[localStorage.getItem("slice")].question}
        </h1>
        <div className="line"></div>
        <div className="answers-container">
          {answers[+localStorage.getItem("slice")].map((element, id) => (
            <div
              key={id}
              className="four-answers"
              style={
                isActive && element === newData[+localStorage.getItem("slice")].correctAnswer ? {boxShadow: "0 0 10px 5px rgb(0, 255, 0"} : !isActive ? {} : {boxShadow: "0 0 10px 5px rgb(255, 50, 50)"}
              }
              onClick={() => {
                handleNextQuestion();
              }}
            >
              {element}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
