import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react'

function QuestionPage() {
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
            ))}
        </div>
    );
}

export default QuestionPage;