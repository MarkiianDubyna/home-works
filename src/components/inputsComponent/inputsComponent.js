import React from "react";


export default function Inputs() {
    return (
        <div className="inputs content">
            <input type="text" name="endpoint" placeholder="Please, enter endpoint =)"/>
            <input type="text" name="id" placeholder="Please, enter id for endpoint =)"/>
            <button>Enter</button>
        </div>
    )
}