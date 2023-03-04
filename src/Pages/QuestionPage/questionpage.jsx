import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./questionpage.css";
import { useLocation, useNavigate } from 'react-router-dom';
import MainPage from "../MainPage/MainPage";

function QuestionPage() {

  const [newData, setNewData] = useState(JSON.parse(localStorage.getItem('data')));
  const [questionCounter, setQuestionCounter] = useState(+(localStorage.getItem('incrementer')));
  const [currentQuestion, setCurrentQuestion] = useState(localStorage.getItem('slice') ? +(localStorage.getItem('slice')) : 0);
  const [activeClass, setActiveClass] = useState(false);
  const [storage, setStorage] = useState()
  const [color, setColor] = useState({
    border: 'orange 1px solid',
    backgroundColor: 'orange'
  });

  const navigate = useNavigate();

  const handleNextQuestion = () => {
    const nextQuestionIncrementer = currentQuestion + 1;
    setCurrentQuestion(nextQuestionIncrementer);
    setQuestionCounter(questionCounter+1);
    
    if (+(localStorage.getItem('incrementer')) > newData.length) {
      navigate("/summary")
    }

  }
  

  const answers = newData[localStorage.getItem('slice')].incorrectAnswers.concat(newData[localStorage.getItem('slice')].correctAnswer).sort((a,b)=> 0.5 - Math.random());
  console.log(answers);


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
                      className='four-answers'
                      
                      onClick={() => {
                        localStorage.setItem('incrementer', questionCounter)
                        localStorage.setItem('slice', currentQuestion)
                        handleNextQuestion()
                        
                      }}
                    >
                      {console.log(localStorage.getItem('slice') + currentQuestion, Number(localStorage.getItem('slice')) + currentQuestion)}
                      {console.log(Number(localStorage.getItem('slice')), currentQuestion)}
                      {element}
                    </div>
              )))}</div>))}
                
          </div>
        </div>
      
    </div>
  );
}

export default QuestionPage;
