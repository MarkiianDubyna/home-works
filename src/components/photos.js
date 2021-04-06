import React, {useState, useEffect} from "react";
import './content.css'
import {Link} from "react-router-dom";
export default function Photos () {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const json = await response.json();
        setData(json);
    };
    useEffect(() => {
        fetchData()
    },[])
    return (
        <div className="photos">
            {data.map(el => (
                <div
                    className="content"
                    key={el.id}
                >
                    <Link to={`/photos/${el.id}`}>
                        <h3>Title - {el.title}</h3>
                    </Link>
                    <p>Url - {el.url.toString()}</p>
                </div>
            ))}
        </div>
    )
}