import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Nav from "./components/nav/Nav.jsx"
import { createStackNavigator } from '@react-navigation/stack';


//scrollview  expo publish  onPress

//expo start -c borra cache

//configurar archivo babel
const Stack = createStackNavigator();
export default function App() {
  return (
   
      <NavigationContainer>
        <Nav/>
        
    
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
