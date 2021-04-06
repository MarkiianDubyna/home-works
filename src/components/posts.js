import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import './content.css'
export default function Posts () {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await responce.json();
        setData(json);
    };
    useEffect(() => {
        fetchData()
    }, [])
    return (
    <div className="posts">
        {data.map(el => (
            <div
                key={el.id}
                className="content"
            >
                <Link to={`/posts/${el.id}`}>
                    <h3>{el.title}</h3>
                </Link>
                <p>{el.body}</p>
            </div>
        ))}
    </div>
    )
}