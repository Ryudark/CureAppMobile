import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import logo from "../../assets/logoClickCareicono.png";
import logotxt from "../../assets/logotxt.png";

export default function CardSimple(props) {
  const dateIni = props.date_ini;
  const dateByirde = dateIni;
  const dayB = new Date(dateByirde).getDate();
  const monthb = new Date(dateByirde).getMonth() + 1;
  const yearB = new Date(dateByirde).getFullYear();

  const date = yearB + "-" + monthb + "-" + dayB;

  return (
    <View key={props.id} style={styles.container}>
      <View style={styles.images}>
        <Image
          style={styles.image}
          source={require("../../assets/logoClickCareicono.png")}
        />
        <Image
          style={styles.logotxt}
          source={require("../../assets/logotxt.png")}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.txt}>
          Nombre del paciente: {props.namePatient}{" "}
        </Text>
        <Text style={styles.txt}>Edad del paciente: {props.agePatient} </Text>
        {/* <Text>Necesidad: {props.needs}</Text> */}
        <Text style={{ ...styles.txt, color: "#24b8b8" }}>
          Especialidad Necesitada: {props.specialty.specialty}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    backgroundColor: "rgba(29,52,84,0.6)",
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 10,
    },
    shadowOpacity: 0,
    shadowRadius: 20,
  },
  images: {
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.9)",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 18,
  },

  image: {
    width: 70,
    height: 50,
  },
  logotxt: {
    marginTop: 10,
    width: 123,
    height: 20,
  },

  details: {},
  txt: {
    color: "#fff",
    fontSize: 18,
  },
});
