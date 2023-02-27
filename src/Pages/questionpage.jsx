import React from "react";
import axios from "axios";
import { useState, useEffect, useRef } from "react";

function QuestionPage() {
  const [questions, setQuestions] = useState([]);
  const sliceFirst = React.useRef(0)
  const sliceSecond = React.useRef(1)
  const getApi = () => {
    axios.get("https://the-trivia-api.com/api/questions?limit=10").then((response) => {
      setQuestions(response.data);
    });
  };

  console.log(questions)
  
  useEffect(() => {
    getApi();
  }, []);
  const onClickHandler = () => {
    sliceFirst.current = sliceSecond.current
    sliceSecond.current = sliceSecond.current+1
    console.log(sliceFirst, sliceSecond)
  }

  return (
    <div>
      {questions?.slice(sliceFirst.current, sliceSecond.current).map((el) => (
        <div key={el.id}>
          <h1>{el.question}</h1>
          <div>
            <div>{el.incorrectAnswers.concat(el.correctAnswer).sort((a,b)=> Math.round(0 - Math.random())).map((element, id) => (
              <button onClick={() => {onClickHandler()}} key={id} style={{color: element === el.correctAnswer ? "red" : "black"}}>{element}</button>
            ))}
</div>
          </div>
        </div>
      ))}
      
    </div>
  );
}

export default QuestionPage;
