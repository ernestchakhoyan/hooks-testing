import React, { useState } from "react";

const HookCounterThree = (props) => {
    const initialState = {
        firstName: "",
        lastName: ""
    };
    const [ name, setName ] = useState(initialState);
    return (
        <div>
            <input
                type="text"
                value={name.firstName}
                onChange={event => setName({...name, firstName: event.target.value})}
            />
            <input
                type="text"
                value={name.lastName}
                onChange={event => setName({...name, lastName: event.target.value})}
            />
            <h2>{name.firstName}</h2>
            <h2>{name.lastName}</h2>
        </div>
    );
};

export default HookCounterThree;