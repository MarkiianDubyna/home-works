import React from "react";
export default function AddTodo () {
    return (
        <div className="inputs content">
            <input placeholder="enter title"/>
            <br/>
            <br/>
            <input placeholder="enter description"/>
            <br/>
            <br/>
            <button>Add todo</button>
        </div>
    )
}