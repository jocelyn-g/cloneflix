import React, { useState } from "react"
import MoviesList from "../components/MovieList.jsx"
import GenresList from "../components/Categorie.jsx"
import Presentation from "../components/Presentation.jsx"

const movie = []
console.log(movie == false)
const Home = () => {

    if(movie == false){
        return(
            <GenresList  onLoad={console.log("test")}/>
        )
    }
    const [recupId, setRecupid] = useState("436270")

    const setPresentation = (movie) => {setRecupid(movie.id)}
    console.log(recupId)
    return (
        <div className="home">
        <Presentation movieToPresent={recupId}/>
        <div className="content">
            <h1>Accueil</h1>
            <MoviesList requete={{handlePresentationChange:{setPresentation}, genre:'Populaire', requete:'https://api.themoviedb.org/3/trending/all/day?api_key=f9ac7a805563a418711063c76bd10794&page=1&'}}/>
            <MoviesList requete={{handlePresentationChange:{setPresentation}, genre:'Action', requete:'https://api.themoviedb.org/3/discover/movie?api_key=f9ac7a805563a418711063c76bd10794&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate'}}/>
        </div>
        </div>
    )
    
}
    
export default Home