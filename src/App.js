import React, {useState, createContext, useContext} from "react";
import {Switch, BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Header from "./components/header";
import Home from "./components/home";
import AddTodo from "./components/addTodo";
import TodoContextProvider from "./components/todoContextProvider";
import TodoList from "./components/todoList";

function App() {
    return (
        <TodoContextProvider>
            <div className="App">
                <Router>
                    <Header/>
                    <Switch>
                        <Route path="/addedList">
                            <TodoList/>
                        </Route>
                        <Route path="/form">
                            <AddTodo/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        </TodoContextProvider>
    );
}

export default App;
