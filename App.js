import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import AddTask from "./screens/AddTask";
import TaskBoard from "./screens/TaskBoard"

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Stack = createStackNavigator();

const StackNav = () => {
  return(
  <Stack.Navigator initialRouteName="Home"  screenOptions={{
    //headerShown: false,
    //gestureEnabled: false
  }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="AddTask" component={AddTask} />
    <Stack.Screen name="TaskBoard" component={TaskBoard} />
  </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNav/>
    </NavigationContainer>
    )

}