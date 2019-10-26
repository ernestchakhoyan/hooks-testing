import React, { useEffect, useState } from "react";
import { useDocumentTitleCount } from "../customHooks/customHooks";

function DocTitleUpdateTwo(props) {
    const [ count, setCount ] = useState(0);

    useDocumentTitleCount(count);

    return (
        <div>
            <button onClick={ () => setCount(count + 1) }>Update Doc Title Two</button>
        </div>
    );
}

export default DocTitleUpdateTwo;