import React, { useReducer } from 'react';
import {numReducer} from "./numReducer";

export const Child1 = () => {
    const [state, dispatch] = useReducer(numReducer, 50);
    return (
        <div>
            <h1>
                Value = {state}
            </h1>
            <button onClick={() => { dispatch({ type: 'INCREMENT' }); } }>Increment</button>
            <button onClick={() => { dispatch({ type: '' }); } }>Decrement</button>
        </div>
    );
}