import React from "react";
import { Button } from "@mantine/core";
import './MainPage.css';
import MultiSelect from './Categories'

function MainPage() {
  return (
    <div className="main-page">
      <div className="button">
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
