import { Fragment, useState } from "react"
import GenresList from "../components/Categorie.jsx"
import Presentation from "../components/Presentation.jsx"

const Movies = () => {
    const [recupId, setRecupid] = useState("436270")
    const setPresentation = (movie) => {setRecupid(movie.id)}
    return (
        <div className="home">
        <Presentation movieToPresent={recupId}/>
            <div className="content">
                <h1>Film</h1>
                <GenresList load={{type:"movie"}} handlePresentationChange3={setPresentation}/>
            </div>
        </div>
    )
}

export default Movies