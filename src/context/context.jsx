import React , {createContext} from 'react'
import { useState } from 'react';
const ApiContext = createContext();

const ApiContextProvider = ({children}) => {
const [data, setData] = useState([])

const values = {
    data
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