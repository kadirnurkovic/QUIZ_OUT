import React, { useEffect, useContext } from "react";
import "./summarypage.css";
import { ApiContext } from "../../context/context"
function SummaryPage() {
  const { counterTrueAnswer, limit, points, difficulty } = useContext(ApiContext)
  useEffect(() => {
    localStorage.setItem("slice", 0);
    localStorage.setItem("incrementer", 1);
  }, []);
  return (
    <div className="main-div">
      <h1 className="title">Great Job!</h1>
      <div className="line"></div>
      <div className="all-container">
        <div className="element-row">
          <h2 className="elements">SCORE</h2>
          <h2 className="score">{points}</h2>
        </div>
        <div className="line-divider"></div>
        <div className="element-row">
          <h2 className="elements">Questions</h2>
          <h2 className="score">{limit}</h2>
        </div>
        <div className="line-divider"></div>
        <div className="element-row">
          <h2 className="elements">Difficulty</h2>
          <h2 className="score">{difficulty.toUpperCase()}</h2>
        </div>
        <div className="line-divider"></div>
        <div className="element-row">
          <h2 className="elements">Correct answers</h2>
          <h2 className="score">{counterTrueAnswer}</h2>
        </div>
      </div>
    </div>
  );
}

export default SummaryPage;
