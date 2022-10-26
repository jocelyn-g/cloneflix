import {useState, useEffect } from "react"
import MoviesList from "./MovieList";


const GenresList = () =>{
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
if(isLoading){
    return(
        <div>
            loading...
        </div>
    )
}else{
return(
    <div>
        {moviesGenres.genres.slice(0,3).map((genre, i) => <GenreList key={i} type="movie" id={genre.id} genre={genre.name}/>)}
        {tvsGenres.genres.slice(0,3).map((genre, i) => <GenreList key={i} type="tv" id={genre.id} genre={genre.name}/>)}
    </div>
)
}

}
const GenreList = ({type,genre,id}) => {
    return(
        <MoviesList requete={{genre:genre, requete:'https://api.themoviedb.org/3/discover/'+type+'?api_key=f9ac7a805563a418711063c76bd10794&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres='+id+'&with_watch_monetization_types=flatrate'}}/>

    )


}
export default GenresList