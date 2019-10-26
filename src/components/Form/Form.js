import React, { useEffect, useRef, useState } from "react";
import { useInputHook } from "../customHooks/customHooks";

function Form(props) {
    const [firstName, firstNameBind, resetFirstName] = useInputHook("");
    const [lastName, lastNameBind, resetLastName] = useInputHook("");

    const onSubmit = (e) => {
        e.preventDefault();
        alert(firstName + " " + lastName);
        resetFirstName();
        resetLastName();
    };

    const firstNameRef = useRef(null);

    useEffect(() => {
        firstNameRef.current.focus();
    }, []);

    return (
        <div>
            <form action="" onSubmit={ onSubmit }>
                <div>
                    <input
                        ref={ firstNameRef }
                        type="text"
                        {...firstNameBind}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        {...lastNameBind}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Form;