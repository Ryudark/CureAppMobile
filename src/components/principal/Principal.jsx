import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  dateFilter,
  getPost,
  locationFilter,
  specialityFilter,
} from "../../Redux/Actions/actions";
import CardSimple from "../card/CardSimple.jsx";
import RNPickerSelect from "react-native-picker-select";

export default function Home({ navigation }) {
  const usuario = useSelector((state) => state.userDetail);

  const [mostrar, setMostrar] = useState(false);

  const city = usuario[0].city.name;

  const country = usuario[0].country.name;

  const speciality = [
    "ALL",
    "Acompañante Terapéutico",
    "Enfermería",
    "Doctor",
    "Kinesiología",
    "Acompañante de Adulto Mayor",
    "Aplicaciones",
  ];
  const fecha = ["All", "Hoy", "Esta Semana", "Este mes"];
  const lugar = ["Cerca de ti", "Tu País", "Todos"];
  const post = useSelector((state) => state.post);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  function changeSpeciality(specialtyPatient) {
    dispatch(specialityFilter(specialtyPatient));
  }

  function changeDate(date) {
    dispatch(dateFilter(date));
  }

  function changeLocation(location) {
    dispatch(locationFilter({ location, city, country }));
  }
  if (mostrar) {
    return (
      <View>
        <TouchableOpacity
          style={styles.mostrar}
          onPress={() => setMostrar(false)}
        >
          <Image
            style={styles.backImage}
            source={require("../../assets/hos.webp")}
          />
          <Text style={styles.filtrar}>Ocultar</Text>
        </TouchableOpacity>
        <View>
          <Image
            style={styles.backImage}
            source={require("../../assets/hos.webp")}
          />
          <View style={styles.filters}>
            <View style={styles.filter}>
              <Text style={styles.text}>Especialidades</Text>
              <RNPickerSelect
                style={pickerSelectStyles}
                onValueChange={(value) => {
                  changeSpeciality(value);
                }}
                items={speciality?.map((data, index) => ({
                  key: index,
                  label: data,
                  value: data,
                }))}
              />
            </View>

            <View style={styles.filter}>
              <Text style={styles.text}>Por Fecha</Text>
              <RNPickerSelect
                onValueChange={(value) => {
                  changeDate(value);
                }}
                items={fecha?.map((data, index) => ({
                  key: index,
                  label: data,
                  value: data,
                }))}
              />
            </View>

            <View style={styles.filter}>
              <Text style={styles.text}>Por Ubicación</Text>
              <RNPickerSelect
                onValueChange={(value) => {
                  changeLocation(value);
                }}
                items={lugar?.map((data, index) => ({
                  key: index,
                  label: data,
                  value: data,
                }))}
              />
            </View>
          </View>
        </View>
        {usuario[0].professionals.length < 1 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.containerHome}
            data={post}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: repo }) => <CardSimple {...repo} />}
          />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={post}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: repo }) => (
              <TouchableHighlight
                onPress={() => navigation.navigate("Detail", repo)}
              >
                <CardSimple {...repo} />
              </TouchableHighlight>
            )}
          />
        )}
      </View>
    );
  } else {
    return (
      <View>
        <Image
          style={styles.backImage}
          source={require("../../assets/hos.webp")}
        />
        <TouchableOpacity
          onPress={() => setMostrar(true)}
          style={styles.mostrar}
        >
          <Text style={styles.filtrar}>FILTRAR</Text>
        </TouchableOpacity>
        <View style={styles.bodyHome}>
          {usuario[0].professionals.length < 1 ? (
            <View style={styles.containerHome}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={post}
                ItemSeparatorComponent={() => <Text> </Text>}
                renderItem={({ item: repo }) => <CardSimple {...repo} />}
              />
            </View>
          ) : (
            <View style={styles.containerHome}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={post}
                ItemSeparatorComponent={() => <Text> </Text>}
                renderItem={({ item: repo }) => (
                  <TouchableHighlight
                    onPress={() => navigation.navigate("Detail", repo)}
                  >
                    <CardSimple {...repo} />
                  </TouchableHighlight>
                )}
              />
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  filters: {
    backgroundColor: "rgba(36,184,184,0.50)",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,

    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  filter: {
    paddingHorizontal: 0,
    width: "30%",

    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    paddingBottom: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  containerHome: {
    paddingHorizontal: 20,
    paddingBottom: 780,
    height: "150%",
  },
  mostrar: {
    padding: 10,
    width: "100%",
    backgroundColor: "#rgba(36,184,184,0.10)",
    alignItems: "center",
    marginBottom: 10,
  },
  bodyHome: {},
  filtrar: {
    backgroundColor: "rgba(36,184,184,0.80)",
    padding: 5,
    paddingHorizontal: 70,
  },
  backImage: {
    position: "absolute",
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {},
});
