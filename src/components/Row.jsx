import { Fragment, useState, useEffect } from "react";
import Movie from './Search.jsx';


const Row = (title, fetchUrl) => {

    const [movies, setMovies] = useState([]);
    

    const rowStyle = {
        padding: '10px 4%',
        color: '#FFF',
    }

    const rowTitleStyle = {
        fontSize: '17px',
    }

    const rowImageListStyle = {
        display: 'flex',
        alignItems: 'center',
        overflowX: 'visible',
        overflowY: 'hidden',
        width: '100%',
        padding: '5px 0',
    }

    /*const rowImageStyle = {
        width: '300px',
        padding: '5px',
    }*/

    useEffect (() => {
        
        const fetchData = async () => { 
            
            await fetch(fetchUrl)
            .then( response => response.json() )
            .then( result => setMovies( result.results ) )   
            }
        
        fetchData();

    }, [fetchUrl] )

    
 
    return (
    
    <Fragment style={rowStyle}>
        
        <h2 style={rowTitleStyle}>Titre</h2>
        
        <div style={rowImageListStyle}>
            { movies.map( (movie) => 
            <div key={movie.id}>
                <img src="" alt=""/>
            </div> ) }              
        </div>
        
    </Fragment>
 )
}

export default Row