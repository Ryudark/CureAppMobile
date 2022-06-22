import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../components/Profile";
import Actualization from "../components/actualization/Actualization";
import { FontAwesome5 } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

const Stack = createStackNavigator();

export default function Profilenavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerStyle: styles.head,
        headerTitleStyle: styles.title,
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({ navigation }) => ({
          title: "",
          headerTransparent: true,
          headerRight: () => (
            <Pressable
              style={styles.edit}
              onPress={() => navigation.navigate("EditUser")}
            >
              <FontAwesome5 name="user-edit" size={24} color="black" />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="EditUser"
        component={Actualization}
        options={{
          title: "Actualiza tus datos",
          headerTransparent: false,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  edit: {
    marginTop: 20,
    marginRight: 30,
  },
});
