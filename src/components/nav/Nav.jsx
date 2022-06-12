import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import About from "../about/About.jsx";
import Principal from "../principal/Principal.jsx";
import Testimony from "../testimony/Testimony.jsx";

const Drawer = createDrawerNavigator();

export default function Nav() {
  return (
    <Drawer.Navigator
      initialRouteName="Inicio"
      useLegacyImplementation={true}
      screenOptions={{ headerShown: true }}
    >
      <Drawer.Screen
        name="Inicio"
        component={Principal}
        options={{ title: "Inicio", headerTransparent: true }}
      />
      <Drawer.Screen
        name="Nosotros"
        component={About}
        options={{ title: "Nosotros", headerTransparent: true }}
      />
      <Drawer.Screen
        name="Testimonio"
        component={Testimony}
        options={{ title: "Testimonio", headerTransparent: true }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  head: {},
});
