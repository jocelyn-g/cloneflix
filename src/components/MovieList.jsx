import { Fragment, useState, useEffect } from "react"



const MoviesList =({requete}) => {
    
    const [movies, setMovies] = useState([]);
    const [isLoading,setIsLoading]=useState(true);
    
    const fetchData = async () => {
        
        await fetch( requete.requete )
        .then( response => response.json() )
        .then( result => setMovies( result.results ) )
        setIsLoading(false)
        
      }

    useEffect(() => {

        fetchData() 

    }, [])

    const listStyle = {
        width: "80vw",
        display:"flex",
        position:'relative',
        overflowX: 'scroll'
    }

    const fakeStyle ={
        width: '100px',
        height:'150px',
        backgroundColor: "grey",
        fontSize: "16px"
    }

    if(isLoading) 
        {
            return (<h1 style={fakeStyle}>Loading...</h1>)
        }

    else 
        {
           return (
                    <Fragment>
                        <h1>{requete.genre}</h1>
                        <div style = {listStyle}>
                            <div style = { { display:'flex' } }>
                            { movies.map( (movie) => <MovieList key={movie.id} movie={movie} /> ) }
                            </div>
                        </div>
                    </Fragment>
            )
        }    
}

const MovieList = ({movie}) => {

    let posterUrl = movie.poster_path ? 'https://image.tmdb.org/t/p/original' + movie.poster_path : 'default-movie-poster.png';
    // console.log(movie)
    const posterStyle = {
        width: '100px',
        height:'150px',
        backgroundImage: 'url('+posterUrl+')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <div style ={posterStyle}>
        </div>

    )
}

export default MoviesList