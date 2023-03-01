import React from "react";
import { Button } from "@mantine/core";
import './MainPage.css';
import MultiSelect from './Categories'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { useState, useEffect } from 'react'

function MainPage() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const getApi = () => {
    axios.get("https://the-trivia-api.com/api/questions").then((response) => {
      setQuestions(response.data);
    });
  };
  console.log(questions)


  return (
    <div className="main-page">
      <div className="button" onClick={() => {
        navigate(`/quiz`, {
          state: {
            quest : questions
          }
        })
      }}>
        <Button
          variant="gradient"
          gradient={{ from: "orange", to: "red" }}
          size="xl"
          onClick={()=> {getApi()}}
        >
          Start button
        </Button>
      </div>
      <div  className="line">  
      </div>
      <MultiSelect/>
    </div>
  );
}

export default MainPage;
