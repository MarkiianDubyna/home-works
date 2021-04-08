import React, {useEffect, useMemo, useState, memo, useCallback, useReducer} from 'react';

const initialState = {
    counter: 0,
    counter1: 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, counter: state.counter + 1};
        case 'decrement':
            return {...state ,counter: state.counter - 1};
        default:
            throw new Error();
    }
}
export default function TestHooks() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="content">
            <h1>{state.counter}</h1>
            <button onClick={() => dispatch({type: 'increment'})}> inc</button>
            <button onClick={() => dispatch({type: 'decrement'})}> dec</button>
        </div>
    )
}