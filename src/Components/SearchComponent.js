import React, { useState, useEffect } from "react";

export default function SearchComponent(props) {
    const [search, setSearch] = useState(null);

    useEffect(() => {
        setSearch(props.data);
    }, [props.data]);

    if (!search) {
        return "null";
    }

    const filter = (e) => {

        const keyword = e.target.value;

        if (keyword !== '') {
            const results = props.data.filter((item) => {
                return item.name.toLowerCase().includes(keyword.toLowerCase());
            });
            setSearch(results);
        }
    };


         return(
            <div>
                <div>
                    <input placeholder="Search" onChange={filter} />
                </div>
                <div>
                    <h1>Products</h1>
                    {search.map(item =>
                        <ul>
                            <li>{item.name}</li>
                            <li>{item.details}</li>
                            <li>{item.price}</li>
                            <li>{item.location}</li>
                        </ul>
                    )}
                </div>
            </div>
        );

           
    }