import React, { useContext } from "react";
import {FirstContext} from "../../App";

function ComponentA(props) {
    const {countState, countDispatch} = useContext(FirstContext);

    return (
        <div>
            <div>{countState}</div>
            <button onClick={ () => countDispatch("increment") }>Increment</button>
            <button onClick={ () => countDispatch("decrement") }>Decrement</button>
            <button onClick={ () => countDispatch("reset") }>Reset</button>
        </div>
    );
}

export default ComponentA;