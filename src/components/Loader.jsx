import React from "react";
import { StyleSheet, Image } from "react-native";
import AnimatedLoader from "react-native-animated-loader";

export default function Loader() {
  return (
    <AnimatedLoader
      visible={true}
      overlayColor="rgba(0,0,0,0.80)"
      source={require("../assets/loader.json")}
      animationStyle={styles.lottie}
      speed={1.5}
    >
      <Image
        style={styles.logotxt}
        source={require("../../src/assets/logotxt.png")}
      />
    </AnimatedLoader>
  );
}
const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
  logotxt: {
    width: 92,
    height: 15,
  },
});
