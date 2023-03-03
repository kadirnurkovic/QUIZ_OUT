import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./questionpage.css";
import { useLocation, useNavigate } from 'react-router-dom';

function QuestionPage() {

  const [questionCounter, setQuestionCounter] = useState(1);
  const [nextQuestion, setNextQuestion] = useState(0);
  const [activeClass, setActiveClass] = useState(false);
  const [color, setColor] = useState({
    border: 'orange 1px solid',
    backgroundColor: 'orange'
  });

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

  const answers = state.quest[nextQuestion].incorrectAnswers.concat(state.quest[nextQuestion].correctAnswer);
  console.log(answers);

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
                <div key={el.id} className="options">{el === state.quest[nextQuestion] && (answers
                  .sort(() => Math.round(0 - Math.random()))
                  .map((element, id) => (
                    <div
                      key={id}
                      className={activeClass ? 'active' : 'four-answers'}
                      style={element === el.correctAnswer ? color : {backgroundColor: 'orange' , border: 'orange 1px solid'}}
                      onClick={() => {
                        handleNextQuestion()
                        if(element === el.correctAnswer){
                          setColor({backgroundColor: 'green'})
                        }else{
                          setColor({backgroundColor: 'red'})
                        }
                      }}
                    >
                      {}
                      {element}
                    </div>
              )))}</div>))}
                
          </div>
        </div>
      
    </div>
  );
}

export default QuestionPage;
