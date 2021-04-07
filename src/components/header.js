import React from "react";
import {Link} from 'react-router-dom';
export default function Header () {
    return (
        <header className='header'>
            <Link to="/addedList">Todo list</Link>
            <Link to="/form">Add list</Link>
            <Link to="/">Home</Link>
        </header>
    )
}