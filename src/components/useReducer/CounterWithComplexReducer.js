import React, { useReducer } from "react";

function CounterWithReducerTwo(props) {
    const initialState = {
        firstCounter: 0,
        secondCounter: 10
    };
    const reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                return {
                    ...state,
                    firstCounter: state.firstCounter + action.value
                };
            case "decrement":
                return {
                    ...state,
                    firstCounter: state.firstCounter - action.value
                };
            case "increment-two":
                return {
                    ...state,
                    secondCounter: state.secondCounter + action.value
                };
            case "decrement-two":
                return {
                    ...state,
                    secondCounter: state.secondCounter - action.value
                };
            case "reset":
                return initialState;
            default:
                return state;
        }
    };

    const [ count, dispatch ] = useReducer(reducer, initialState);
    return (
        <div>
            <div>Count: { count.firstCounter }</div>
            <button onClick={ () => dispatch({ type: "increment", value: 5 }) }>Increment 5</button>
            <button onClick={ () => dispatch({ type: "decrement", value: 5 }) }>Decrement 5</button>
            <button onClick={ () => dispatch({ type: "reset" }) }>Reset</button>
            <div>Count Two: { count.secondCounter }</div>
            <button onClick={ () => dispatch({ type: "increment-two", value: 1 }) }>Increment</button>
            <button onClick={ () => dispatch({ type: "decrement-two", value: 1 }) }>Decrement</button>
            <button onClick={ () => dispatch({ type: "reset" }) }>Reset</button>
        </div>
    );
}

export default CounterWithReducerTwo;