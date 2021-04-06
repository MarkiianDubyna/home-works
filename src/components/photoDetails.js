import React, {useState, useEffect} from "react";
import './content.css'
import {useParams} from "react-router-dom";
export default function PhotoDetails (props) {
    const [photo, setPhoto] = useState([]);
    const {id} = useParams();
    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
        const json = await response.json();
        setPhoto(json);
    }
    useEffect(() => {
        fetchData()
    }, []);
    return (
        <div className="photoDetails content">
            {photo && (
                <>
                    <h3>Title - {photo.title}</h3>
                    <p>{photo.body}</p>
                </>
            )}
        </div>
    )
}