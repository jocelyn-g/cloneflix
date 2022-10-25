import React from "react"
import MoviesList from "../components/MovieList.jsx"

const Home = () => {
    return (
        <div className="content">
        <h1>Accueil</h1>
        <MoviesList requete={{ requete:'https://api.themoviedb.org/3/trending/all/day?api_key=f9ac7a805563a418711063c76bd10794&page=1&'}}/>
        <MoviesList requete={{genre:'28', requete:'https://api.themoviedb.org/3/discover/movie?api_key=f9ac7a805563a418711063c76bd10794&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate'}}/>
        </div>
    )
    
}
    
export default Home