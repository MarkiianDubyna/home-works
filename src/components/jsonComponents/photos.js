import React from "react";
import {useEffect, useState} from "react";

export default function Photos() {
    const [photos, setPhotos] = useState([]);
    const fetchData = async () => {
        const responce = await fetch('https://jsonplaceholder.typicode.com/photos');
        const json = await responce.json();
        setPhotos(json);
    };
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="photos content">
            {photos.map(photo => (
                <div className="photo"
                     key={photo.id}
                >
                    <h3>{photo.title}</h3>
                    <p>{photo.url.toString()}</p>
                    <hr/>
                </div>
            ))}
        </div>
    )
}