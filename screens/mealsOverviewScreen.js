import { MEALS, CATEGORIES} from "../data/dummy-data";
import { StyleSheet, View, Text, FlatList } from "react-native";
import MealItem from "../component/mealItemComponent";
import { useLayoutEffect } from "react";

function MealsOverviewScreen({route, navigation}){

    const catId = route.params.categoryId
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    })

    useLayoutEffect(()=>{
        const categoryTitle = CATEGORIES.find((category)=> category.id == catId).title
        navigation.setOptions({title: categoryTitle})
    }, [catId, navigation])
    

    function renderMealItem(itemData){
        return(
            <MealItem title={itemData.item.title} 
            imgUrl={itemData.item.imageUrl}
            affordability={itemData.item.affordability}
            complexity={itemData.item.complexity}
            duration={itemData.item.duration}
            id={itemData.item.id}
            />
        )
    }

    return(
        <View style={styles.container}>
            <FlatList data={displayedMeals} 
            keyExtractor={(item) => item.id} 
            renderItem={renderMealItem}/>
        </View>
    )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 16
    }
})