import { Fragment, useState, useEffect } from "react";
import image from "../img/default-movie-poster.png"

const SearchMovies = ({requete}) => {

const [search, setSearch]   = useState('');
const [movies, setMovies] = useState([]);   
const [isLoading,setLoad]=useState(true);          
    
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
            fetch( 'https://api.themoviedb.org/3/search/multi?api_key=f9ac7a805563a418711063c76bd10794&language=fr&query='+ search + '&page=1&include_adult=false' )
            .then( response => response.json() )
            .then( result => setMovies( result.results ) )
        }
    else
        {
            
            const fetchData = async () => {
                await fetch( requete.requete )
                .then( response => response.json() )
                .then( result => setMovies( result.results ) )
                setLoad(false)
              }
        
            fetchData()
        }
    }, [search] )  
    const sendToHome = (movie) => {
        requete.handlePresentationChange.setPresentation(movie)
    }
    return (
        <Fragment>
            <p>
                <input type="search" value={search} onChange={ (e) => setSearch( e.target.value ) }/>
            </p>
            <div style={searchMoviesStyle}>
                { movies.map( (movie) => <Movie key={movie.id} movie={movie} type={requete.type} funct={sendToHome} /> ) }
            </div>
        </Fragment>
        )
    }
    
    const Movie = ( { movie, funct, type } ) => {
            
        let posterUrl = movie.poster_path ? 'https://image.tmdb.org/t/p/w300' + movie.poster_path : image;
        
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

        const handleClick = (movie) => {
            movie.type = type
            funct(movie)
        }
        
        return (
            
            <div style={searchMoviesStyle} onClick = {() => handleClick(movie) }>
                <main></main>
            </div>
        )
    }

export default SearchMovies;