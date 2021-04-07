import TodoList from "./todoList";
import AddTodo from "./addTodo";
import Home from "./home";
import React from "react";
import {Switch, Route} from 'react-router-dom';

export default function Routes() {
    return (
        <div className="routes">
            <Switch>
                <Route path="/addedList" exact component={TodoList}/>
                <Route path="/form" exact component={AddTodo}/>
                <Route path="/" exact component={Home}/>
            </Switch>
        </div>
    )
}