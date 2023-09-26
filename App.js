import React from "react";
import FirstScreen from "./src/component/FirstScreen";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OverViewScreen from "./src/component/OverViewScreen";

const Stack = createNativeStackNavigator();

const App = ()=>{
  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={FirstScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="OverView" 
          component={OverViewScreen} 
          options={{headerShown: false}}/>
          
      </Stack.Navigator>
    </NavigationContainer>
  )

}

export default App;

