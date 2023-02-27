import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function QuestionPage() {
<<<<<<< HEAD
    const [questions, setQuestions] = useState([])
    const getApi = () => {
        axios.get('https://the-trivia-api.com/api/questions')
        .then((response) => {
            setQuestions(response.data.slice(0,1))
        })
    }
    useEffect(() => {
        getApi()
    },[])

    const shuffledAnswers = questions.map((element) => {
        return {
            answer: element.incorrectAnswers[0],
            correct: false
        }
    })
    console.log(shuffledAnswers)
    
    return (
        <div>
            {questions.map((el) => (
                <div>
                    <h1>{el.question}</h1>
                </div>
=======
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
>>>>>>> 84aaef087e30a8913df3c4107f81ad4afaf022ca
            ))}
</div>
          </div>
        </div>
      ))}
      
    </div>
  );
}

export default QuestionPage;
