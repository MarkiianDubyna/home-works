import React from "react";
import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';

export default function AlbumDetails() {
    const [album, setAlbum] = useState([]);
    const {id} = useParams();
    const fetchData = async () => {
        const responce = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`);
        const json = await responce.json();
        setAlbum(json);
    };
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="album content">
            {album && (
                <h3>{album.title}</h3>
            )}
        </div>
    )
}