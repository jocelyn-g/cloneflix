import React from "react"
const { Fragment, useState, useEffect } = React

const Presentation = () => {
    
    
    const [presentation, setPresentation] = useState([]);
    const [presentId, setPrentId] = useState("436270")

useEffect(() => {
    fetch( 'https://api.themoviedb.org/3/movie/'+presentId+'?api_key=f9ac7a805563a418711063c76bd10794&language=en-US' )
    .then( response => response.json() )
    .then( result => setPresentation( result ) )
},[])

const listStyle = {
    width: "80vw",
    display:"flex",
    position:'relative',
    overflowX: 'scroll'
}

let posterUrl = presentation.poster_path ? 'https://image.tmdb.org/t/p/original' + presentation.poster_path : 'default-movie-poster.png';
console.log(presentation)

    return (
        <div style={{width: "90vw",height:'25vh', backgroundImage: 'url('+posterUrl+')', color:'white', padding:'0', margin:'0'}}>
            <h1 style={{ padding:'10px', margin:'0'}}>{presentation.title}</h1>
            {presentation.length === undefined &&(<ul>{presentation.genres.map((genre) => <li key={genre.id}>{genre.name}</li> )}</ul>)}
        </div>
    )
}





export default Presentation