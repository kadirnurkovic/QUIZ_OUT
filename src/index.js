import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import QuestionPage from "./Pages/QuestionPage/questionpage";
import SummaryPage from "./Pages/SummaryPage/summarypage"
import { ApiContextProvider } from"./context/context"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ApiContextProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/quiz" element={<QuestionPage />} />
          <Route path="/summary" element={<SummaryPage />} />
        </Routes>
      </ApiContextProvider>
    </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
