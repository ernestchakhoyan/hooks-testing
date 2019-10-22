import React, { useEffect, useState } from "react";

const SideEffects = (props) => {
    const [ count, setCount ] = useState(0);
    const [ name, setName ] = useState("");
    const [ items, setItems ] = useState([]);

    const userInitialState = {
        data: {
            firstName: "",
            lastName: ""
        },
        id: 0
    };
    const [ user, setUser ] = useState(userInitialState);

    useEffect(() => {
        console.log("hello");
        document.title = `You clicked ${ count } times`;
    },[user]);

    const addItems = () => {
        setItems([ ...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        } ]);
    };

    const submitUser = () => {
        setUser({ ...user, id: user.id + 1 });
    };

    return (
        <div>
            <input type="text" value={ name } onChange={ event => setName(event.target.value) }/>
            <button onClick={ () => setCount(count + 1) }>You clicked{ count } times</button>
            <button onClick={ addItems }> Add Items</button>
            <ul>
                { items.map(item => {
                    return (
                        <li key={ item.id }>{ item.value }</li>
                    );
                }) }
            </ul>

            <input type="text" value={ user.data.firstName } onChange={ event => setUser({
                ...user, data: {
                    firstName: event.target.value
                }
            }) }/>
            <input type="text" value={ user.data.lastName } onChange={ event => setUser({
                ...user, data: {
                    lastName: event.target.value
                }
            }) }/>

            <button onClick={ submitUser }>Change Object</button>
        </div>
    );
};

export default SideEffects;