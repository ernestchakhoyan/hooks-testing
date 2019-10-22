import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetching(props) {
    const [ posts, setPosts ] = useState([]);

    const fetchData = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <ul>
                { posts.map(post => {
                    return (
                        <li key={ post.id }>
                            { post.title }
                        </li>
                    );
                }) }
            </ul>
        </div>
    );
}

export default DataFetching;