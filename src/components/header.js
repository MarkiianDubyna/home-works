import React, {useContext} from "react";
import {NavLink} from 'react-router-dom';
import {TodoContext} from "../context/context";

export default function Header() {
    const {todos, doneTodos} = useContext(TodoContext);

    return (
        <header className='header'>
            <NavLink to="/addedList" exact>Todo list</NavLink>
            <NavLink to="/form" exact>Add list</NavLink>
            <NavLink to="/" exact>Home</NavLink>

            <div style={{flex: 1}}/>

            <h3>Total todos: {todos.length}</h3>
            <h3>In progress todos: {todos.length - doneTodos.length}</h3>
            <h3>Done todos: {doneTodos.length}</h3>
        </header>
    )
}