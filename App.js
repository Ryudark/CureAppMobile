import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Nav from "./components/nav/Nav.jsx"
//scrollview  expo publish  onPress

//expo start -c borra cache

//configurar archivo babel
export default function App() {
  return (
    <NavigationContainer>
      <Nav />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
