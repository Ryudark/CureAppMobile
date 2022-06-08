import React from "react";
import { View } from "react-native-web";
import { useSelector } from "react-redux";
import Login from "../components/Login";
import Nav from "../components/nav/Nav";

const HomeScreen = () => {
  const userExist = useSelector((state) => state.userData.loginSuccess);
  return <View> {userExist ? <Nav /> : <Login />} </View>;
};

export default HomeScreen;
