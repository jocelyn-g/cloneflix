import React from "react"
const { Fragment, useState, useEffect } = React



const MoviesList =({requete}) =>{
const serieId = [
    {id: 10759, name: 'Action & Adventure'},
    {id: 16, name: 'Animation'},
    {id: 35, name: 'Comedy'},
    {id: 80, name: 'Crime'},
    {id: 99, name: 'Documentary'},
    {id: 18, name: 'Drama'},
    {id: 10751, name: 'Family'},
    {id: 10762, name: 'Kids'},
    {id: 9648, name: 'Mystery'},
    {id: 10763, name: 'News'},
    {id: 10764, name: 'Reality'},
    {id: 10765, name: 'Sci-Fi & Fantasy'},
    {id: 10766, name: 'Soap'},
    {id: 10767, name: 'Talk'},
    {id: 10768, name: 'War & Politics'},
    {id: 37, name: 'Western'}
]
const movieId = {
    28:{id: 28, name: 'Action'},
    12:{id: 12, name: 'Adventure'},
    16:{id: 16, name: 'Animation'},
    35:{id: 35, name: 'Comedy'},
    80:{id: 80, name: 'Crime'},
    99:{id: 99, name: 'Documentary'},
    18:{id: 18, name: 'Drama'},
    10751:{id: 10751, name: 'Family'},
    14:{id: 14, name: 'Fantasy'},
    36:{id: 36, name: 'History'},
    27:{id: 27, name: 'Horror'},
    10402:{id: 10402, name: 'Music'},
    9648:{id: 9648, name: 'Mystery'},
    10749:{id: 10749, name: 'Romance'},
    878:{id: 878, name: 'Science Fiction'},
    10770:{id: 10770, name: 'TV Movie'},
    53:{id: 53, name: 'Thriller'},
    10752:{id: 10752, name: 'War'},
    37:{id: 37, name: 'Western'}
}
const [movies, setMovies] = useState([]);
 function Setgenre(genreid){

 }
    const genre = Setgenre(requete.genre);
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
                    <h1>{}</h1>
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
    // console.log(movie)
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