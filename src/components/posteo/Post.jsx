import React from "react";
import { useEffect, useState } from "react";
import {
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  View,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import {
  getCity,
  getCountry,
  getRegion,
  postUser,
} from "../../Redux/Actions/actions";
import RNPickerSelect from "react-native-picker-select";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Post() {
  const id = useSelector((state) => state.id);

  const userID = id;

  const speciality = [
    "Acompañante Terapéutico",
    "Enfermería",
    "Doctor",
    "Kinesiología",
    "Acompañante de Adulto Mayor",
    "Aplicaciones",
  ];

  const [fecha, setFecha] = useState(new Date());

  const [mode, setMode] = useState("date");
  const [showI, setShowI] = useState(false);
  const [showF, setShowF] = useState(false);
  const [showHI, setShowHI] = useState(false);
  const [showHF, setShowHF] = useState(false);

  const country = useSelector((state) => state.country);
  const region = useSelector((state) => state.region);
  const city = useSelector((state) => state.city);
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    date_post: "",
    hour_post: "",
    date_ini: "",
    date_fin: "",
    needs: "",
    locationReference: "",
    contact_phone: "",
    id_users: userID,
    state: "",
    city: "",
    country: "",
    specialtyPatient: "",
    agePatient: "",
    namePatient: "",
    availableTime_0: "",
    availableTime_1: "",
    addressPatient: "",
  });

  function changeDate() {
    const date = new Date();
    const actualDate =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    const actualHour = date.toLocaleTimeString();
    setUser({ ...user, date_post: actualDate, hour_post: actualHour });
  }

  function changeDateIni(event, selectedDate) {
    const currentDate = selectedDate || fecha;
    setFecha(currentDate);
    const date = new Date(currentDate);
    const actualDate =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    setUser((prev) => ({ ...prev, date_ini: actualDate }));
    setShowI(false);
  }

  function changeDateFin(event, selectedDate) {
    const currentDate = selectedDate || fecha;
    setFecha(currentDate);
    const date = new Date(currentDate);
    const actualDate =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    setUser((prev) => ({ ...prev, date_fin: actualDate }));
    setShowF(false);
  }

  function changeHourIni(event, selectDate) {
    const currentDate = selectDate || fecha;
    setFecha(currentDate);
    const date = new Date(currentDate);
    const actualHour = date.getHours();
    setUser((prev) => ({ ...prev, availableTime_0: Number(actualHour) }));
    setShowHI(false);
  }

  function changeHourFin(event, selectDate) {
    const currentDate = selectDate || fecha;
    setFecha(currentDate);
    const date = new Date(currentDate);
    const actualHour = date.getHours();
    setUser((prev) => ({ ...prev, availableTime_1: Number(actualHour) }));
    setShowHF(false);
  }

  function changeName(namePatient) {
    setUser({ ...user, namePatient });
  }

  function changeAge(agePatient) {
    setUser({ ...user, agePatient });
  }

  function changeNeed(needs) {
    setUser({ ...user, needs });
  }

  function showModeI(currentMode) {
    setShowI(true);
    setMode(currentMode);
  }
  function showModeF(currentMode) {
    setShowF(true);
    setMode(currentMode);
  }
  function showModeHI(currentMode) {
    setShowHI(true);
    setMode(currentMode);
  }
  function showModeHF(currentMode) {
    setShowHF(true);
    setMode(currentMode);
  }

  function changeState(state) {
    setUser({ ...user, state });
  }

  function changeSpeciality(specialtyPatient) {
    setUser({ ...user, specialtyPatient });
  }

  function changeCity(city) {
    setUser({ ...user, city });
  }

  function changeCountry(country) {
    setUser({ ...user, country });
  }

  function changeAddress(locationReference) {
    setUser({ ...user, locationReference });
  }

  function changeAddressP(addressPatient) {
    setUser({ ...user, addressPatient });
  }

  function changePhone(contact_phone) {
    setUser({ ...user, contact_phone });
  }

  async function onSubmit() {
    changeDate();
    if (!user.namePatient) alert("ingrese datos");
    else {
      try {
        await dispatch(postUser(user));
        alert("post creado");
      } catch (e) {
        console.log(e.response.data);
        // Alert.alert(Object.keys(e.response.data.errors[0])[0], Object.values(e.response.data.errors[0])[0])
      }
    }
  }
  useEffect(() => {
    dispatch(getCountry());
    changeDate();
  }, [dispatch]);
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image
        style={styles.imageBack}
        source={require("../../assets/hos.webp")}
      />

      <View style={styles.containerInput}>
        <Text style={styles.text}>Nombre del paciente</Text>
        <TextInput
          value={user.namePatient}
          onChangeText={(name) => changeName(name)}
          style={styles.input}
        />
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.text}>Edad del paciente</Text>
        <TextInput
          value={user.age}
          onChangeText={(age) => changeAge(age)}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.text}>Telefono de Contacto</Text>
        <TextInput
          value={user.contact_phone}
          onChangeText={(contact_phone) => changePhone(contact_phone)}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>
      <View>
        <Text style={styles.text}>Explique la necesidad</Text>
        <TextInput
          multiline={true}
          numberOfLines={3}
          onChangeText={(need) => changeNeed(need)}
        />
      </View>
      <View>
        <Text>Fecha inicio: {user.date_ini}</Text>
        <View>
          <TouchableHighlight onPress={() => showModeI("date")}>
            <Text style={styles.textB}>Escoja Fecha Inicio</Text>
          </TouchableHighlight>
        </View>
        {showI && (
          <DateTimePicker
            testID="dateTimePicker"
            value={fecha}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={changeDateIni}
          />
        )}
        <Text>Fecha Fin: {user.date_fin}</Text>
        <View>
          <TouchableHighlight onPress={() => showModeF("date")}>
            <Text style={styles.textB}>Escoja Fecha Fin</Text>
          </TouchableHighlight>
        </View>
        {showF && (
          <DateTimePicker
            testID="dateTimePicker"
            value={fecha}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={changeDateFin}
          />
        )}
      </View>
      <View>
        <View>
          <Text>Hora inicio: {user.availableTime_0}</Text>
          <TouchableHighlight onPress={() => showModeHI("time")}>
            <Text style={styles.textB}>Escoja Hora inicio</Text>
          </TouchableHighlight>
        </View>
        {showHI && (
          <DateTimePicker
            testID="dateTimePicker"
            value={fecha}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={changeHourIni}
          />
        )}
        <View>
          <Text>Hora Fin: {user.availableTime_1}</Text>
          <TouchableHighlight onPress={() => showModeHF("time")}>
            <Text style={styles.textB}>Escoja Hora Fin</Text>
          </TouchableHighlight>
        </View>
        {showHF && (
          <DateTimePicker
            testID="dateTimePicker"
            value={fecha}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={changeHourFin}
          />
        )}
      </View>

      <View style={styles.containerInfoSelect}>
        <View style={styles.containerInput}>
          <Text style={styles.text}>Especialidades Necesitadas</Text>
          <RNPickerSelect
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
        <View style={styles.containerInput}>
          <Text style={styles.text}>País</Text>
          <RNPickerSelect
            onValueChange={(value) => {
              dispatch(getRegion(value));
              changeCountry(value);
            }}
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
            onValueChange={(value) => {
              dispatch(getCity(value));
              changeState(value);
            }}
            items={region?.map((data, index) => ({
              key: index,
              label: data.name,
              value: data.name,
            }))}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.text}>ciudad</Text>
          <RNPickerSelect
            onValueChange={(value) => {
              changeCity(value);
            }}
            items={city?.map((data, index) => ({
              key: index,
              label: data.name,
              value: data.name,
            }))}
          />
        </View>
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.text}>Dirección del paciente</Text>
        <TextInput
          value={user.addressPatient}
          onChangeText={(addressPatient) => changeAddressP(addressPatient)}
          style={styles.input}
        />
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.text}>Referencia de Localización</Text>
        <TextInput
          value={user.locationReference}
          onChangeText={(locationReference) => changeAddress(locationReference)}
          style={styles.input}
        />
      </View>

      <TouchableHighlight onPress={onSubmit} style={styles.butonContainer}>
        <Text style={styles.textB}>Crear</Text>
      </TouchableHighlight>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageBack: {
    position: "absolute",
  },
  container: {},
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
