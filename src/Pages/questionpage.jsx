import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function QuestionPage() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const getApi = () => {
    axios.get("https://the-trivia-api.com/api/questions").then((response) => {
      setQuestions(response.data.slice(0,1));
    });
  };
  
  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      {questions?.map((el) => (
        <div key={el.id}>
          <h1>{el.question}</h1>
          <div>
            <div>{el.incorrectAnswers.concat(el.correctAnswer).sort((a,b)=> Math.round(0 - Math.random())).map((element, id) => (
              <div key={id} style={{color: element === el.correctAnswer ? "red" : "black"}}>{element}</div>
            ))}
</div>
          </div>
        </div>
      ))}
      
    </div>
  );
}

export default QuestionPage;
