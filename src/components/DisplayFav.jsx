import { useEffect, useState } from "react"


const DisplayFavs = ({requete}) => {
    
    const [favs,setFavs] = useState()
    const [isLoading,setLoad]=useState(true);
    useEffect(()=>{

        

        const fetchData = async () => {
            let fav = JSON.parse( localStorage.getItem("favs"))
            setFavs(fav)
            setLoad(false)
          }
    
        fetchData()
        
    }, [])
    const sendToHome = (movie) => {
        requete.handlePresentationChange.setPresentation(movie)
    }
    if(isLoading){
        <div style={{width: "89.9vw",height:'25vh', backgroundColor: "rgba(80, 80, 80, 0.5)", color:'white', padding:'0', margin:'0'}}>
            Loading...
        </div>
    }else{
    return(
        <div style = { { display:'flex', wordWrap: 'break-word' } }>
            { favs.map( (movie) => <DisplayFav key={movie.id} movie={movie} funct={sendToHome}/> ) }
        </div>
    )
    }

}

const DisplayFav = ({movie, funct, type}) =>{


    let posterUrl = movie.poster_path ? 'https://image.tmdb.org/t/p/w185' + movie.poster_path : 'default-movie-poster.png';
    const posterStyle = {
        width: '130px',
        height:'185px',
        backgroundImage: 'url('+posterUrl+')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    const handleClick = (movie) => {
        movie.type = type
        funct(movie)
    }

    return(
        <div className="posterStyle" style ={posterStyle}  onClick = {() => handleClick(movie)}>
        </div>
    )
}

export default DisplayFavs