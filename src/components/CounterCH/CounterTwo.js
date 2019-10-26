import React, { useState } from "react";
import { useCounter } from "../customHooks/customHooks";

function CounterTwo(props) {
    const [count, increment, decrement, reset] = useCounter(10, 2);

    return (
        <div>
            <h2>Counter { count }</h2>
            <button onClick={increment}> Increment</button>
            <button onClick={decrement}> Decrement</button>
            <button onClick={reset}> Reset</button>
        </div>
    );
}

export default CounterTwo;