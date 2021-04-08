import React from "react";
import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';

export default function UserDetails() {
    const [user, setUser] = useState([]);
    const {id} = useParams();
    const fetchData = async () => {
        const responce = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const json = await responce.json();
        setUser(json);
    };
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="user content">
            {user && (
                <>
                    <h3>{user.name}</h3>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                </>
            )}
        </div>
    )
}