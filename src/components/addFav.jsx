import { useEffect, useState } from "react";
const AddFav = ({movie}) =>{
    const [item , setItem] = useState()
    useEffect(() => {
        if( item !== undefined && localStorage.getItem("favs") !== null){
            let exist = false
            let favs = JSON.parse( localStorage.getItem("favs") )
                for (let index = 0; index < favs.length; index++) {
                    if(favs[index].type == item.type && favs[index].id == item.id){
                        exist = index
                    }}
                if(exist === false){
                    favs.push(item)
                }else{
                    favs.splice(exist, 1)
                }
            localStorage.setItem("favs", JSON.stringify(favs))
            setItem()
        }else if(localStorage.getItem("favs") == null && item !== undefined){
            localStorage.setItem("favs", JSON.stringify([item]))
            setItem()
        }
    }, [addToFav])

    function addToFav(movie){
        setItem(movie)
    }

    return(
        <button onClick = {() => addToFav(movie)} className="addFav">
            Add/Remove from favorite
        </button>
    )
}

export default AddFav