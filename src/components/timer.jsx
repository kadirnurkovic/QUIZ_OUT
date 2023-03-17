import React from "react";
import { Progress } from "@mantine/core";
import { useState, useEffect, useContext } from "react";
import { ApiContext } from "../context/context";
import { useNavigate } from "react-router-dom";

const CountdownTimer = () => {
    const navigate = useNavigate()
    const [progress, setProgress] = useState(60)
  const { limit } = useContext(ApiContext);
  const [timer, setTimer] = useState(
    +limit === 10 ? 60 : +limit === 20 ? 90 : +limit === 30 ? 120 : 60
  );

  useEffect(() => {
    if (timer === 60) {
        setProgress(60)
    } else if (timer === 90) {
        setProgress(90)
    } else if (timer === 120) {
        setProgress(120)
    }
  },[])

  useEffect(() => {
    const time = setTimeout(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => clearTimeout(time);
  }, [timer]);

  if (timer === 0) {
    navigate("/summary");
  }

  return (
    <div style={{display: "flex", 
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"}}>
      <h1 style={{ color: "white" }}>{timer}</h1>
      <Progress
        style={{ width: "200px", height: "5px" }}
        value={(timer / progress) * 100}
        size={150}
        thickness={10}
        color={"orange"}
      />
    </div>
  );
};

export default CountdownTimer;
