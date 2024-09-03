import axios from 'axios';
import React, { useEffect, useState } from 'react';

function DataFetch() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
                const data = res.data;

                if (data) {
                    setPost(data.game_indices);
                }
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div><h1>Data Fetch</h1>
            {post.map((priyu) => (
                <div>{priyu.version.name}</div>
            ))}
        </div>
    );
}

export default DataFetch;


// https://dummy.restapiexample.com/api/v1/employees