import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../components/Profile";
import Actualization from "../components/actualization/Actualization";
import Ajustes from "../components/configuration";
import { FontAwesome5 } from "@expo/vector-icons";
import { loader } from "../Redux/Actions/actions";

import { StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

const Stack = createStackNavigator();

export default function Profilenavigation() {
  const dispatch = useDispatch();
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
            <TouchableOpacity
              style={styles.edit}
              onPress={() => {
                dispatch(loader(true));
                setTimeout(() => {
                  navigation.navigate("EditUser");
                }, 0);
              }}
            >
              <FontAwesome5 name="user-edit" size={24} color="#24b8b8" />
            </TouchableOpacity>
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
      <Stack.Screen
        name="ajustes"
        component={Ajustes}
        options={{
          title: "salir",
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
