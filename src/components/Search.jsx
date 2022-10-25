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
            fetch( 'https://api.themoviedb.org/3/search/movie?api_key=f9ac7a805563a418711063c76bd10794&language=fr&page=1'+ search )
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
            
        let posterUrl = movie.poster_path ? 'https://image.tmdb.org/t/p/original' + movie.poster_path : 'default-movie-poster.png';
        
        const searchMoviesStyle = {
            width: '750px',
            height: '550px',
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
        
        const mainContentStyle = {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '24px',
            width: '100%',
            color: '#fff',
            background: 'rgba(0,0,0,.38)',
            backdropFilter: 'blur(5px)'
        }
        
        return (
            <article style={searchMoviesStyle}>
                <main style={mainContentStyle}>
                    <h2>{ movie.title }</h2>
                    <div>{ movie.release_date }</div>
                </main>
            </article>
        )
    }

export default SearchMovies;