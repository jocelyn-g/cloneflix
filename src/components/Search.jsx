import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Movies = () => {};
const [search, setSearch]   = useState('');
const [movies, setMovies] = useState([]);
            
useEffect( () => {
                
    if( search.length > 0 )
        {
            fetch( 'https://api.themoviedb.org/3/search/movie?api_key=f9ac7a805563a418711063c76bd10794&language=fr&page=1'+search )
            .then( response => response.json() )
            .then( result => setMovies( result.results ) )
        }
    else
        {
            fetch( 'https://api.themoviedb.org/3/movie/popular?api_key=f9ac7a805563a418711063c76bd10794&language=fr&page=1' )
            .then( response => response.json() )
            .then( result => setMovies( result.results ) )
        }

    return (
        <div>
            <p>
                <input type="search" value={search} onChange={ (e) => setSearch( e.target.value ) }/>
            </p>
            <div>
                { movies.map( (movie) => <Movie key={movie.id} movie={movie} /> ) }
            </div>
        </div> 
        )
                
}, [search] );

export default useEffect;