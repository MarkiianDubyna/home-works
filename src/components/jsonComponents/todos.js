import React from "react";
import {useEffect, useState} from "react";

export default function Todos() {
    const [todos, setTodos] = useState([]);
    const fetchData = async () => {
        const responce = await fetch('https://jsonplaceholder.typicode.com/todos');
        const json = await responce.json();
        setTodos(json);
    };
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="todos content">
            {todos.map(todo => (
                <div className="todo"
                     key={todo.id}
                >
                    <h3>{todo.title}</h3>
                    <p>{String(todo.completed)}</p>
                    <hr/>
                </div>
            ))}
        </div>
    )
}