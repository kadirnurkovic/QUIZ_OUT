import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./questionpage.css"
import { useLocation, useNavigate } from 'react-router-dom'

function QuestionPage() {
  const [sliceFirst, setSliceFirst] = useState(0)
  const [sliceSecond, setSliceSecond] = useState(1)
  const [questionCounter, setQuestionCounter] = useState(1)

  const navigate = useNavigate()

  const { state } = useLocation();
  console.log(state.quest)

  const onClickHandler = () => {
    setSliceFirst(sliceFirst+1)
    setSliceSecond(sliceSecond+1)
    setQuestionCounter(questionCounter+1)
    if (questionCounter >= state.quest.length) {
      navigate("/summary")
    }
  }

  return (
    <div className="main-div">
      {state.quest?.slice(sliceFirst, sliceSecond).map((el) => (
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
