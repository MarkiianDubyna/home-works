import React from "react";
import './App.css';
import Header from "./components/header";
import TodoContextProvider from "./components/todoContextProvider";
import Routes from "./components/routes";

function App() {
    return (
        <TodoContextProvider>
            <main className="App">
                <Header/>
                <Routes/>
            </main>
        </TodoContextProvider>
    );
}

export default App;
