import React, { useEffect, useRef, useState } from "react";

function CounterInterval(props) {
    const [ timer, setTimer ] = useState(0);
    const timerRef = useRef();

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
        }, 1000);
        return () => {
            clearInterval(timerRef.current)
        };
    }, []);
    return (
        <div>
            <span>Timer { timer }</span>
            <button onClick={() => clearInterval(timerRef.current)}>Clear timer</button>
        </div>
    );
}

export default CounterInterval;