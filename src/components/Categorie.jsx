import {useState, useEffect } from "react"
import MoviesList from "./MovieList";


const GenresList = ({load, handlePresentationChange3}) =>{
const type = load;
const [moviesGenres, setMoviesGenres] = useState([]);
const [tvsGenres, setTvsGenres] = useState([]);
const [isLoading,setLoad]=useState(true);
useEffect(() => {
    const fetchMovieGenre = async (type) => {
        switch (type.type) {
            case type = "all":
                await fetch( "https://api.themoviedb.org/3/genre/movie/list?api_key=f9ac7a805563a418711063c76bd10794&language=en-US" )
                    .then( response => response.json() )
                    .then( result => setMoviesGenres( result ) )
                await fetch( "https://api.themoviedb.org/3/genre/tv/list?api_key=f9ac7a805563a418711063c76bd10794&language=en-US" )
                    .then( response => response.json() )
                    .then( result => setTvsGenres( result ) )
                setLoad(false)
                break;
            case type = "movie":
                await fetch( "https://api.themoviedb.org/3/genre/movie/list?api_key=f9ac7a805563a418711063c76bd10794&language=en-US" )
                .then( response => response.json() )
                .then( result => setMoviesGenres( result ) )
                setLoad(false)
                break;
            case type = 'tv':
                    await fetch( "https://api.themoviedb.org/3/genre/tv/list?api_key=f9ac7a805563a418711063c76bd10794&language=en-US" )
                    .then( response => response.json() )
                    .then( result => setTvsGenres( result ) )
                    setLoad(false)
                    break;
            default:
                break;
        }
      }
    fetchMovieGenre(type)
},[])
const sendToHome = (movie) => handlePresentationChange3(movie)
// console.log(handlePresentationChange3)
if(isLoading){
    return(
        <div>
            loading...
        </div>
    )
}else if(type.type === "all"){
return(
    <div>
        {moviesGenres.genres.map((genre, i) => <GenreList key={i} type="movie" id={genre.id} genre={genre.name} handlePresentationChange2={sendToHome}/>)}
        {tvsGenres.genres.map((genre, i) => <GenreList key={i} type="tv" id={genre.id} genre={genre.name} handlePresentationChange2={sendToHome}/>)}
    </div>
)
}else if(type.type === "movie"){
    return(
        <div>
            {moviesGenres.genres.map((genre, i) => <GenreList key={i} type="movie" id={genre.id} genre={genre.name} handlePresentationChange2={sendToHome}/>)}
        </div>
    )
}else if(type.type === "tv"){
    return(
        <div>
            {tvsGenres.genres.map((genre, i) => <GenreList key={i} type="tv" id={genre.id} genre={genre.name} handlePresentationChange2={sendToHome}/>)}
        </div>
        )   
        }

}
const GenreList = ({type,genre,id, handlePresentationChange2}) => {
    
    const setPresentation = (movie) => handlePresentationChange2(movie)
    
    return(
        <MoviesList requete={{handlePresentationChange:{setPresentation},type:type, genre:genre, requete:'https://api.themoviedb.org/3/discover/'+type+'?api_key=f9ac7a805563a418711063c76bd10794&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres='+id+'&with_watch_monetization_types=flatrate'}}/>

    )
}
export default GenresList