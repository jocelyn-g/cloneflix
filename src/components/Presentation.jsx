import React from "react"
const { Fragment, useState, useEffect } = React

const Presentation = ({movieToPresent, formatv}) => {
    
    // console.log(movieToPresent)
    const [presentation, setPresentation] = useState(false);
    const [format, setFormat] = useState(formatv)
    const id = movieToPresent.id
     //console.log(formatv)
     // console.log(movieToPresent)
useEffect(() => {
    const fetchData = async () => {
        fetch( 'https://api.themoviedb.org/3/'+format+'/'+id+'?api_key=f9ac7a805563a418711063c76bd10794&language=en-US' )
        .then( response => response.json() )
        .then( result => setPresentation( result ) )
    }
    
    fetchData()
},[id])



let posterUrl = presentation.poster_path ? 'https://image.tmdb.org/t/p/w154' + presentation.poster_path : 'default-movie-poster.png';
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
            <h1 style={{ padding:'10px', margin:'0'}}>{(title)}</h1>
            <p>{presentation && presentation.overview}</p>
            <ul>{presentation && presentation.genres.map((genre) => <li key={genre.id}>{genre.name}</li> )}</ul>
        </div>
    )
}
}





export default Presentation