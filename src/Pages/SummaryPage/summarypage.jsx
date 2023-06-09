import React, { useEffect, useContext } from "react";
import "./summarypage.css";
import { ApiContext } from "../../context/context"
import { Button } from "@mantine/core";
import { useNavigate, useLocation } from "react-router-dom";



function SummaryPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { counterTrueAnswer, limit, points, difficulty } = useContext(ApiContext)
  useEffect(() => {
    localStorage.setItem("slice", 0);
    localStorage.setItem("incrementer", 1);
  }, []);

  const onBackButton = () => {
    navigate('/')
  }

  useEffect(() => {
    const handleBackNavigation = () => {
      if (location.state?.from === 'summary') {
        navigate('/');
      }
    };

    window.addEventListener('popstate', handleBackNavigation);

    return () => {
      window.removeEventListener('popstate', handleBackNavigation);
    };
  }, [location.state, navigate]);

  return (
    <div className="summary-div">
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
      <Button
          variant="gradient"
          gradient={{ from: "orange", to: "red" }}
          size="xl"
          onClick={() => {
            navigate(`/`);
          }}
        >Back home</Button>
    </div>
  );
}

export default SummaryPage;
