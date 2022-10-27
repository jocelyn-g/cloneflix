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
        <button onClick = {() => addToFav(movie)}>Add to favorite</button>
    )
}

export default AddFav