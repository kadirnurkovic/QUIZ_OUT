import React , {createContext, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
const ApiContext = createContext();

const ApiContextProvider = ({children}) => {
    const [newData, setNewData] = useState(
        JSON.parse(localStorage.getItem("data"))
      );
    const navigate = useNavigate()
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);

    console.log(data);

    const shuffled = () => {
        const arrValues = JSON.parse(localStorage.getItem('data'));
        let newArr = []
        for(let i = 0; i < arrValues.length; i++){
            newArr = [...arrValues[i].incorrectAnswers, arrValues[i].correctAnswer]
        }
        return newArr;
    }
    // const answ = data[0].incorrectAnswers.concat(data[0].correctAnswer).sort((a, b) => 0.5 - Math.random())
    console.log(shuffled())
    const values = {
        data,
        setData,
        shuffled
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