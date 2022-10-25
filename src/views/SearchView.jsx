import React from "react";
import SearchMovies from "../components/Search.jsx";

const { Fragment} = React;

const Search = () => {
    return (
        <Fragment>
            <h1>Search</h1>
            <SearchMovies />
        </Fragment>
    )
}

export default Search