import React from "react";
import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';

export default function CommentDetails() {
    const [comment, setComment] = useState([]);
    const {id} = useParams();
    const fetchData = async () => {
        const responce = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
        const json = await responce.json();
        setComment(json);
    };
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="comment content">
            {comment && (
                <>
                    <h3>{comment.name}</h3>
                    <p>{comment.email}</p>
                    <p>{comment.body}</p>
                </>
            )}
        </div>
    )
}