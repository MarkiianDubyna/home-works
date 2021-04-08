import React from "react";
import {useEffect, useState} from "react";

export default function Users() {
    const [users, setUsers] = useState([]);
    const fetchData = async () => {
        const responce = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await responce.json();
        setUsers(json);
    };
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="users content">
            {users.map(user => (
                <div className="user"
                     key={user.id}
                >
                    <h3>{user.name}</h3>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                    <hr/>
                </div>
            ))}
        </div>
    )
}