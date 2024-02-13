import { StyleSheet, View, Text, FlatList } from "react-native";
import MealItem from "../component/mealItemComponent";


function MealsList({items}){

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
            <FlatList data={items} 
            keyExtractor={(item) => item.id} 
            renderItem={renderMealItem}/>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 16
    }
})

export default MealsList