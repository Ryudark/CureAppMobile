import React from "react";
import { View, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { limpiarPostPropios, loading, logout } from "../Redux/Actions/actions";
import Loader from "./Loader";

export default function Ajustes() {
  const { isLoggin } = useSelector((state) => state);
  const dispatch = useDispatch();
  const salir = () => {
    dispatch(logout());
    dispatch(limpiarPostPropios())
  };
  return (
    <View>
      <Button onPress={salir} title="salir" />
    </View>
  );
}
