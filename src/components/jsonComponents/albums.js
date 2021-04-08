import React from "react";
import {useEffect, useState} from "react";

export default function Albums() {
    const [albums, setAlbums] = useState([]);
    const fetchData = async () => {
        const responce = await fetch('https://jsonplaceholder.typicode.com/albums');
        const json = await responce.json();
        setAlbums(json);
    };
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="albums content">
            {albums.map(album => (
                <div className="album"
                     key={album.id}
                >
                    <h3>{album.title}</h3>
                    <hr/>
                </div>
            ))}
        </div>
    )
}