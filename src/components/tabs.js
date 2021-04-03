import React from "react";
import './tabs.css';
const Tabs = (props) => {
    return (
    <div className='header_tabs'>
        {props.tabs.map(tab => (
            <button
                key={tab}
                className="buttonOfTab"
                onClick={() => props.onTabClick(tab)}
            >
                {tab}
            </button>
        ))}
    </div>
    )
};
export default Tabs;