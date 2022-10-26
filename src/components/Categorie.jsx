import {useState, useEffect } from "react"
import MoviesList from "./MovieList";


const GenresList = ({handlePresentationChange3}) =>{
const [moviesGenres, setMoviesGenres] = useState([]);
const [tvsGenres, setTvsGenres] = useState([]);
const [isLoading,setLoad]=useState(true);
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
        setLoad(false)
      }

    fetchMovieGenre()
    fetchTvsGenre()
},[])
const sendToHome = (movie) => handlePresentationChange3(movie)
// console.log(handlePresentationChange3)
if(isLoading){
    return(
        <div>
            loading...
        </div>
    )
}else{
return(
    <div>
        {moviesGenres.genres.map((genre, i) => <GenreList key={i} type="movie" id={genre.id} genre={genre.name} handlePresentationChange2={sendToHome}/>)}
        {tvsGenres.genres.map((genre, i) => <GenreList key={i} type="tv" id={genre.id} genre={genre.name} handlePresentationChange2={sendToHome}/>)}
    </div>
)
}

}
const GenreList = ({type,genre,id, handlePresentationChange2}) => {
    
    const setPresentation = (movie) => handlePresentationChange2(movie)
    
     console.log(handlePresentationChange2)
    return(
        <MoviesList requete={{handlePresentationChange:{setPresentation}, genre:genre, requete:'https://api.themoviedb.org/3/discover/'+type+'?api_key=f9ac7a805563a418711063c76bd10794&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres='+id+'&with_watch_monetization_types=flatrate'}}/>

    )


}
export default GenresList