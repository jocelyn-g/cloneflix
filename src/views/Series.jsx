import { Fragment } from "react"
import GenresList from "../components/Categorie.jsx"

const Series = () => {
    return (
        <Fragment>
            <h1>Séries</h1>
            <GenresList load={{type:"tv"}}/>
        </Fragment>
    )
}

export default Series