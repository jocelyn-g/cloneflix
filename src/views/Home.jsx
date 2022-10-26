import React, { useState } from "react"
import MoviesList from "../components/MovieList.jsx"
import GenresList from "../components/Categorie.jsx"
import Presentation from "../components/Presentation.jsx"


const Home = () => {
    const [recupId, setRecupid] = useState("436270")
    const setPresentation = (movie) => {setRecupid(movie.id)}
    return (
        <div className="home">
        <Presentation movieToPresent={recupId}/>
        <div className="content">
            <h1>Accueil</h1>
            <MoviesList requete={{handlePresentationChange:{setPresentation}, genre:'Populaire', requete:'https://api.themoviedb.org/3/trending/all/day?api_key=f9ac7a805563a418711063c76bd10794&page=1&'}}/>
            <GenresList handlePresentationChange3={setPresentation}/>
        </div>
        </div>
    )
    
}
    
export default Home