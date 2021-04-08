import React from "react";
import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';

export default function PhotoDetails() {
    const [photo, setPhoto] = useState([]);
    const {id} = useParams();
    const fetchData = async () => {
        const responce = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
        const json = await responce.json();
        setPhoto(json);
    };
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="photo content">
            {photo && (
                <>
                    <h3>{photo.title}</h3>
                    <p>{String(photo.url)}</p>
                </>
            )}
        </div>
    )
}