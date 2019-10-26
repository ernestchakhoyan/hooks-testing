import { useEffect, useState } from "react";

export const useDocumentTitleCount = (count) => {
    useEffect(() => {
        document.title = count;
    }, [ count ]);
};

export const useCounter = (initialState = 0, value = 1) => {
    const [ count, setCount ] = useState(initialState);

    const increment = () => {
        setCount((prevState) => {
            return prevState + value;
        });
    };

    const decrement = () => {
        setCount((prevState) => {
            return prevState - value;
        });
    };

    const reset = () => {
        setCount(initialState);
    };

    return [ count, increment, decrement, reset ];
};