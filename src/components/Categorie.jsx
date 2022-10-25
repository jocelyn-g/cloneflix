import {useState, useEffect } from "react"



const GenresList = () =>{
const [moviesGenres, setMoviesGenres] = useState([]);
const [tvsGenres, setTvsGenres] = useState([]);
useEffect(() => {
    const fetchMovieGenre = async () => {
        await fetch( "https://api.themoviedb.org/3/genre/movie/list?api_key=f9ac7a805563a418711063c76bd10794&language=en-US" )
        .then( response => response.json() )
        .then( result => setMoviesGenres( result ) )
      }
      const fetchTvsGenre = async () => {
        await fetch( "https://api.themoviedb.org/3/genre/tv/list?api_key=f9ac7a805563a418711063c76bd10794&language=en-US" )
        .then( response => response.json() )
        .then( result => setTvsGenres( result ) )
      }

    fetchMovieGenre()
    fetchTvsGenre()
},[])

return(
    <div>
        {moviesGenres.map((MovieGenre) => <genreList key={MovieGenre.id} name={MovieGenre.name} />)}
    </div>
)
}


const genreList = () => {
    
}
export default GenresList