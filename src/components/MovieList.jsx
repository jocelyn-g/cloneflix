import React from "react";

const { Fragment, useState, useEffect } = React



const MoviesList =({requete}) =>{

const [movies, setMovies] = useState([]);
useEffect(() => {

    fetch( requete.requete )
    .then( response => response.json() )
    .then( result => setMovies( result.results ) )
},[])
const listStyle = {
    width: "80vw",
    display:"flex",
    position:'relative',
    overflowX: 'scroll'
}

    return(
                    <Fragment>
                    <h1>Populaire</h1>
                    <div style = {listStyle}>
                        <div style = { { display:'flex' } }>
                        { movies.map( (movie) => <MovieList key={movie.id} movie={movie} /> ) }
                        </div>
                    </div>
                    </Fragment>
    )
}

const MovieList = ({movie}) => {

    let posterUrl = movie.poster_path ? 'https://image.tmdb.org/t/p/original' + movie.poster_path : 'default-movie-poster.png';

    const posterStyle = {
        width: '100px',
        height:'150px',
        backgroundImage: 'url('+posterUrl+')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    return(
        <div style ={posterStyle}>
        </div>

    )
}

export default MoviesList