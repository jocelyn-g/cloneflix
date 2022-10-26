import React from "react"
const { Fragment, useState, useEffect } = React

const Presentation = ({movieToPresent}) => {
    
    
    const [presentation, setPresentation] = useState([]);
    const id = movieToPresent

useEffect(() => {
    setPresentation(id)
},[id])

let posterUrl = presentation.poster_path ? 'https://image.tmdb.org/t/p/original' + presentation.poster_path : 'default-movie-poster.png';
 console.log(presentation)
if(presentation.length === 0){
    return (
        <Fragment>
            <div style={{width: "89.9vw",height:'25vh', backgroundColor: "rgba(80, 80, 80, 0.5)", color:'white', padding:'0', margin:'0'}}>
                Loading...
            </div>
        </Fragment>)
}else{
    return (
        <div style={{width: "89.9vw",height:'25vh', backgroundImage: 'url('+posterUrl+')', color:'white', padding:'0', margin:'0'}}>
            <h1 style={{ padding:'10px', margin:'0'}}>{presentation.title}</h1>
            <ul>{presentation.genres.map((genre) => <li key={genre.id}>{genre.name}</li> )}</ul>
        </div>
    )
}
}





export default Presentation