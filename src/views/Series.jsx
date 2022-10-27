import { Fragment, useEffect, useState } from "react"
import GenresList from "../components/Categorie.jsx"
import Presentation from "../components/Presentation.jsx"

const Series = () => {
    const [recupId, setRecupid] = useState({adult: false,
        backdrop_path: "/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg",
        genre_ids: [10765, 18, 10759],
        id: 94997,
        original_language: "en",
        original_name: "House of the Dragon",
        overview: "The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their yoke. Most empires crumble from such heights. In the case of the Targaryens, their slow fall begins when King Viserys breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.",
        media_type:"tv",
        popularity: 5118.792,
        poster_path: "/z2yahl2uefxDCl0nogcRBstwruJ.jpg",
        release_date: "2022-10-19",
        video: false,
        vote_average: 8.534,
        vote_count: 2095})

        const setPresentation = (movie) => {
            if(movie.type !== undefined){
                movie.media_type = movie.type
            }
            setRecupid(movie)
        }
    return (
        <div className="home">
        <Presentation movieToPresent={recupId}/>
            <div className="content">
                <h1>Séries</h1>
                <GenresList load={{type:"tv"}} handlePresentationChange3={setPresentation}/>
            </div>
        </div>
    )
}

export default Series