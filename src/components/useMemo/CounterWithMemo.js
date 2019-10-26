import React, { useState, useMemo } from "react";

function CounterWithMemo(props) {
    const [ count, setCountOne ] = useState(0);
    const [ secondCount, setCountTwo ] = useState(0);

    const incrementByOne = () => {
        setCountOne(count + 1);
    };

    const incrementByTwo = () => {
        setCountTwo(secondCount + 2);
    };

    const isEven = useMemo(() => {
        let i = 0;
        while (i < 2000000000) i++;
        return count % 2 === 0;
    },[count]);

    return (
        <div>
            <button onClick={ incrementByOne }>Increment by one</button>
            <span>{ count }</span>
            <span>{isEven ? "even" : "odd"}</span>
            <button onClick={ incrementByTwo }>Increment by two</button>
            <span>{ secondCount }</span>
        </div>
    );
}

export default CounterWithMemo;