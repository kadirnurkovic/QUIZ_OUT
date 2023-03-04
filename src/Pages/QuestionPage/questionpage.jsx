import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import "./questionpage.css"
import { useLocation, useNavigate } from 'react-router-dom'
import { ApiContext } from "../../context/context"

function QuestionPage() {

  const [sliceFirst, setSliceFirst] = useState(1)
  const [sliceSecond, setSliceSecond] = useState(2)
  const [questionCounter, setQuestionCounter] = useState(1)
  const [testState, setTestState] = useState(JSON.parse(localStorage.getItem("data")))
  const {data} = useContext(ApiContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    setSliceFirst(sliceFirst+1)
    setSliceSecond(sliceSecond+1)
    localStorage.setItem("sliceOne", JSON.stringify(sliceFirst))
    localStorage.setItem("sliceTwo", JSON.stringify(sliceSecond))
    setQuestionCounter(questionCounter+1)
    if (questionCounter >= testState.length) {
      navigate("/summary")
    }
  }

  useEffect(() => {
    localStorage.setItem("sliceOne", JSON.stringify(0))
    localStorage.setItem("sliceTwo", JSON.stringify(1))
  },[])

  return (
    <div className="main-div">
      {testState.slice(JSON.parse(localStorage.getItem("sliceOne")), JSON.parse(localStorage.getItem("sliceTwo"))).map((el) => (
        <div key={el.id}
        className="container-container">
          <h1 className="question-div">{el.question}</h1>
          <div className="line"></div>
            <div className="answers-container">
              {el.incorrectAnswers
                .concat(el.correctAnswer)
                .sort((a, b) => Math.round(0 - Math.random()))
                .map((element, id) => (
                  <div
                    className="four-answers"
                    key={id}
                    onClick={() => onClickHandler()}
                  >
                    {element}
                  </div>
                ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuestionPage;
