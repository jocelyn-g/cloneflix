import { useEffect } from "react";

const AddFav = ({movie}) =>{
    useEffect(() => {
        if(localStorage.getItem("favs") == null){
            console.log('oui')
            localStorage.setItem("favs", [{}])
        }else if(false){

        }
    }, [addToFav])

    function addToFav(movie){
        
    }

    return(
        <button onClick = {() => addToFav(movie)} style={{backgroundColor: '#282c34', color: 'white', borderRadius: '30px', padding: '10px'}}>
            Add to favorite
        </button>
    )
}

export default AddFav