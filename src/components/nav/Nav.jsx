
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from "../about/About.jsx"
import Principal from "../principal/Principal.jsx"
import Service from '../service/Service.jsx';
import Testimony from '../testimony/Testimony.jsx';
import BottonTabs from '../tab/BottonTabs.jsx';

const Drawer = createDrawerNavigator();

export default function Nav(){
    return(
        <Drawer.Navigator initialRouteName="Inicio" useLegacyImplementation={true}>
            <Drawer.Screen name="Inicio" component={Principal}   />
            <Drawer.Screen name="Nosotros" component={About}/>
            <Drawer.Screen name="Perfil" component={BottonTabs}/> 
            <Drawer.Screen name="Testimonio" component={Testimony}/>
        </Drawer.Navigator>
    )
}