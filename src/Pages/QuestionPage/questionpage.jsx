import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./questionpage.css";
import { useLocation, useNavigate } from "react-router-dom";
import MainPage from "../MainPage/MainPage";

function QuestionPage() {
  const [newData, setNewData] = useState(
    JSON.parse(localStorage.getItem("data"))
  );
  const [questionCounter, setQuestionCounter] = useState(
    +localStorage.getItem("incrementer")
  );
  const [currentQuestion, setCurrentQuestion] = useState(
    +localStorage.getItem("slice")
  );
  const [color, setColor] = useState({
    border: "orange 1px solid",
    backgroundColor: "orange",
  });

  const navigate = useNavigate();

  const handleNextQuestion = () => {
    const nextQuestionIncrementer = currentQuestion + 1;
    setCurrentQuestion(nextQuestionIncrementer);
    setQuestionCounter(questionCounter + 1);

    if (+localStorage.getItem("incrementer") >= newData.length) {
      navigate("/summary");
    }
  };
  localStorage.setItem("slice", currentQuestion);
  localStorage.setItem("incrementer", questionCounter);

  const answers = newData[+(localStorage.getItem("slice"))].incorrectAnswers
    .concat(newData[+(localStorage.getItem("slice"))].correctAnswer)
    .sort((a, b) => 0.5 - Math.random());

  localStorage.setItem("answers", JSON.stringify(answers));
  const answersJSON = JSON.parse(localStorage.getItem("answers"));
  console.log(answersJSON);

  return (
    <div className="main-div">
      <div className="container-container">
        <h1 className="question-div">
          {newData[localStorage.getItem("slice")].question}
        </h1>
        <div className="line"></div>
        <div className="answers-container">
          {answersJSON.map((element, id) => (
            <div
              key={id}
              className="four-answers"
              onClick={() => {
                setTimeout(() => {
                  handleNextQuestion();
                }, 1000)
              }}
            >
              {console.log(element)}
              {element}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuestionPage;
