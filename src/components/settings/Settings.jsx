import React from "react";
import { useEffect } from "react";
import {
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { getCity, getCountry, getRegion } from "../../Redux/Actions/actions";
import RNPickerSelect from "react-native-picker-select";

export default function Settings() {
  const country = useSelector((state) => state.country);
  const region = useSelector((state) => state.region);
  const city = useSelector((state) => state.city);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountry());
  }, [dispatch]);
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.containerInfo}>
        <View style={styles.containerInput}>
          <Text style={styles.text}>Email</Text>
          <TextInput keyboardType="email-address" style={styles.input} />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.text}>Password</Text>
          <TextInput secureTextEntry={true} style={styles.input} />
        </View>
      </View>

      <View style={styles.containerInfo}>
        <View style={styles.containerInput}>
          <Text style={styles.text}>Nombre</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.text}>Apellido</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.text}>Nombre de Usuario</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.text}>Edad</Text>
          <TextInput keyboardType="numeric" style={styles.input} />
        </View>
      </View>

      <View style={styles.containerInfo}>
        <View style={styles.containerInput}>
          <Text style={styles.text}>Telefono</Text>
          <TextInput keyboardType="numeric" style={styles.input} />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.text}>Telefono Secundario</Text>
          <TextInput keyboardType="numeric" style={styles.input} />
        </View>
      </View>

      <View style={styles.containerInfo}>
        <View style={styles.containerInput}>
          <Text style={styles.text}>Documento de Identificación</Text>
          <TextInput keyboardType="numeric" style={styles.input} />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.text}>Dirección</Text>
          <TextInput style={styles.input} />
        </View>
      </View>

      <View style={styles.containerInfoSelect}>
        <View style={styles.containerInput}>
          <Text style={styles.text}>País</Text>
          {/* <TextInput placeholder='País' style={styles.input}/> */}
          <RNPickerSelect
            onValueChange={(value) => dispatch(getRegion(country, value))}
            items={country?.map((data, index) => ({
              key: index,
              label: data.name,
              value: data.name,
            }))}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.text}>Estado</Text>
          <RNPickerSelect
            onValueChange={(value) => dispatch(getCity(region, value))}
            items={region?.map((data, index) => ({
              key: index,
              label: data.region,
              value: data.region,
            }))}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.text}>ciudad</Text>
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={city?.map((data, index) => ({
              key: index,
              label: data.city,
              value: data.city,
            }))}
          />
        </View>
      </View>

      <TouchableHighlight style={styles.butonContainer}>
        <Text style={styles.textB}>Guardar</Text>
      </TouchableHighlight>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  input: {
    marginHorizontal: 20,
    borderBottomWidth: 1,
    padding: 10,
    borderBottomColor: "#24b8b8",
    width: 300,
  },
  textArea: {
    height: 60,
  },
  containerInput: {
    marginTop: 20,
  },

  butonContainer: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 25,
    elevation: 3,
    backgroundColor: "#24b8b8",
    alignSelf: "stretch",
    marginBottom: 30,
  },
  text: {
    color: "#1d3454",
    fontSize: 18,
    marginLeft: 15,
    textShadowColor: "#7a7979",
  },
  textB: {
    color: "#1d3454",
    fontSize: 18,

    textShadowColor: "#7a7979",
  },
});
