import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import Login from "../components/Login";
import Nav from "./nav/Nav";
import { View } from "react-native";

const HomeLogin = () => {
  const { islogged, isLoggin } = useSelector((state) => state);
  if (islogged) {
    return (
      <>
        <Nav />
        {isLoggin && <Loader />}
      </>
    );
  }

  return (
    <View>
      <Login />
      {isLoggin && <Loader />}
    </View>
  );
};

export default HomeLogin;
