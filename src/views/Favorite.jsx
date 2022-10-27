import { Fragment, useState } from "react"
import DisplayFavs from "../components/DisplayFav"
import Presentation from "../components/Presentation"

const Favorite = () => {const [recupId, setRecupid] = useState({adult: false,
    backdrop_path: "/qxeqKcVBWnQxUp1w6fwWcxZEA6m.jpg",
    genre_ids:[28, 12, 14],
    id: 436270,
    original_language: "en",
    media_type:"movie",
    original_title: "Black Adam",
    overview: "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    popularity: 4912.22,
    poster_path: "/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg",
    release_date: "2022-10-19",
    title: "Black Adam",
    type: 'movie',
    video: false,
    vote_average: 7.2,
    vote_count: 471})
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
            <h1>Favorie</h1>
            <DisplayFavs />
            </div>
        </div>

    )
}

export default Favorite