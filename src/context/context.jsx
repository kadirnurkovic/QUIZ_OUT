import React , {createContext, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
const ApiContext = createContext();

const ApiContextProvider = ({children}) => {
    const navigate = useNavigate()
    const [data, setData] = useState([]);
 
    const values = {
        data,
        setData
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