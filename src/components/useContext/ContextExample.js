import React, {useContext} from "react";
import {FirstContext,SecondContext} from "../../App";

function ContextExample(props) {
    const firstContext = useContext(FirstContext);
    const secondContext = useContext(SecondContext);
    return (
        <div>
            {firstContext} = {secondContext}
        </div>
    );
}

export default ContextExample;