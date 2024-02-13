import {View, Text, StyleSheet} from 'react-native'

function MealsDetails({duration, complexity, affordability}){
    return(
        <View style={styles.details}>
            <Text>{duration} minutes</Text>
            <Text>{complexity.toUpperCase()}</Text>
            <Text>{affordability.toUpperCase()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    details: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 8
    }

})

export default MealsDetails