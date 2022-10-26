import React from "react"
import MoviesList from "../components/MovieList.jsx"
import GenresList from "../components/Categorie.jsx"

const movie = []
console.log(movie == false)
const Home = () => {

    if(movie == false){
        return(
            <GenresList  onLoad={console.log("test")}/>
        )
    }
    return (
        <div className="content">
        <h1>Accueil</h1>
        <MoviesList requete={{genre:'Populaire', requete:'https://api.themoviedb.org/3/trending/all/day?api_key=f9ac7a805563a418711063c76bd10794&page=1&'}}/>
        {movie}
        <MoviesList requete={{genre:'Action', requete:'https://api.themoviedb.org/3/discover/tv?api_key=f9ac7a805563a418711063c76bd10794&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_genres=10759'}}/>

        </div>
    )
    
}
    
export default Home