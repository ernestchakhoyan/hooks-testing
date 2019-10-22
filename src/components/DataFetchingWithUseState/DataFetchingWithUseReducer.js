import React, { useEffect, useReducer } from "react";
import axios from "axios";

function DataFetchingWithUseReducer(props) {

    const initialState = {
        loading: false,
        error: "",
        post: {}
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "FETCHING_DATA":
                return {
                    loading: false,
                    error: "",
                    post: action.payload
                };
            case "FETCHING_ERROR":
                return {
                    loading: false,
                    error: "Error",
                    post: null
                };
            default:
                return state;
        }
    };

    const [ state, dispatch ] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
            .then((response) => {
                dispatch({ type: "FETCHING_DATA", payload: response.data });
            })
            .catch((error) => {
                dispatch({ type: "FETCHING_ERROR" });
            });
    }, []);

    return (
        <div>
            { state.loading ? "Loading" : state.post.title }
            { state.error || null }
        </div>
    );
}

export default DataFetchingWithUseReducer;