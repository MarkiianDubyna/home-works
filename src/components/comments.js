import React, {useState, useEffect} from "react";
import './content.css'
import {Link} from "react-router-dom";
export default function Comments () {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const json = await response.json();
        setData(json);
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="comments">
            {data.map(el => (
                <div
                    className="content"
                    key={el.id}
                >

                    <Link to={`/comments/${el.id}`}>
                        <h3>Name - {el.name}</h3>
                    </Link>
                    <p>Email - {el.email}</p>
                    <p>{el.body}</p>
                </div>
            ))}
        </div>
    )
}