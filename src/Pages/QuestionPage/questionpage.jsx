import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import "./questionpage.css";
import { useLocation, useNavigate } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import { ApiContext } from '../../context/context';

const QuestionPage = () => {
  
  const [timer, setTimer] = useState(60);
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

  const handleNextQuestion = () => {
    setIsActive(true)
    const nextQuestionIncrementer = currentQuestion + 1;
    setCurrentQuestion(nextQuestionIncrementer);
    setQuestionCounter(questionCounter + 1);
    setIsActive(false)
    if (+localStorage.getItem("incrementer") >= newData.length) {
      navigate("/summary");
      setQuestionCounter(questionCounter + 1);
    }
  
  };

  console.log(isActive)
  // Timer function
    setTimeout(() => {
      setTimer(timer - 1)
    }, 1000);

    if(timer === 0){
      navigate('/summary')
    }

  localStorage.setItem("slice", currentQuestion);
  localStorage.setItem("incrementer", questionCounter);

  let answers = JSON.parse(localStorage.getItem('answers'));
 
  useEffect(() => {
     if(newData.length === 10){
      setTimer(30);
     }else if(newData.length === 30){
      setTimer(90)
     }
  },[])

  return (
    <div className="main-div">
      <div className="container-container">
        <div style={{color: 'white'}}>{timer}</div>
        <h2 className="question-counter">{localStorage.getItem("incrementer")}/{newData.length}</h2>
        <h1 className="question-div">
          {newData[localStorage.getItem("slice")].question}
        </h1>
        <div className="line"></div>
        <div className="answers-container">
          {answers[+(localStorage.getItem('slice'))].map((element, id) => (
            <div
              key={id}
              className="four-answers"
              style={
                isActive && element ===
                  newData[+localStorage.getItem("slice")].correctAnswer ?
                   { boxShadow: "0 0 10px 3px rgb(21, 255, 0)" } : !isActive ? {} : {boxShadow: "0 0 10px 3px rgb(189, 11, 11)"}
              }
              onClick={() => {
                clearTimeout();
                setIsActive(true)
                setTimeout(() => {
                  handleNextQuestion();
                  setIsActive(false);
                }, 1000);
              }}
            >
              {element}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuestionPage;
