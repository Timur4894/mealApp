import {StyleSheet, View, Pressable, Text, Platform } from 'react-native'

function CategoryGridTile({title, color, onPress}){
    return(
        <View style={[styles.gridItem, {backgroundColor: color}]}>
            <Pressable android_ripple={{color: "#ccc"}} 
            style={({pressed})=>[styles.button, pressed ? styles.buttonPressed : null]}
            onPress={onPress}>
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    )

}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: "black",
        shadowOffset: {x: 0, y: 5},
        shadowOpacity: 0.5,
        shadowRadius: 10,
        overflow: Platform.OS == "android" ? 'hidden' : 'visible'
    }, 
    buttonPressed: {
        opacity: 0.5,
    },
    button: {
        flex: 1
    },
    innerContainer:{
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
})