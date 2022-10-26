import { Fragment } from "react"
import GenresList from "../components/Categorie.jsx"

const Movies = () => {
    return (
        <Fragment>
            <h1>Film</h1>
            <GenresList load={{type:"movie"}}/>
        </Fragment>
    )
}

export default Movies