import React from "react";
import { View } from "react-native-web";
import { useSelector } from "react-redux";
import Login from "../components/Login";
import { NavigationContainer } from "@react-navigation/native";
import Nav from "../components/nav/Nav";
import Tab from "./tab/BottonTabs";

const HomeLogin = () => {
  const userExist = useSelector((state) => state.userData);
  if (userExist.loginSuccess) return (
    // <NavigationContainer>
      <Nav />
    //   <Tab />
    // </NavigationContainer>
    );
  return <Login />;
};

export default HomeLogin;
