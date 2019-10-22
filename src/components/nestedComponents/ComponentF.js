import React,{useContext} from "react";
import {FirstContext} from "../../App";

function ComponentF(props) {
    const {countDispatch} = useContext(FirstContext);
    return (
        <div>
            <button onClick={ () => countDispatch("increment") }>Increment</button>
            <button onClick={ () => countDispatch("decrement") }>Decrement</button>
            <button onClick={ () => countDispatch("reset") }>Reset</button>
        </div>
    );
}

export default ComponentF;