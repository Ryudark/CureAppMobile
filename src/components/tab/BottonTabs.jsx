import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Principal from '../principal/Principal.jsx'
import Settings from '../settings/Settings'
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottonTabs() {
    return (
    //   <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Principal} />
          <Tab.Screen name="Propiedades" component={Settings} options={{
            drawerIcon: ()=> <Ionicons name="settings" size={24} color="black" />
          }}/>
        </Tab.Navigator>
    //   </NavigationContainer>
    );
  }