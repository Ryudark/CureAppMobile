import React from "react";
import { View, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loading, logout } from "../Redux/Actions/actions";
import Loader from "./Loader";

export default function Ajustes() {
  const { isLoggin } = useSelector((state) => state);
  const dispatch = useDispatch();
  const salir = () => {
    dispatch(logout());
  };
  return (
    <View>
      <Button onPress={salir} title="salir" />
    </View>
  );
}
