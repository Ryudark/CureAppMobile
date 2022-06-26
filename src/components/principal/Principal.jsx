import React from "react";
import { useEffect } from "react";
import { Text, StyleSheet, FlatList, TouchableHighlight, View } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { dateFilter, getPost, locationFilter, specialityFilter } from "../../Redux/Actions/actions";
import CardSimple from "../card/CardSimple.jsx";
import RNPickerSelect from "react-native-picker-select";

export default function Home({ navigation }) {

  const usuario = useSelector(state => state.userDetail)

  const city= usuario[0].city.name

  const country =usuario[0].country.name


  const speciality = ["ALL", "Acompañante Terapéutico", "Enfermería", "Doctor", "Kinesiología", "Acompañante de Adulto Mayor", "Aplicaciones"]
  const fecha = ["All", "Hoy", "Esta Semana", "Este mes"]
  const lugar = ["Cerca de ti", "Tu País", "Todos"]
  const post = useSelector(state => state.post)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost())
  }, [getPost])

  function changeSpeciality(specialtyPatient) {
    dispatch(specialityFilter(specialtyPatient))
  }

  function changeDate(date) {
    dispatch(dateFilter(date))
  }

  function changeLocation(location) {
    dispatch(locationFilter({location, city, country}))
  }

  return (
    <View>
      <View>
        <Text style={styles.text}>Especialidades</Text>
        <RNPickerSelect
          onValueChange={(value) => {
            changeSpeciality(value)
          }}
          items={speciality?.map((data, index) => ({
            key: index,
            label: data,
            value: data,
          }))}
        />
      </View>
      <View>
        <Text style={styles.text}>Por Fecha</Text>
        <RNPickerSelect
          onValueChange={(value) => {
            changeDate(value)
          }}
          items={fecha?.map((data, index) => ({
            key: index,
            label: data,
            value: data,
          }))}
        />
      </View>
      <View>
        <Text style={styles.text}>Por Ubicación</Text>
        <RNPickerSelect
          onValueChange={(value) => {
            changeLocation(value)
          }}
          items={lugar?.map((data, index) => ({
            key: index,
            label: data,
            value: data,
          }))}
        />
      </View>
      <FlatList
        data={post}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({ item: repo }) => (
          <TouchableHighlight onPress={() => navigation.navigate('Detail', repo)}>
            <CardSimple {...repo} />
          </TouchableHighlight>
        )}
      />
    </View>
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
