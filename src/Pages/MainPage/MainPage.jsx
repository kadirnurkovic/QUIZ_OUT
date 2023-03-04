import React from "react";
import { Button } from "@mantine/core";
import './MainPage.css';
import MultiSelect from './Categories'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { useState, useEffect } from 'react'
import { useContext } from "react";
import { ApiContext } from "../../context/context";

function MainPage() {
  const {data, setData} = useContext(ApiContext)
  const navigate = useNavigate();
  const getApi = () => {
    axios.get("https://the-trivia-api.com/api/questions?limit=5&difficulty=hard").then((response) => {
      localStorage.setItem("data", JSON.stringify(response.data)
      );
    })
  };

  useEffect(() => {
    getApi()
  },[data])

  const onClickNavigate = () => {
    navigate('/quiz')
  }

  return (
    <div className="main-page">
      <div className="button" onClick={() => {
        onClickNavigate()
      }}>
        <Button
          variant="gradient"
          gradient={{ from: "orange", to: "red" }}
          size="xl"
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
