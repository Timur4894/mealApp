import { createContext, useState } from "react";

export const FavoriteContext = createContext({
    ids: [],
    addFavorite: (id)=>{},
    removeFavorite: (id)=>{},
})
 
function FavoriteContextProvider({children}){
    const [fav, setFav] = useState([])

    function addFav(id){
        setFav((curr)=>[...curr, id])
    }

    function removeFav(id){
        setFav((curr)=>curr.filter((mealId)=> mealId!==id))
    }

    const value = {
        ids: fav,
        addFavorite: addFav,
        removeFavorite: removeFav
    }

    return(
        <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
    )
}
 
export default FavoriteContextProvider