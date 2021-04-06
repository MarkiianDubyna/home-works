import React, {useState, useEffect} from "react";
import './content.css'
import {useParams} from "react-router-dom";
export default function UserDetails (props) {
    const [user, setUser] = useState([]);
    const {id} = useParams();
    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const json = await response.json();
        setUser(json);
    }
    useEffect(() => {
        fetchData()
    }, []);
    return (
        <div className="UserDetails content">
            {user && (
                <>
                    <h3>Name - {user.name}</h3>
                    <p>User name - {user.username}</p>
                    <p>Email - {user.username}</p>
                </>
            )}
        </div>
    )
}