import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';

export default function TodoDetails() {
    const [todo, setTodo] = useState([]);
    const {id} = useParams();
    const fetchData = async () => {
        const responce = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const json = await responce.json();
        setTodo(json);
    };
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="todo content">
            {todo && (
                <>
                    <h3>{todo.title}</h3>
                    <p>{String(todo.completed)}</p>
                </>
            )}
        </div>
    )
}