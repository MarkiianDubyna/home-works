import React, {useState, useEffect} from "react";
import './content.css'
import {Link} from "react-router-dom";
export default function Albums () {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        const json = await response.json();
        setData(json);
    };
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="albums">
            {data.map(el => (
                <div
                    className="content"
                    key={el.id}
                >
                    <Link to={`/albums/${el.id}`}>
                        <h3>Title - {el.title}</h3>
                    </Link>
                </div>
            ))}
        </div>
    )
}