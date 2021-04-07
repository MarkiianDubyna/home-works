import React, {useState} from "react";
export default function TodoContextProvider ({children}) {
    const [todos, setTodos] = useState([]);

    return (
        <TodoContext.Provider value={{
            todos,
        }}>
            {children}
        </TodoContext.Provider>
    )
}