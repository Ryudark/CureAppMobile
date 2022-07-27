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
  Alert,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import {
  createUsers,
  getCity,
  getCountry,
  getRegion,
} from "../../Redux/Actions/actions";
import RNPickerSelect from "react-native-picker-select";

import { useNavigation } from "@react-navigation/native";

export default function Settings() {
  const country = useSelector((state) => state.country);
  const region = useSelector((state) => state.region);
  const city = useSelector((state) => state.city);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    surname: "",
    phone: "",
    address: "",
    age: "",
    document: "",
    phone2: "",
    state: "",
    city: "",
    country: "",
    photo:""
  });

  const [viewPassword, setViewPassword]= useState()

  const [fecha, setFecha] = useState(new Date())

  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)

  function changeDateIni(event, selectedDate) {
    const currentDate = selectedDate || fecha
    setFecha(currentDate)
    const date = new Date(currentDate)
    const actualDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    setUser(prev => ({ ...prev, age: actualDate }))
    setShow(false)
  }

  function changeEmail(email) {
    setUser({ ...user, email })
  }
  function changePassword(password) {
    setViewPassword(password)
    setUser({ ...user, password })
  }
  function changeName(name) {
    setUser({ ...user, name })
  }
  function changeSurname(surname) {
    setUser({ ...user, surname })
  }
  function changePhone(phone) {
    setUser({ ...user, phone })
  }
  function changeAddress(address) {
    setUser({ ...user, address })
  }

  function changeDocument(document) {
    setUser({ ...user, document })
  }
  function changePhone2(phone2) {
    setUser({ ...user, phone2 })
  }
  function changeState(state) {
    setUser({ ...user, state })
  }
  function changeCity(city) {
    setUser({ ...user, city })
  }
  function changeCountry(country) {
    setUser({ ...user, country })
  }

  function showMode(currentMode) {
    setShow(true)
    setMode(currentMode)
  }

  async function onSubmit() {
    if (!user.email) alert('ingrese datos')
    else {
      try {
        await dispatch(createUsers(user))
        alert('usuario creado, POR FAVOR REVISE SU CORREO PARA VALIDAR')
        navigation.navigate("Login")
      }
      catch (e) {
        Alert.alert(Object.keys(e.response.data.errors[0])[0], Object.values(e.response.data.errors[0])[0])
      }
    }
  }
  useEffect(() => {
    dispatch(getCountry());
  }, [dispatch]);
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
      <Image
        style={styles.backImage}
        source={require("../../assets/hos.webp")}
      />

      <View style={styles.containerInfo}>
        <View style={styles.containerInput}>
          <MaterialCommunityIcons
              name="email-check-outline"
              size={24}
              color="#26b8b8"
              style={{ marginTop: 18 }}
          />
          <TextInput
            value={user.email}
            placeholder={" Email"}
            onChangeText={(email) => changeEmail(email)}
            keyboardType="email-address"
            style={styles.input}
          />
        </View>
      </View>

      <View style={styles.containerInfo}>
        <View style={styles.containerInput}>
          <MaterialCommunityIcons
              name="onepassword"
              size={24}
              color="#26b8b8"
              style={{ marginTop: 18 }}
          />
          <TextInput value={user.password} onChangeText={password => changePassword(password)} 
            placeholder={"Password"} secureTextEntry={true} style={styles.input} />
          {/* <Text style={styles.text}>Tu Password: {viewPassword}</Text> */}
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
          <TextInput value={user.name} 
          placeholder={"Nombres"} onChangeText={name => changeName(name)} style={styles.input} />
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
          <TextInput value={user.surname} 
          placeholder={"Apellidos"} onChangeText={surname => changeSurname(surname)} style={styles.input} />
        </View>
      </View>

      <View style={styles.containerInfo}>
        <View style={styles.containerFecha}>
        <MaterialIcons name="date-range" size={24} color="#26b8b8" />
          <View style={styles.date}>
            <TouchableHighlight onPress={() => showMode('date')}>
              <Text style={styles.textFecha}>Fecha de Nacimiento</Text>
            </TouchableHighlight>
            <Text style={styles.userAge}>{user.age}</Text>
          </View>
          {show && (<DateTimePicker
            testID='dateTimePicker'
            value={fecha}
            mode={mode}
            is24Hour={true}
            display='default'
            onChange={changeDateIni}
          />)}
        </View>
      </View>
        
      <View style={styles.containerInfo}>
        <View style={styles.containerInput}>
        <MaterialIcons name="local-phone" size={24} color="#26b8b8" />
          <TextInput
            value={user.phone}
            onChangeText={(phone) => changePhone(phone)}
            keyboardType="numeric"
            style={styles.input}
            placeholder={"Telefono Principal"}
          />
        </View>
        <View style={styles.containerInput}>
        <MaterialIcons name="local-phone" size={24} color="#26b8b8" />
          <TextInput value={user.phone2} 
          placeholder={"Telefono Secundario"} onChangeText={phone2 => changePhone2(phone2)} keyboardType="numeric" style={styles.input} />
        </View>
      </View>

      <View style={styles.containerInfo}>
        <View style={styles.containerInput}>
          <AntDesign 
                  name="idcard"
                  size={24}
                  color="#26b8b8"
                  style={{ marginTop: 18 }}
          />
          <TextInput
            value={user.document}
            onChangeText={(document) => changeDocument(document)}
            keyboardType="numeric"
            style={styles.input}
            placeholder={"Documento"}
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
            value={user.address}
            onChangeText={(address) => changeAddress(address)}
            style={styles.input}
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

      <TouchableHighlight onPress={onSubmit} style={styles.butonContainer}>
        <Text style={styles.textB}>Crear Usuario</Text>
      </TouchableHighlight>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
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

