import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./questionpage.css";
import { useLocation, useNavigate } from 'react-router-dom';

function QuestionPage() {

  const [questionCounter, setQuestionCounter] = useState(1);
  const [nextQuestion, setNextQuestion] = useState(0);
  const [activeClass, setActiveClass] = useState(false);
  
  const navigate = useNavigate();

  const handleNextQuestion = () => {
    const nextQuestionIncrementer = nextQuestion + 1;
    setNextQuestion(nextQuestionIncrementer);
    setQuestionCounter(questionCounter+1);

    if (questionCounter >= state.quest.length) {
      navigate("/summary")
    }
  }

  const { state } = useLocation();
  console.log(state.quest);

  const toggleClassHandler = () => {
    if(activeClass){
      return 'active'
    }else if(!activeClass){
      return 'four-answers'
    }
  };
  
  console.log(state.quest[0])

  const handleActiveClass = () => {
    setActiveClass(true);
  };

  return (
    <div className="main-div">
        <div
        className="container-container">
          <h1 className="question-div">{state.quest[nextQuestion].question}</h1>
          <div className="line"></div>
            <div className="answers-container">
              {state.quest.map((el) => (
                <div key={el.id}>{el === state.quest[nextQuestion] ? (el.incorrectAnswers.concat(el.correctAnswer)
                  .sort(() => Math.round(0 - Math.random()))
                  .map((element, id) => (
                    <div
                      key={id}
                      className={toggleClassHandler()}
                      style={{
                        color: element === el.correctAnswer ? "red" : "black",
                      }}
                      onClick={() => {
                        handleNextQuestion()
                        if(el.correctAnswer === element){
                        handleActiveClass(id)
                        }
                      }}
                    >
                      {console.log(el)}
                      {element}
                    </div>
              ))) : ''}</div>))}
                
          </div>
        </div>
      
    </div>
  );
}

export default QuestionPage;
