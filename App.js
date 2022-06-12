import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import store from "./src/Redux/Store/store";
import HomeLogin from "./src/components/Home";
import HomeNavigation from "./src/Navigation/loginNavigation";

//scrollview  expo publish  onPress

//expo start -c borra cache

//configurar archivo babel

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeNavigation />
      </NavigationContainer>
    </Provider>
  );
}
