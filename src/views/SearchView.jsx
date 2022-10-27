import React from "react";
import SearchMovies from "../components/Search.jsx";

const { Fragment} = React;

const Search = () => {
    return (
        <div className="content_search">
            <h1>Search</h1>
            <SearchMovies />
        </div>
    )
}

export default Search