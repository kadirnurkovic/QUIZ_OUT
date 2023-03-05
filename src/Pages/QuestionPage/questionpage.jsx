import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./questionpage.css";
import { useLocation, useNavigate } from 'react-router-dom';
import MainPage from "../MainPage/MainPage";

function QuestionPage() {

  const [newData, setNewData] = useState(JSON.parse(localStorage.getItem('data')));
  const [questionCounter, setQuestionCounter] = useState(+(localStorage.getItem('incrementer')));
  const [currentQuestion, setCurrentQuestion] = useState(+(localStorage.getItem('slice')));
  const [isActive, setIsActive] = useState(false)

  const navigate = useNavigate();

  const handleNextQuestion = () => {
    const nextQuestionIncrementer = currentQuestion + 1;
    setCurrentQuestion(nextQuestionIncrementer);
    setQuestionCounter(questionCounter+1);
    if (+(localStorage.getItem('incrementer')) >= newData.length) {
      navigate("/summary")
    }
  }

  localStorage.setItem('slice', currentQuestion)
  localStorage.setItem('incrementer', questionCounter)

  

  const answers = newData[localStorage.getItem('slice')].incorrectAnswers.concat(newData[localStorage.getItem('slice')].correctAnswer)
  


  return (
    <div className="main-div">
      
        <div
        className="container-container">
          <h1 className="question-div">{newData[localStorage.getItem('slice')].question}</h1>
          <div className="line"></div>
            <div className="answers-container">
              {newData.map((el) => (
                <div key={el.id} className="options">{el === newData[localStorage.getItem('slice')] && (answers
                  .map((element, id) => (
                    <div
                      key={id}
                      className={isActive ? "four-answersCorrect" : "four-answers"}
                      style={element === el.correctAnswer && isActive ? {boxShadow: "0 0 10px 3px rgb(21, 255, 0)"} : {boxShadow: "red"} }
                      onClick={() => {
                        setIsActive(true);
                        setTimeout(() => {
                          handleNextQuestion()
                          setIsActive(false);
                        },1000)
                      }}
                    >
                      {element}
                    </div>
              )).sort((a,b)=> 0.5 - Math.random()))}</div>))}
                
          </div>
        </div>
      
    </div>
  );
}

export default QuestionPage;
