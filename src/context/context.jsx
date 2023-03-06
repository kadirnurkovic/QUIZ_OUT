import React , {createContext, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
const ApiContext = createContext();

const ApiContextProvider = ({children}) => {
    const navigate = useNavigate()
    const [data, setData] = useState([]);
    
    const sorted = data.map((el) => {
        let newSort = []
        newSort = el.incorrectAnswers.concat(el.correctAnswer).sort((a,b) => 0.5 - Math.random())
        return newSort
    })    

    const values = {
        data,
        setData,
        sorted
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