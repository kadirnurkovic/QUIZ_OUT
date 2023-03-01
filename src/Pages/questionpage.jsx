import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'

function QuestionPage() {
  
  const { state } = useLocation();
  console.log(state)

  return (
    <div>
      {state.quest?.slice(0, 1).map((el) => (
        <div key={el.id}>
          <h1>{el.question}</h1>
          <div>
            <div>
              {el.incorrectAnswers
                .concat(el.correctAnswer)
                .sort((a, b) => Math.round(0 - Math.random()))
                .map((element, id) => (
                  <div
                    key={id}
                    style={{
                      color: element === el.correctAnswer ? "red" : "black",
                    }}
                  >
                    {element}
                  </div>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuestionPage;
