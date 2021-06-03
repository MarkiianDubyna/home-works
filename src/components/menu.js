import React from 'react';
import {Link} from "react-router-dom";
import './menu.css';

export default function Menu() {
    return (
        <div className="menu">
            <div className="menu_categories">
                <button><Link to="/category/mens-clothing">Men's clothing</Link></button>
                <button><Link to="/category/jewelery">Jewelery</Link></button>
                <button><Link to="/category/electronics">Electronics</Link></button>
                <button><Link to="/category/womens-clothing">Women's clothing</Link></button>
                <button><Link to="/">Home</Link></button>

            </div>
        </div>
    )
}