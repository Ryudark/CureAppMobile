import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import store, { persistor } from "./src/Redux/Store/store";
import HomeNavigation from "./src/Navigation/loginNavigation";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { PersistGate } from "redux-persist/integration/react";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";
//scrollview  expo publish  onPress

//expo start -c borra cache

//configurar archivo babel

export default function App() {
  LogBox.ignoreLogs(["ViewPropTypes will be removed from"]);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
            <StatusBar barStyle="light-content" backgroundColor="#24b8b8" />
            <NavigationContainer>
              <HomeNavigation />
            </NavigationContainer>
          </SafeAreaView>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
