import React from "react";
import './App.css';
import Header from "./components/header";
import TodoContextProvider from "./components/todoContextProvider";
import Routes from "./components/routes";
import Inputs from "./components/inputsComponent/inputsComponent";
import InputsRoutes from "./components/inputsComponent/inputsRoutes";

function App() {
    return (
        <div className="App">
            <TodoContextProvider>
                <main className="top">
                    <Header/>
                    <Routes/>
                </main>
            </TodoContextProvider>
            <Inputs/>
            <InputsRoutes/>
        </div>
    );
}

export default App;