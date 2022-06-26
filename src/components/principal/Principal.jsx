import React from "react";
import { useEffect } from "react";
import { Text, StyleSheet, FlatList, TouchableHighlight, View } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { dateFilter, getPost, specialityFilter } from "../../Redux/Actions/actions";
import CardSimple from "../card/CardSimple.jsx";
import RNPickerSelect from "react-native-picker-select";

export default function Home({ navigation }) {

  const speciality = ["ALL", "Acompañante Terapéutico", "Enfermería", "Doctor", "Kinesiología", "Acompañante de Adulto Mayor", "Aplicaciones"]
  const fecha = ["All", "Hoy", "Esta Semana", "Este mes"]
  const post = useSelector(state => state.post)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost())
  }, [])

  function changeSpeciality(specialtyPatient) {
    dispatch(specialityFilter(specialtyPatient))
  }

  function changeDate(date) {
    dispatch(dateFilter(date))
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
