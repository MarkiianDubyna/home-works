import React from "react";
import {useEffect, useState} from "react";

export default function Comments() {
    const [comments, setComments] = useState([]);
    const fetchData = async () => {
        const responce = await fetch('https://jsonplaceholder.typicode.com/comments');
        const json = await responce.json();
        setComments(json);
    };
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="comments content">
            {comments.map(comment => (
                <div className="comment"
                     key={comment.id}
                >
                    <h3>{comment.name}</h3>
                    <p>{comment.email}</p>
                    <p>{comment.body}</p>
                    <hr/>
                </div>
            ))}
        </div>
    )
}