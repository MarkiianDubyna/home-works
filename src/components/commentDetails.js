import React, {useState, useEffect} from "react";
import './content.css'
import {useParams} from "react-router-dom";
export default function CommentDetails (props) {
    const [comment, setComment] = useState([]);
    const {id} = useParams();
    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
        const json = await response.json();
        setComment(json);
    }
    useEffect(() => {
        fetchData()
    }, []);
    return (
        <div className="commentDetails content">
            {comment && (
                <>
                    <h3>Name - {comment.name}</h3>
                    <p>Email - {comment.email}</p>
                    <p>{comment.body}</p>
                </>
            )}
        </div>
    )
}