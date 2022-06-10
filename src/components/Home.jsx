import React from "react";
import { View } from "react-native-web";
import { useSelector } from "react-redux";
import Login from "../components/Login";
import { NavigationContainer } from "@react-navigation/native";
import BottonTabs from "./tab/BottonTabs";

const HomeLogin = () => {
  const userExist = useSelector((state) => state.Users);
  if (userExist.length) return <BottonTabs />;

  return <Login />;
};

export default HomeLogin;
