
import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";

export default function Home() {
  return (
    <SafeAreaView style={styles.containerHome}>
      <Text style={styles.bodyHome}>Ruta Principal</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerHome: {
    height: "100%",
  },

  bodyHome: {
    marginTop: 90,
  },
});
