import React, {useState, useEffect} from "react";
import './content.css'
import {useParams} from "react-router-dom";
export default function TodoDetails () {

    const [todo, setTodo] = useState([]);
    const {id} = useParams();
    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const json = await response.json();
        setTodo(json);
    }
    useEffect(() => {
        fetchData();
    }, [id]);
    return (
        <div className="todoDetails content">
                    <h3>Title - {todo.title}</h3>
                    <p>Status - {String(todo.completed)}</p>
                    {/*{console.log(todo.completed.toString())}*/}
        </div>
    )
}
