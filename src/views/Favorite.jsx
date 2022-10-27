import { Fragment, useState } from "react"
import DisplayFavs from "../components/DisplayFav"
import Presentation from "../components/Presentation"

const Favorite = () => {
    const [recupId, setRecupid] = useState("none")

    const setPresentation = (movie) => {
        if(movie.type !== undefined){
            movie.media_type = movie.type
        }
        setRecupid(movie)
    }
    return (
        <div className="home">
        {recupId != "none" &&(<Presentation movieToPresent={recupId}/>)}
            <div className="content" style={{height:recupId=== "none" ?'90vh':'65vh'}}>
            <h1>Favorie</h1>
            <DisplayFavs requete={{handlePresentationChange:{setPresentation}, requete:'https://api.themoviedb.org/3/trending/all/day?api_key=f9ac7a805563a418711063c76bd10794&page=1&'}} />
            </div>
        </div>

    )
}

export default Favorite