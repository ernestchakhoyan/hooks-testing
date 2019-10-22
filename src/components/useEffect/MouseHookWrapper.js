import React, {useState} from "react";
import MouseHook from "./HookMouse";

function MouseHookWrapper(props) {
    const [display, setDisplay] = useState(true);
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toogle</button>
            {display && <MouseHook />}
        </div>
    );
}

export default MouseHookWrapper;