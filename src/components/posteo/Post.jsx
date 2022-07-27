import React from "react";
import { useEffect, useState } from "react";
import { MaterialIcons, AntDesign, Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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

      <View style={styles.containerInfo}>
        <View style={styles.containerInput}>
          <MaterialCommunityIcons
                name="rename-box"
                size={24}
                color="#26b8b8"
                style={{ marginTop: 18 }}
          />
          <TextInput
            value={user.namePatient}
            onChangeText={(name) => changeName(name)}
            style={styles.input}
            placeholder={"Nombre del Paciente"}
          />
        </View>
      </View>

      <View style={styles.containerInfo}>
        <View style={styles.containerInput}>
          <MaterialCommunityIcons
                name="rename-box"
                size={24}
                color="#26b8b8"
                style={{ marginTop: 18 }}
          />
          <TextInput
            value={user.age}
            onChangeText={(age) => changeAge(age)}
            keyboardType="numeric"
            style={styles.input}
            placeholder={"Edad del Paciente"}
          />
        </View>
      </View>

      <View style={styles.containerInfo}>
        <View style={styles.containerInput}>
        <MaterialIcons name="local-phone" size={24} color="#26b8b8" />
          <TextInput
            value={user.contact_phone}
            onChangeText={(contact_phone) => changePhone(contact_phone)}
            keyboardType="numeric"
            style={styles.input}
            placeholder={"Telefono del contacto"}
          />
        </View>
      </View>

      <View style={styles.containerInfo}>
        <View>
        <AntDesign name="areachart" size={24} color="#26b8b8" />
          <TextInput
            multiline={true}
            numberOfLines={3}
            onChangeText={(need) => changeNeed(need)}
            placeholder={"Explique la necesidad"}
          />
        </View>
      </View>
      
      <View style={styles.containerInfo}>
        <View style={styles.containerFecha}>
        <MaterialIcons name="date-range" size={24} color="#26b8b8" />
          <TouchableHighlight onPress={() => showModeI("date")}>
            <Text style={styles.textFecha}>Escoja Fecha Inicio</Text>
          </TouchableHighlight>
          <Text style={styles.userAge}>{user.date_ini}</Text>
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
        <View style={styles.containerFecha}>
        <MaterialIcons name="date-range" size={24} color="#26b8b8" />
          <TouchableHighlight onPress={() => showModeF("date")}>
            <Text style={styles.textFecha}>Escoja Fecha Fin</Text>
          </TouchableHighlight>
          <Text style={styles.userAge}>{user.date_fin}</Text>
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
      <View style={styles.containerInfo}>
        <View style={styles.containerFecha}>
        <MaterialIcons name="date-range" size={24} color="#26b8b8" />
          <TouchableHighlight onPress={() => showModeHI("time")}>
            <Text style={styles.textFecha}>Escoja Hora inicio</Text>
          </TouchableHighlight>
          <Text style={styles.userAge}>{user.availableTime_0}</Text>
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
        <View style={styles.containerFecha}>
          <MaterialIcons name="date-range" size={24} color="#26b8b8" />
          <TouchableHighlight onPress={() => showModeHF("time")}>
            <Text style={styles.textFecha}>Escoja Hora Fin</Text>
          </TouchableHighlight>
          <Text style={styles.userAge}>{user.availableTime_1}</Text>
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

      <View style={styles.containerInfo}>
        <View style={styles.containerInfoSelect}>
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
      </View>
      <View style={styles.containerInfo}>
        <View style={styles.containerInfoSelect}>
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
        <View style={styles.containerInfoSelect}>
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
        <View style={styles.containerInfoSelect}>
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

      <View style={styles.containerInfo}>
        <View style={styles.containerInput}>
          <Entypo 
            name="address"
            size={24}
            color="#26b8b8"
            style={{ marginTop: 18 }}
          />
          <TextInput
            value={user.addressPatient}
            onChangeText={(addressPatient) => changeAddressP(addressPatient)}
            style={styles.input}
            placeholder={"Dirección del paciente"}
          />
        </View>
      </View>

      <View style={styles.containerInfo}>
        <View style={styles.containerInput}>
          <Entypo 
            name="address"
            size={24}
            color="#26b8b8"
            style={{ marginTop: 18 }}
          />
          <TextInput
            value={user.locationReference}
            onChangeText={(locationReference) => changeAddress(locationReference)}
            style={styles.input}
            placeholder={"Referencia de la dirección"}
          />
        </View>
      </View>

      <TouchableHighlight onPress={onSubmit} style={styles.butonContainer}>
        <Text style={styles.textB}>Crear Post</Text>
      </TouchableHighlight>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageBack: {
    position: "absolute",
  },
  container: {},
  containerInfo: {
    backgroundColor: "rgba(29,52,84,0.6)",
    borderRadius: 20,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  name: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  input: {
    borderBottomWidth: 1,
    padding: 5,
    borderBottomColor: "#fff",
    width: 220,
    color: "#fff",
  },
  textArea: {
    height: 60,
  },
  containerInput: {
    width: "80%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 25,
    marginTop: 5,
  },
  containerFecha: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "80%",
    marginLeft: 25,
    marginTop: 20,
    marginBottom: 10,
  },
  textFecha: {
    fontSize: 20,
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 15,
    paddingHorizontal: 5,
  },
  userAge: {
    backgroundColor: "rgba(36,184,184,0.9)",
    borderRadius: 15,
    paddingHorizontal: 50,
  },
  date: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    flexDirection: "column",
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
    color: "#fff",
    fontSize: 18,
    marginLeft: 15,
    textShadowColor: "#7a7979",
  },
  textB: {
    color: "#1d3454",
    fontSize: 18,

    textShadowColor: "#7a7979",
  },
  containerInfoSelect: {
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    paddingHorizontal: 30,
  },
  select: {
    backgroundColor: "red",
  },

  contentLogo: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  logo: { width: 50, height: 36 },
  logotxt: { width: 60, height: 10 },
  error: {
    textAlign: "center",
    color: "#1d3454",
    marginBottom: 10,
    textShadowRadius: 1,
    textShadowColor: "#7a7979",
  },
  backImage: {
    position: "absolute",
  },
});
