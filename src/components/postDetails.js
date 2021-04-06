import React, {useState, useEffect} from "react";
import './content.css'
import {useParams} from "react-router-dom";
export default function PostDetails (props) {
    const [post, setPost] = useState([]);
    const {id} = useParams();
    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const json = await response.json();
        setPost(json);
    }
    useEffect(() => {
        fetchData()
    }, []);
    return (
        <div className="postDetails content">
            {post && (
                <>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </>
            )}
        </div>
    )
}
// Link, BrowserRouter as Router, Route,