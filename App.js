import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import store from "./src/Redux/Store/store";
import HomeNavigation from "./src/Navigation/loginNavigation";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
//scrollview  expo publish  onPress

//expo start -c borra cache

//configurar archivo babel

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
          <StatusBar barStyle="light-content" backgroundColor="#24b8b8" />
          <NavigationContainer>
            <HomeNavigation />
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}
