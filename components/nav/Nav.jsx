// import { Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from "../about/About.jsx"
import Home from "../home/Home.jsx"
import Service from '../service/Service.jsx';
import Testimony from '../testimony/Testimony.jsx';

const Drawer = createDrawerNavigator();

export default function Nav(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Inicio" component={Home}/>
            <Drawer.Screen name="Nosotros" component={About}/>
            <Drawer.Screen name="Servicio" component={Service}/>
            <Drawer.Screen name="Testimonio" component={Testimony}/>
        </Drawer.Navigator>
    )
}