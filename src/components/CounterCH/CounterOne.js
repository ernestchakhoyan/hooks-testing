import React  from "react";
import {useCounter} from "../customHooks/customHooks";

function CounterOne(props) {
    const [count, increment, decrement, reset] = useCounter(0, 1);

    return (
        <div>
            <h2>Counter { count }</h2>
            <button onClick={increment}> Increment</button>
            <button onClick={decrement}> Decrement</button>
            <button onClick={reset}> Reset</button>
        </div>
    );
}

export default CounterOne;