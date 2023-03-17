import React , {createContext} from 'react'
import { useState } from 'react';
const ApiContext = createContext();

const ApiContextProvider = ({children}) => {
const [data, setData] = useState([]);
const [points, setPoints] = useState(0);
const [questions, setQuestions] = useState([]);
const [difficulty, setDifficulty] = useState(Math.random() > 0.66 ? "easy" : Math.random() > 0.33 ? "medium" : "hard");
const [limit, setLimit] = useState('10');
const [counterTrueAnswer, setCounterTrueAnswer] = useState(0);
const [switcher, setSwitcher] = useState(false);

const values = {
    switcher,
    setSwitcher,
    difficulty,
    setDifficulty,
    points,
    setPoints,
    questions,
    setQuestions,
    limit,
    setLimit,
    counterTrueAnswer,
    setCounterTrueAnswer
}
    return (
        <div>
            <ApiContext.Provider value={values}>
                {children}
            </ApiContext.Provider>
        </div>
    );
};

export { ApiContext, ApiContextProvider};