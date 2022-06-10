import React, { useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "../about/About.jsx";
import Home from "../home/Home.jsx";
import Service from "../service/Service.jsx";
import Testimony from "../testimony/Testimony.jsx";
import { useSelector } from "react-redux";

const Drawer = createDrawerNavigator();

export default function Nav() {
  let usuarios = useSelector((state) => state.Users);
  useEffect(() => {
    console.log(usuarios);
  }, []);
  return (
    <Drawer.Navigator initialRouteName="Inicio" useLegacyImplementation={true}>
      <Drawer.Screen name="Inicio" component={Home} />
      <Drawer.Screen name="Nosotros" component={About} />
      <Drawer.Screen name="Servicio" component={Service} />
      <Drawer.Screen name="Testimonio" component={Testimony} />
    </Drawer.Navigator>
  );
}
