import "react-native-gesture-handler"

import React,{Component} from "react";
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

import HomeActivity from './screens/HomeActivity'
import GridMenu from './screens/Grid'
import FoodItems from './screens/FoodItems'
import MobileItems from './screens/MobileItems'
import Details from './screens/Details'
//import {Signup} from "./Signup"
const Stack=createStackNavigator()
export const MyStack=()=>{
  
   return(
      <NavigationContainer>
         <Stack.Navigator>
             <Stack.Screen
             name="Login"
             component={HomeActivity}
             options={{headerShown:false}}
             />
             <Stack.Screen name="Grid" component={GridMenu} options={{title:"Menu"}}/>
             <Stack.Screen name="Food" component={FoodItems} options={{title:"Food List"}}/>
             <Stack.Screen name="Mobile" component={MobileItems} options={{title:"Mobiles"}}/>
             <Stack.Screen name="Details" component={Details} options={{title:"Details"}}/>
         </Stack.Navigator>
      </NavigationContainer>
     );

   }


