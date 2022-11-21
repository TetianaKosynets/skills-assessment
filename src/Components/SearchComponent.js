import React, { useState, useEffect } from "react";
//import ReactPaginate from 'react-paginate';

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


    return (
            <div></div>
        );
           
    }