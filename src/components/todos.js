import React, {useState, useEffect} from "react";
import './content.css'
import {Link} from "react-router-dom";
export default function Todos () {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const json = await response.json();
        setData(json);
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="todos">
            {data.map(el => (
                <div
                    className="content"
                    key={el.id}
                >
                    <Link to={`/todos/${el.id}`}>
                        <h3>Title - {el.title}</h3>
                    </Link>
                    <p>Status - {el.completed.toString()}</p>
                </div>
            ))}
        </div>
    )
}