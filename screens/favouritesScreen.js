import { FavoriteContext } from "../store/context/favorite-context";
import { useContext } from "react";
import MealsList from "../component/mealsList";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View} from "react-native";

function FavoritesScreen(){
    const favMeals = useContext(FavoriteContext)
    const favMealsAll = MEALS.filter(meal => favMeals.ids.includes(meal.id))

    if (favMealsAll.length == 0){
        return(
            <View style={styles.rootCont}>
                <Text style={styles.text}>
                    You have no favorite maels yet 
                </Text>
            </View>
        )
    }
    return(
        <MealsList items={favMealsAll}/>
    )
}

const styles = StyleSheet.create({
    rootCont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})

export default FavoritesScreen