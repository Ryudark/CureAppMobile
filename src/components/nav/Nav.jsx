import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, Image, Text, Pressable, View } from "react-native";
import BottonTabs from "../tab/BottonTabs.jsx";
import Profile from "../Profile.jsx";
import Settings from "../settings/Settings.jsx";
import Testimony from "../testimony/Testimony.jsx";

const Drawer = createDrawerNavigator();

const IconComponent = (props) => {
  return (
    <Pressable onPress={props.onPress}>
      <View style={styles.iconPerfil}>
        <FontAwesome name="user-circle-o" size={35} color="#fff" />
      </View>
    </Pressable>
  );
};

export default function Nav() {
  return (
    <Drawer.Navigator
      initialRouteName="Inicio"
      useLegacyImplementation={true}
      screenOptions={({ navigation }) => ({
        headerStyle: styles.logo,
        headerShown: true,
        drawerActiveTintColor: "#24b8b8",
        drawerInactiveTintColor: "#1d3454",
        drawerContentStyle: styles.drawer,

        headerLeft: (props) => (
          <IconComponent onPress={navigation.toggleDrawer} />
        ),
      })}
    >
      <Drawer.Screen
        name="Inicio"
        component={BottonTabs}
        options={{
          headerTitleStyle: styles.title,
          title: "Home",
          headerStyle: styles.header,
          drawerIcon: ({ focused }) => {
            return (
              <FontAwesome5
                name="hospital-symbol"
                size={24}
                color={focused ? "#24b8b8" : "#1d3454"}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="perfil"
        component={Profile}
        options={{
          title: "Perfil",
          headerStyle: styles.header,
          headerTitleStyle: styles.title,

          drawerIcon: ({ focused }) => {
            return (
              <FontAwesome5
                name="user-md"
                size={24}
                color={focused ? "#24b8b8" : "#1d3454"}
              />
            );
          },
        }}
      />

      <Drawer.Screen
        name="Suscripcion"
        component={Testimony}
        options={{
          title: "Suscripcion",
          headerStyle: styles.header,
          headerTitleStyle: styles.titleT,
          drawerIcon: () => {
            return <FontAwesome5 name="crown" size={24} color="#ffe863" />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawer: {
    marginTop: 80,
  },
  header: {
    backgroundColor: "#24b8b8",
  },
  iconPerfil: {
    marginLeft: 20,
  },
  title: {
    marginLeft: "45%",
    color: "#fff",
  },
  titleT: {
    marginLeft: "32%",
    color: "#fff",
  },
  item: {
    borderBottomWidth: 1,
  },
});
