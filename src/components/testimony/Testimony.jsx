import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";

export default function Testimony() {
  return (
    <SafeAreaView style={styles.containerTest}>
      <Text style={styles.bodyTest}>Ruta de Testimonios</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerTest: {
    height: "100%",
  },

  bodyTest: {
    marginTop: 90,
  },
});
