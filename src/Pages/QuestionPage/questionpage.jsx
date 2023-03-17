import React from "react";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import "./questionpage.css";
import { ApiContext } from "../../context/context";
import { Button } from "@mantine/core"
import { Progress } from "@mantine/core";
import CountdownTimer from '../../components/timer'

const QuestionPage = () => {
  const { switcher ,limit ,counterTrueAnswer, setCounterTrueAnswer, setPoints, points } = useContext(ApiContext);
  const [showPoints, setShowPoints] = useState('')
  const [isShown, setIsShown] = useState(false);
  const [timer, setTimer] = useState(+limit === 10 ? 30 : +limit === 20 ? 60 : +limit === 30 ? 90 : '');
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
    setIsShown(true);
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
      setIsShown(false);
    }, 1000);
  };

  const pointHandler = (el) => {
    if (el === newData[+localStorage.getItem("slice")].correctAnswer) {
      setShowPoints('+750');
    }else {
      setShowPoints('-250')
    }
  }

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

  // Timer navigate
    if(timer === 0 && switcher === true){
      navigate('/summary')
    }

  localStorage.setItem("slice", currentQuestion);
  localStorage.setItem("incrementer", questionCounter);

  let answers = JSON.parse(localStorage.getItem('answers'));
  const timeoutFunc = () => {
    setTimeout(() => {
      setTimer(timer - 1)
      console.log(timer)
    }, 1000);
  }

  console.log(limit)
  useEffect(() => {
    if(switcher === true){
    timeoutFunc();
    }
  },[timer])

  return (
    <div className="main-div">
      <div className="button-container">
      <Button
      className="back-button"
          variant="gradient"
          radius="xl"
          compact
          gradient={{ from: "orange", to: "orange" }}
          onHover
          size="xl"
          onClick={() => {
            navigate(`/`);
          }}
        >
          <span className="button-input">&#60;</span>
        </Button>
        <div className="score-container">Score : <div className="scoreFadeContainer" style={ points > 0 ? {color: 'green'} : points === 0 ? {color: 'white'} : {color: 'red'} }>{points}
        <div className="fadeOutText" style={!isShown ? {display: "none"} : {display: "inline-block"}}><p
        style={showPoints === '+750' ? {color: 'green'} : {color: 'red'}}>{showPoints}</p></div></div>
        </div>
      </div>
      <CountdownTimer/>
      <div className="main-container">
      <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      </div>
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
              } : !isActive ? {} : {boxShadow: "0 0 10px 5px rgb(255, 50, 50) inset"}
              }
              onClick={() => {
                handleNextQuestion();
                scoreHandler(element);
                pointHandler(element);
              }}
            >
              {element}
            </div>
          ))}
          <div className="skip-button"
          onClick={() => {
            handleNextQuestion();
            setShowPoints("skipped")
          }}>SKIP</div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
