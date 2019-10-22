import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetchingWithUseState(props) {
    const [ post, setPost ] = useState({});
    const [ error, setError ] = useState("");
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
            .then((response) => {
                setPost(response.data);
                setError("");
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                setError(error);
            });
    }, []);

    return (
        <div>
            {loading ? "Loading" : post.title}
            {error || null}
        </div>
    );
}

export default DataFetchingWithUseState;