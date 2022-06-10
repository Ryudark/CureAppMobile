import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";

export default function About() {
  return (
    <SafeAreaView style={styles.containerAbout}>
      <Text style={styles.bodyAbout}>Ruta de About</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerAbout: {
    height: "100%",
  },

  bodyAbout: {
    marginTop: 90,
  },
});
