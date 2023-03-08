import React, { useEffect } from "react";
import "./summarypage.css";

function SummaryPage() {
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
          <h2 className="score">1859</h2>
        </div>
        <div className="line-divider"></div>
        <div className="element-row">
          <h2 className="elements">Questions</h2>
          <h2 className="score">10</h2>
        </div>
        <div className="line-divider"></div>
        <div className="element-row">
          <h2 className="elements">Difficulty</h2>
          <h2 className="score">HARD</h2>
        </div>
      </div>
    </div>
  );
}

export default SummaryPage;
