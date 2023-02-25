import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react'

function QuestionPage() {
    const [questions, setQuestions] = useState([])
    const getApi = () => {
        axios.get('https://the-trivia-api.com/api/questions')
        .then((response) => {
            setQuestions(response.data)
        })
    }
    useEffect(() => {
        getApi()
    },[])

    console.log(questions)
    
    return (
        <div>
            {questions?.map((el) => (
                <div>
                    <h1>{el.question}</h1>
                <div><h3>{el.incorrectAnswers}   {el.correctAnswer}</h3></div>
                </div>
            ))}
        </div>
    );
}

export default QuestionPage;