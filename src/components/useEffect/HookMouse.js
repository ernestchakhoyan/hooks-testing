import React,{useEffect, useState} from "react";

function HookMouse(props) {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePositions = (event) => {
        setX(event.clientX);
        setY(event.clientY);
    };

    useEffect(() => {
        console.log("use effect")
        window.addEventListener("mousemove", logMousePositions);
        return () => {
            window.removeEventListener("mousemove", logMousePositions);
        }
    },[])

    return (
        <div>
            <h2>{x}</h2>
            <h2>{y}</h2>
        </div>
    );
}

export default HookMouse;