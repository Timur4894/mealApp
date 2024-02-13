import {StyleSheet, View, Image, Button, Pressable, Text, Platform, ScrollView } from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealsDetails from '../component/mealDetails'
import { useContext, useLayoutEffect } from 'react'
import IconButton from '../component/iconButton'
import {FavoriteContext} from '../store/context/favorite-context'


function MealDetailsScreen({route, navigation}){
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)
    
    const favMeals = useContext(FavoriteContext)

    const mealIsFav = favMeals.ids.includes(mealId)

    function headerButtonPressed(){
        if(mealIsFav){
            favMeals.removeFavorite(mealId)
        }else{
            favMeals.addFavorite(mealId)
        }
    }
    
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>{
                return <IconButton onPress={headerButtonPressed} isFavorite={mealIsFav} />
            }
        })
    }, [navigation, headerButtonPressed])

    return(
        <ScrollView style={{marginBottom: 40}}>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealsDetails affordability={selectedMeal.affordability} complexity={selectedMeal.complexity} duration={selectedMeal.duration}/>
            
            <View style={{borderBottomColor: "#black",
            borderBottomWidth: 2, marginHorizontal: 15}}>
                <Text style={styles.subtitle}>
                    Ingredients
                </Text>
            </View>
    
            {selectedMeal.ingredients.map((ingr)=>(
                <View style={styles.listItem}>
                     <Text key={ingr}>{ingr}</Text>
                </View>
            ))} 

            <View style={{borderBottomColor: "#black",
            borderBottomWidth: 2, marginHorizontal: 15}}>
                <Text style={styles.subtitle}> 
                    Steps
                </Text>
            </View>
             
            {selectedMeal.steps.map((steps)=>(
                <View style={styles.listItem}>
                    <Text key={steps}>{steps}</Text>
                </View>
            ))}
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 8,
        marginHorizontal: 12,
        backgroundColor: "white"
    },
    image:{
        width: '100%',
        height: 350
    },
    title:{
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 8,
        fontSize: 24
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 8 ,
        padding: 6,
        textAlign: 'center'
    },

})

export default MealDetailsScreen