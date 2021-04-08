import React from "react";
import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';

export default function PostDetails() {
    const [post, setPost] = useState([]);
    const {id} = useParams();
    const fetchData = async () => {
        const responce = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const json = await responce.json();
        setPost(json);
    };
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="post content">
            {post && (
                <>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </>
            )}
        </div>
    )
}