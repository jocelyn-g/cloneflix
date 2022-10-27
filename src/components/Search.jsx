import { Fragment, useState, useEffect } from "react";


const SearchMovies = () => {

const [search, setSearch]   = useState('');
const [movies, setMovies] = useState([]);        
    
    const searchMoviesStyle = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
         alignItems: 'flex-start'
    }
           
useEffect( () => {
                
    if( search.length > 0 )
        {
            fetch( 'https://api.themoviedb.org/3/search/movie?api_key=f9ac7a805563a418711063c76bd10794&language=fr&query='+ search + '&page=1&include_adult=false' )
            .then( response => response.json() )
            .then( result => setMovies( result.results ) )
        }
    else
        {
            fetch( 'https://api.themoviedb.org/3/movie/popular?api_key=f9ac7a805563a418711063c76bd10794&language=fr&page=1' )
            .then( response => response.json() )
            .then( result => setMovies( result.results ) )
        }
    }, [search] )  

    return (
        <Fragment>
            <p>
                <input type="search" value={search} onChange={ (e) => setSearch( e.target.value ) }/>
            </p>
            <div style={searchMoviesStyle}>
                { movies.map( (movie) => <Movie key={movie.id} movie={movie} /> ) }
            </div>
        </Fragment>
        )
    }
    
    const Movie = ( { movie } ) => {
            
        let posterUrl = movie.poster_path ? 'https://image.tmdb.org/t/p/w300' + movie.poster_path : 'default-movie-poster.png';
        
        const searchMoviesStyle = {
            width: '200px',
            height: '300px',
            backgroundImage: 'url('+ posterUrl +')',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            margin: '16px',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'flex-end'
        }
        
        return (
            
            <article style={searchMoviesStyle}>
                <main></main>
            </article>
        )
    }

export default SearchMovies;