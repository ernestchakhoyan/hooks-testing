import React, { useState } from "react";

export default () => {
    const [ count, setCount ] = useState(0);

    const incrementCount = () => {
        setCount((prevValue) => {
            console.log(prevValue);
            return prevValue + 1
        });
    };

    return (
        <div>
            <button onClick={ incrementCount }>Count { count }</button>
        </div>
    );
};