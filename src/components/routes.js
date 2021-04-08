import TodoList from "./todoList";
import AddTodo from "./addTodo";
import Home from "./home";
import TestHooks from "../test-hooks";
import React from "react";
import {Switch, Route} from 'react-router-dom';

export default function Routes() {
    return (
        <div className="routes">
            <Switch>
                <Route path="/addedList" exact component={TodoList}/>
                <Route path="/form" exact component={AddTodo}/>
                <Route path="/" >
                    <Home/>
                    <TestHooks/>
                </Route>
            </Switch>
        </div>
    )
}