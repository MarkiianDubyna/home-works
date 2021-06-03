import React, {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom'
export default function FilteredProducts () {
    const history = useHistory();
    const [state, setState] = useState({});
    console.log(history.location.pathname);
    const fetchFilteredProducts = async (category) => {
        const response = await fetch(`https://fakestoreapi.com/products${category}`);
        const json = await response.json();
        setState(json)
        console.log(state)
    }
    useEffect(() =>{
        fetchFilteredProducts(history.location.pathname)
    },[])
    return (
        <div className="products_filtered_categories">
            {/*{state.map(el => {*/}
            {/*    <div>*/}
            {/*        <h3>{el.id}</h3>*/}
            {/*    </div>*/}
            {/*})}*/}
        </div>
    )
}