import React from "react"
const { Fragment, useState, useEffect } = React


const MoviesList =({requete}) =>{
const [movies, setMovies] = useState([]);
const [isLoading,setLoad]=useState(true);
useEffect(() => {
    const fetchData = async () => {
        await fetch( requete.requete )
        .then( response => response.json() )
        .then( result => setMovies( result.results.slice(0,15) ) )
        setLoad(false)
      }

    fetchData()

},[])
const listStyle = {
    width: "80vw",
    display:"flex",
    position:'relative',
    overflowX: 'scroll'
}

const fakeStyle ={
    width: "80vw",
    height: "20vh",
    display:"flex",
    position:'relative',
    overflowX: 'scroll',
    backgroundColor: "rgba(80, 80, 80, 0.5)",
    fontSize: "16px"
}

const sendToHome = (movie) => requete.handlePresentationChange.setPresentation(movie)
// console.log(requete.handlePresentationChange.setPresentation)
if(isLoading){
    return (
                    <Fragment>
                        <h1>{requete.genre}</h1>
                        <div style = {fakeStyle}>
                            <div style = { { display:'flex' } }>
                            Loading...
                            </div>
                        </div>
                    </Fragment>
                    )
}else{
    return(
                    <Fragment>
                    <h1>{requete.genre}</h1>
                    <div style = {listStyle}>
                        <div style = { { display:'flex' } }>
                        { movies.map( (movie) => <MovieList key={movie.id} movie={movie} type={requete.type} funct={sendToHome} /> ) }
                        </div>
                    </div>
                    </Fragment>
    )
}

}

const MovieList = ({movie, funct, type}) => {

    let posterUrl = movie.poster_path ? 'https://image.tmdb.org/t/p/w185' + movie.poster_path : 'default-movie-poster.png';
    const posterStyle = {
        width: '130px',
        height:'185px',
        backgroundImage: 'url('+posterUrl+')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    movie.type = type
    console.log(movie.type)
    const handleClick = (movie) => funct(movie)
    
    return(
        <div style ={posterStyle} name="choice" onClick = {() => handleClick(movie) }>
        </div>
    )
}

export default MoviesList