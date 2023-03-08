import React from "react";
import { Button } from "@mantine/core";
import "./MainPage.css";
import { Select } from '@mantine/core'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { ApiContext } from "../../context/context";
import { data, diffData, numberOfQuestions } from './Data';

const MainPage = () => {
  const navigate = useNavigate();
  const { setData  } = useContext(ApiContext);
  const [questions, setQuestions] = useState([]);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("medium");
  const [limit, setLimit] = useState('10');
  

  // FETCHING API WITH AXIOS ARROW FUNCTION
  const getApi = () => {
    axios.get(`https://the-trivia-api.com/api/questions?categories=${category}&difficulty=${difficulty}&limit=${limit}`).then((response) => {
      setQuestions(response.data);
    });
  };
  localStorage.setItem('data', JSON.stringify(questions))
  

  //RANDOMIZE ORDER OF ANSWERS
  const shuffle = () => {
    let newArr = questions.map((el) => {
      return [...el.incorrectAnswers.concat(el.correctAnswer).sort((a,b) => 0.5 - Math.random())]
    })
    return newArr;
  }

  useEffect(() => {
    localStorage.setItem('answers', JSON.stringify(shuffle()))
  },[getApi])



  useEffect(() => {
    getApi();
    shuffle();
    localStorage.setItem('slice', 0);
    localStorage.setItem('incrementer', 1);
  }, [category, difficulty, limit
  ]);

  return (
    <div className="main-page">
      <div className="button">
        <Button
          variant="gradient"
          gradient={{ from: "orange", to: "red" }}
          size="xl"
          onClick={() => {
            navigate(`/quiz`);
          }}
        >
          Start button
        </Button>
      </div>
      <div className="line"></div>
      <div className="option-section">
        <Select
          data={data}
          label="Choose the categories"
          placeholder="Categories"
          value={category}
          onChange={setCategory}
        />
        <Select data={diffData} label="Choose the difficulty" placeholder="Difficulty" value={difficulty}
        onChange={setDifficulty}/>
        <Select
          data={numberOfQuestions}
          label="Choose the number of questions"
          placeholder="Difficulty"
          onChange={setLimit}
          value={limit}
        />
      </div>
    </div>
  );
}

export default MainPage;
