import React from "react";
import { StyleSheet, View, Text} from "react-native";

const Errores = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.err}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    width: 310,
    borderRadius: 12,
    backgroundColor: "rgba(0,0,0,1)",
    justifyContent: "center",
    marginTop: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  containerErr: {
    backgroundColor: "#7a7979",
  },
  err: {
    textAlign: "center",
    justifyContent: "center",
    color: "white",
    width: "60%",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

export default Errores;
