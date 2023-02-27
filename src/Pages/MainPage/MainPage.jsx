import React from "react";
import { Button } from "@mantine/core";
import './MainPage.css';
import MultiSelect from './Categories'
import { useNavigate } from 'react-router-dom'

function MainPage() {
  const navigate = useNavigate();
  return (
    <div className="main-page">
      <div className="button" onClick={() => {
        navigate(`/quiz`)
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
