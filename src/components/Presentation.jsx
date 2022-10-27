import React from "react"
import AddFav from "./AddFav";
const { Fragment, useState, useEffect } = React

const Presentation = ({movieToPresent, formatv}) => {
    
    const [presentation, setPresentation] = useState(false);
    const id = movieToPresent.id
    console.log(movieToPresent)
useEffect(() => {
    
    const fetchData = async () => {
        await fetch( 'https://api.themoviedb.org/3/'+movieToPresent.media_type+'/'+id+'?api_key=f9ac7a805563a418711063c76bd10794&language=en-US' )
        .then( response => response.json() )
        .then( result => setPresentation( result ) )
    }
    fetchData()
},[id])

//console.log(presentation)

let posterUrl = presentation.poster_path ? 'https://image.tmdb.org/t/p/w154' + presentation.poster_path : 'default-movie-poster.png';
if(presentation.length === 0){
    return (
        <Fragment>
            <div style={{width: "89.9vw",height:'25vh', backgroundColor: "rgba(80, 80, 80, 0.5)", color:'white', padding:'0', margin:'0'}}>
                Loading...
            </div>
        </Fragment>
        )
}else{
    return (
        <div style={{width: "89.9vw",height:'25vh', background: 'linear-gradient(180deg, rgba(82,82,82,1) 10%, rgba(0,0,0,0.45) 100%)', color:'white', padding:'0', margin:'0', display: 'flex'}}>
            <div style={{height: '25vh'}}>
                <img style={{height: '100%', padding:'0', margin:'0'}} src={posterUrl} alt="" />
            </div>
            <div style={{width: "70vw", margin:'auto'}}>
                <h1 style={{ padding:'10px', margin:'0'}}>{presentation.title ? presentation.title : presentation.original_name}</h1>
                <p>{presentation && presentation.overview}</p>
                <ul style={{listStyle: 'none', display:'flex', justifyContent: 'space-evenly'}}>{presentation && presentation.genres.map((genre) => <li key={genre.id}>{genre.name}</li> )}</ul>
            </div>
            <div style={{position: 'absolute', top: '17vh', right: '2vw'}}><AddFav movie={movieToPresent}/></div>
        </div>
    )
}
}





export default Presentation