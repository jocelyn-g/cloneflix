import { Fragment, useState } from "react"
import GenresList from "../components/Categorie.jsx"
import Presentation from "../components/Presentation.jsx"

const Series = () => {
    const [recupId, setRecupid] = useState("94997")
    const setPresentation = (movie) => {setRecupid(movie.id)}
    const [formatv, setFormatv] = useState("tv")
    return (
        <div className="home">
        <Presentation movieToPresent={recupId} format={formatv}/>
            <div className="content">
                <h1>Séries</h1>
                <GenresList load={{type:"tv"}} handlePresentationChange3={setPresentation}/>
            </div>
        </div>
    )
}

export default Series