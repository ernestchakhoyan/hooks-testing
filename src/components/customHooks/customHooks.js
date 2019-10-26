import {useEffect} from "react";

export const useDocumentTitleCount = (count) => {
    useEffect(() => {
        document.title = count;
    }, [ count ]);
};