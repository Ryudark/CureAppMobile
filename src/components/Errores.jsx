import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

const Errores = ({ message }) => {
  const errorExist = useSelector((state) => state.error);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerErr}>
        <Text style={styles.err}>{message}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  containerErr: {
    justifyContent: "center",
    marginTop: 15,
    alignItems: "center",
    backgroundColor: "#7a7979",
    borderRadius: 12,
  },
  err: {
    textAlign: "center",
    color: "white",
    width: "50%",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

export default Errores;
