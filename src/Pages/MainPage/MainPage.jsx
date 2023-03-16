import React from "react";
import { Button } from "@mantine/core";
import "./MainPage.css";
import { Select, Switch } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { ApiContext } from "../../context/context";
import { data, diffData, numberOfQuestions } from "./Data";
import Logo from "../../imagus.png";
import RulesComponent from "./Rules/Rules";

const MainPage = () => {
  const navigate = useNavigate();
  const {
    switcher,
    setSwitcher,
    limit,
    setLimit,
    questions,
    setQuestions,
    setPoints,
    difficulty,
    setDifficulty,
    setCounterTrueAnswer,
  } = useContext(ApiContext);
  const [category, setCategory] = useState("");
  // FETCHING API WITH AXIOS ARROW FUNCTION

  const getApi = () => {
    axios
      .get(
        `https://the-trivia-api.com/api/questions?categories=${category}&difficulty=${difficulty}&limit=${limit}`
      )
      .then((response) => {
        setQuestions(response.data);
      });
  };

  localStorage.setItem("data", JSON.stringify(questions));

  //RANDOMIZE ORDER OF ANSWERS
  const shuffle = () => {
    let newArr = questions.map((el) => {
      return [
        ...el.incorrectAnswers
          .concat(el.correctAnswer)
          .sort((a, b) => 0.5 - Math.random()),
      ];
    });
    return newArr;
  };

  const handleSwitch = () => {
    if(switcher === false){
      setSwitcher(true);
    }else{
       setSwitcher(false);
    }
  }

  useEffect(() => {
    localStorage.setItem("answers", JSON.stringify(shuffle()));
  }, [getApi]);

  useEffect(() => {
    setSwitcher(false);
    setPoints(0);
    getApi();
    shuffle();
    localStorage.setItem("slice", 0);
    localStorage.setItem("incrementer", 1);
    setCounterTrueAnswer(0);
  }, [category, difficulty, limit]);

  console.log(switcher)

  return (
    <div className="main-page">
      <RulesComponent />
      <img className="logo" src={Logo}></img>
      <ul class="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="line"></div>
      <div className="button">
        <Button
          variant="gradient"
          gradient={{ from: "orange", to: "orange" }}
          size="xl"
          onClick={() => {
            navigate(`/quiz`);
          }}
        >
          Start Quiz
        </Button>
      <div className="switch">
        <Switch
          label="Timer"
          placeholder="On/Off"
          color= 'orange'
          value={switcher}
          onChange={handleSwitch}
          />
      </div>
      </div>
      <div className="option-section">
        <Select
          data={data}
          label="Select category"
          placeholder="Categories"
          value={category}
          onChange={setCategory}
        />
        <Select
          data={diffData}
          label="Choose difficulty"
          placeholder="Difficulty"
          value={difficulty}
          onChange={setDifficulty}
        />
        <Select
          data={numberOfQuestions}
          label="Select number of questions"
          placeholder="Difficulty"
          onChange={setLimit}
          value={limit}
        />
      </div>
    </div>
  );
};

export default MainPage;
