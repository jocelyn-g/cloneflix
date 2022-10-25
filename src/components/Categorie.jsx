import {useState, useEffect } from "react"



const GenresList = () =>{
const [moviesGenres, setMoviesGenres] = useState([]);
const [tvsGenres, setTvsGenres] = useState([]);
const [isLoading,setLoad]=useState(true);
useEffect(() => {
    const fetchMovieGenre = async () => {
        await fetch( "https://api.themoviedb.org/3/genre/movie/list?api_key=f9ac7a805563a418711063c76bd10794&language=en-US" )
        .then( response => response.json() )
        .then( result => setMoviesGenres( result ) )
        setLoad(false)
      }
      const fetchTvsGenre = async () => {
        await fetch( "https://api.themoviedb.org/3/genre/tv/list?api_key=f9ac7a805563a418711063c76bd10794&language=en-US" )
        .then( response => response.json() )
        .then( result => setTvsGenres( result ) )
      }

    fetchMovieGenre()
    fetchTvsGenre()
},[])
if(isLoading){

}else{
console.log(moviesGenres.genres)
return(
    <div>
        {moviesGenres.genres.map((genre, i) => <GenreList key={i} id={genre.id} genre={genre.name}/>)}
    </div>
)
}

}
const GenreList = ({genre,id}) => {
    return(
        <div>
            
        </div>
    )
}
export default GenresList