import React from "react"
import MoviesList from "../components/MovieList.jsx"

const {Fragment} = React
const Home = () => {
    return (
        <div className="content">
        <h1>Accueil</h1>
        <MoviesList />
        </div>
    )
}

export default Home