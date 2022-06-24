import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Settings from "../components/settings/Settings";
import { Image, StyleSheet, View } from "react-native";
import HomeLogin from "../components/Home";
import DetailPost from "../components/detallado/DetailPost";

const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.head,
        headerTitleStyle: styles.title,
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="Login"
        component={HomeLogin}
        options={{ title: "", headerTransparent: true }}
      />
      <Stack.Screen
        name="Sing UP"
        component={Settings}
        options={{
          title: "Ingresa tus datos",
          headerTransparent: false,
          headerRight: () => (
            <Image
              style={styles.logo}
              source={require("../assets/logoClickCareicono.png")}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailPost}
        options={{
          title: "Detalle del Post",
          headerTransparent: false,
          headerRight: () => (
            <Image
              style={styles.logo}
              source={require("../assets/logoClickCareicono.png")}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  head: {
    backgroundColor: "#71dfda",
  },
  title: {
    color: "#1d3454",
  },
  logo: {
    marginRight: 30,
    width: 55,
    height: 40,
  },
});

export default HomeNavigation;
