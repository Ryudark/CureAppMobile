import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, Image, Text, Pressable, View } from "react-native";
import BottonTabs from "../tab/BottonTabs.jsx";
import About from "../about/About.jsx";
import Settings from "../settings/Settings.jsx";
import Testimony from "../testimony/Testimony.jsx";

const Drawer = createDrawerNavigator();

const IconComponent = (props) => {
  return (
    <Pressable onPress={props.onPress}>
      <View style={styles.iconPerfil}>
        <FontAwesome name="user-circle-o" size={35} color="#1d3454" />
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
          drawerActiveBackgroundColor: "#1d3454",
        }}
      />
      <Drawer.Screen
        name="perfil"
        component={Settings}
        options={{ title: "Perfil", headerTransparent: true }}
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
  header: {
    backgroundColor: "rgb(36,184,176,0.90)",
  },
  iconPerfil: {
    marginLeft: 20,
  },
  title: {
    marginLeft: "45%",
    color: "#1d3454",
  },
});
