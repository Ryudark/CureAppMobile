import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/drawernav";
import LoginScreen from "../Screens/login";

const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "", headerTransparent: true }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ title: "", headerTransparent: true }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
