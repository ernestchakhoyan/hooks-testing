import React, { useEffect, useState } from "react";
import { useDocumentTitleCount } from "../customHooks/customHooks";

function DocTitleUpdateOne(props) {
    const [ count, setCount ] = useState(0);

    useDocumentTitleCount(count);
    return (
        <div>
            <button onClick={ () => setCount(count + 1) }>Update Doc Title</button>
        </div>
    );
}

export default DocTitleUpdateOne;