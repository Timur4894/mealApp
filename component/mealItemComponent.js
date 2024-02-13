import {Platform,View, Text, Pressable, StyleSheet, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MealsDetails from './mealDetails'

function MealItem({id, title, imgUrl, duration, complexity,  affordability}){
    
    const navigation = useNavigation()
    function pressHandler(){
            navigation.navigate('MealsDetails', {
                mealId: id
            })
        }
    
    return(
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color: "#ccc"}} 
            style={({pressed})=>[styles.button, pressed ? styles.buttonPressed : null]}
            onPress={pressHandler}
            >
                <View style={{borderRadius: 8, overflow: 'hidden'}}>
                    <View>
                        <Image style={styles.image} source={{uri: imgUrl}}/>
                        <Text style={styles.titleObj}>
                            {title}
                        </Text>    
                    </View>
                    <MealsDetails affordability={affordability} complexity={complexity} duration={duration}/>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonPressed: {
        opacity: 0.7,
    },
    image: {
        width: "100%",
        height: 200,

    },
    titleObj: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        margin: 8
    },
    mealItem:{
        margin:16,
        borderRadius: 8,
        overflow: Platform.OS == "android" ? 'hidden' : 'visible',
        backgroundColor: "white",
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowOffset: {width: 0, height: 5},
        shadowRadius: 10,

    },


})

export default MealItem