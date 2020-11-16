import React, { createContext, useState } from 'react'

export const ToDoContext = createContext();

const ToDoContextProvider = (props) => {
    const [toDos, setToDos] = useState([]);
    const fetchTodos = async () => {
        const apiCall = await fetch('https://justinevm.ddns.net/get-all-todos');
        const apiCallResolved = await apiCall.json();
        setToDos(apiCallResolved.result);
    }
    return(
        <ToDoContext.Provider value={{toDos, setToDos, fetchTodos}}>
            {props.children}    
        </ToDoContext.Provider>
    )
}

export default ToDoContextProvider;