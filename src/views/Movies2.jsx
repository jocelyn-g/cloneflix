import React from "react";
import GenreFilm from "../components/GenreFilm.jsx";
import Row from "../components/Row.jsx";

const Rows = () => {

    return (
        <div>
            <h1>Movies</h1>
            <Row title="Action" fetchUrl={GenreFilm.fetchAction}/>
        </div>
    )
}

export default Rows