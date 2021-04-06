import React, {useState, useEffect} from "react";
import './content.css'
import {Link} from "react-router-dom";
export default function Users () {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await response.json();
        setData(json);
    };
    useEffect(() => {
        fetchData();
        }, []);
    return (
        <div className="users">
            {data.map(el => (
                <div
                    className="content"
                    key={el.id}
                >
                    <Link to={`/users/${el.id}`}>
                        <h3>Name - {el.name}</h3>
                    </Link>
                    <p>User name - {el.username}</p>
                    <p>Email - {el.email}</p>
                </div>
            ))}
        </div>
    )
}