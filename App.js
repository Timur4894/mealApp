import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import CategoryScreen from './screens/categoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverviewScreen from './screens/mealsOverviewScreen';
import MealDetailsScreen from './screens/mealDetailsScreen';
import {createDrawerNavigator} from '@react-navigation/drawer'
import FavoritesScreen from './screens/favouritesScreen';
import { Ionicons } from '@expo/vector-icons'
import FavoriteContextProvider from './store/context/favorite-context';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator(){
  return (
    <Drawer.Navigator screenOptions={{
            headerStyle: { backgroundColor: "#333"},
            headerTintColor: "white",
            sceneContainerStyle: {backgroundColor: "#ccc"},
            drawerStyle:{
              backgroundColor:"#ccc",
            },
            drawerActiveBackgroundColor: "#333",
            drawerActiveTintColor: "white"
    }}  >
      <Drawer.Screen name='Categories' component={CategoryScreen} options={{
        drawerIcon: ({size, color}) => <Ionicons size={size} color={color} name='list'/>
      }}/>
      <Drawer.Screen name='Favorites' component={FavoritesScreen} options={{
        drawerIcon: ({size, color}) => <Ionicons size={size} color={color} name='star'/>
      }}/>
    </Drawer.Navigator>
  )
}


export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <FavoriteContextProvider>
        <NavigationContainer>  
          <Stack.Navigator>
            <Stack.Screen name='Drawer' 
            component={DrawerNavigator}
            options={{
            // title:"Categories",
              headerShown: false,
              headerStyle: { backgroundColor: "#333"},
              headerTintColor: "white",
              contentStyle: {backgroundColor: "#ccc"}
            }}/>
            <Stack.Screen options={{
              title:"Categories",
              headerStyle: { backgroundColor: "#333"},
              headerTintColor: "white",
              contentStyle: {backgroundColor: "#ccc"}
            }}
            name='MealsOverview' 
            component={MealsOverviewScreen}/>
            <Stack.Screen options={{
              title:"Categories",
              headerStyle: { backgroundColor: "#333"},
              headerTintColor: "white",
              contentStyle: {backgroundColor: "#ccc"},
              //  
            }}
            name='MealsDetails' 
            component={MealDetailsScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </FavoriteContextProvider>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
 
  },
});
