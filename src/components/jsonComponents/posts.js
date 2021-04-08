import React from "react";
import {useEffect, useState} from "react";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const fetchData = async () => {
        const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await responce.json();
        setPosts(json);
    };
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="posts content">
            {posts.map(post => (
                <div className="post"
                     key={post.id}
                >
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <hr/>
                </div>
            ))}
        </div>
    )
}