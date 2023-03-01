import React from "react";
import { Button } from "@mantine/core";
import "./MainPage.css";
import { Select } from '@mantine/core'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { data, diffData, numberOfQuestions } from './Data';

function MainPage() {

  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("medium");
  const [limit, setLimit] = useState('10');
  const getApi = () => {
    axios.get(`https://the-trivia-api.com/api/questions?categories=${category}&difficulty=${difficulty}&limit=${limit}`).then((response) => {
      setQuestions(response.data);
    });
  };

  useEffect(() => {
    getApi();
  }, [category, difficulty, limit]);

  return (
    <div className="main-page">
      <div className="button">
        <Button
          variant="gradient"
          gradient={{ from: "orange", to: "red" }}
          size="xl"
          onClick={() => {
            navigate(`/quiz`, {
              state: {
                quest: questions,
              },
            });
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
