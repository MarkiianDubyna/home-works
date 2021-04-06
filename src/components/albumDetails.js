import React, {useState, useEffect} from "react";
import './content.css'
import {useParams} from "react-router-dom";
export default function AlbumDetails (props) {
    const [album, setAlbum] = useState([]);
    const {id} = useParams();
    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`);
        const json = await response.json();
        setAlbum(json);
    }
    useEffect(() => {
        fetchData()
    }, []);
    return (
        <div className="albumDetails content">
            {album && (<> <h3>Title - {album.title}</h3> </>)}
        </div>
    )
}