import React from "react";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import "./questionpage.css";
import { ApiContext } from "../../context/context";
import { Button } from "@mantine/core"

const QuestionPage = () => {
  const { counterTrueAnswer, setCounterTrueAnswer, setPoints, points } = useContext(ApiContext)
  const [timer, setTimer] = useState(60);
  const [questionCounter, setQuestionCounter] = useState(
    +localStorage.getItem("incrementer")
  );
  const [currentQuestion, setCurrentQuestion] = useState(
    +localStorage.getItem("slice")
  );
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const newData = JSON.parse(localStorage.getItem("data"));

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

  const scoreHandler = (el) => {
    setTimeout(() => {
      if(el === newData[+localStorage.getItem("slice")].correctAnswer){
        setPoints(points + 750);
        setCounterTrueAnswer(counterTrueAnswer + 1);
      }else{
        setPoints(points - 250);
      }
    }, 1000)
  }

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
  console.log(points)
  return (
    <div className="main-div">
      <div className="button-container">
      <Button
      className="back-button"
          variant="gradient"
          radius="xl"
          compact
          gradient={{ from: "orange", to: "orange" }}
          size="xl"
          onClick={() => {
            navigate(`/`);
          }}
        >
          <span className="button-input">&#60;</span>
        </Button>
        <div className="score-container">Score : <div style={ points > 0 ? {color: 'green'} : points === 0 ? {color: 'white'} : {color: 'red'} }>{points}</div></div>
      </div>
      
      <div className="main-container">
        <div style={{color: 'white'}}>{timer}</div>
        <h2 className="question-counter">{localStorage.getItem("incrementer")}/{newData.length}</h2>
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
                isActive && element === newData[+localStorage.getItem("slice")].correctAnswer ? {boxShadow: "0 0 10px 5px rgb(0, 255, 0), 0 0 10px 5px rgb(0,255,0) inset",
              border: "2px solid white"} : !isActive ? {} : {boxShadow: "0 0 10px 5px rgb(255, 50, 50) inset"}
              }
              onClick={() => {
                handleNextQuestion();
                scoreHandler(element);
                  handleNextQuestion();
              }}
            >
              {element}
            </div>
          ))}
          <div className="skip-button"
          onClick={() => {
            handleNextQuestion();
          }}>SKIP</div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
