import React from "react";
import { useEffect, useState } from "react";
import {
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Modal,
  Image,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import {
  editUser,
  getCity,
  getCountry,
  getRegion,
  loader,
  saveImage,
} from "../../Redux/Actions/actions";
import { useFormik } from "formik";
import * as Yup from "yup";
import DateTimePicker from "@react-native-community/datetimepicker";
import RNPickerSelect from "react-native-picker-select";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const defaultDate = new Date(1999, 0, 1);

export default function Actualization() {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const { userDetail, dataLog, id, imageProfile } = useSelector(
    (state) => state
  );
  const info = userDetail[0];

  const formik = useFormik({
    initialValues: initialValues(info, imageProfile),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValue) => {
      if (formValue.password !== dataLog.password) {
        return alert("Verifique su contraseña");
      } else {
        goToProfile();
        setVisible(false);

        dispatch(editUser(formValue));
      }
    },
  });
  console.log("ksksdkdkkd", imageProfile);
  const goToProfile = () => {
    navigation.navigate("Profile");
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      dispatch(saveImage(result.uri));
    }
  };

  const choosePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      dispatch(saveImage(result.uri));
    }
  };

  const [modal, setModal] = useState(false);
  const [visible, setVisible] = useState(false);
  const [fecha, setFecha] = useState(defaultDate);
  const [show, setShow] = useState(false);

  const country = useSelector((state) => state.country);
  const region = useSelector((state) => state.region);
  const city = useSelector((state) => state.city);

  useEffect(() => {
    dispatch(loader(false));
  }, []);

  function showModeHandler(visible) {
    setShow(visible);
  }

  useEffect(() => {
    dispatch(getCountry());
  }, [dispatch]);
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image
        style={styles.backImage}
        source={require("../../assets/hos.webp")}
      />
      <View style={styles.containerInfo}>
        <View style={styles.photo}>
          <View style={styles.imagen}>
            <TouchableOpacity
              onPress={() => {
                setModal(true);
              }}
            >
              <View style={styles.photImageBackG}>
                <ImageBackground
                  source={{
                    uri: imageProfile
                      ? imageProfile
                      : info.photo
                      ? info.photo
                      : "https://img2.freepng.es/20190702/tl/kisspng-computer-icons-portable-network-graphics-avatar-tr-clip-directory-professional-transparent-amp-png-5d1bfa95e508d4.2980489715621147099381.jpg",
                  }}
                  style={styles.photoImage}
                  imageStyle={styles.imageP}
                >
                  <View>
                    <Entypo name="camera" size={30} color="#1d3454" />
                  </View>
                </ImageBackground>
              </View>

              <Modal transparent visible={modal}>
                <View>
                  <View
                    style={{
                      height: "100%",
                      width: "100%",
                      backgroundColor: "rgba(1,1,1,0.5)",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        marginTop: "100%",
                        height: "51%",
                        width: "100%",
                        backgroundColor: "#fff",
                        borderTopLeftRadius: 50,
                        borderTopRightRadius: 50,
                      }}
                    >
                      <View
                        style={{
                          marginTop: 20,
                          marginBottom: 10,
                          alignItems: "center",
                        }}
                      >
                        <Image
                          style={{ width: 50, height: 36 }}
                          source={require("../../assets/logoClickCareicono.png")}
                        />
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            color: "#1d3454",
                            marginTop: 10,
                          }}
                        >
                          Cambia tu foto de perfil
                        </Text>
                      </View>

                      <TouchableOpacity
                        onPress={() => {
                          setModal(false);
                          takePhoto();
                        }}
                        style={{ ...styles.butonContainer, marginTop: 5 }}
                      >
                        <Text style={styles.textB}>Camara</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          setModal(false);
                          choosePhoto();
                        }}
                        style={{ ...styles.butonContainer, marginTop: 5 }}
                      >
                        <Text style={styles.textB}>Subir Foto</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          setModal(false);
                        }}
                        style={{ ...styles.butonContainer, marginTop: 5 }}
                      >
                        <Text style={styles.textB}>Cancelar</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
            </TouchableOpacity>
            <Text style={styles.name}>{`${info.name} ${info.surname}`}</Text>
          </View>
        </View>
      </View>

      <View style={styles.containerInfo}>
        <View style={styles.containerInput}>
          <MaterialCommunityIcons
            name="email-check-outline"
            size={24}
            color="#26b8b8"
            style={{ marginTop: 18 }}
          />
          <TextInput
            value={formik.values.email}
            placeholder={info.email + " (Email)"}
            onChangeText={(text) => formik.setFieldValue("email", text)}
            keyboardType="email-address"
            style={styles.input}
          />
        </View>
      </View>

      <View style={styles.containerInfo}>
        <View style={styles.containerInput}>
          <FontAwesome
            name="user-o"
            size={24}
            color="#26b8b8"
            style={{ marginTop: 18 }}
          />
          <TextInput
            value={formik.values.name}
            placeholder={info.name + " (Nombre(s))"}
            onChangeText={(name) => formik.setFieldValue("name", name)}
            style={styles.input}
          />
        </View>
        <View style={styles.containerInput}>
          <MaterialIcons
            name="drive-file-rename-outline"
            size={24}
            color="#26b8b8"
            style={{ marginTop: 18 }}
          />
          <TextInput
            value={formik.values.surname}
            placeholder={info.surname + " (Apellido(s))"}
            onChangeText={(surname) => formik.setFieldValue("surname", surname)}
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.containerInfo}>
        <View style={styles.containerFecha}>
          <MaterialIcons name="date-range" size={24} color="#26b8b8" />
          <View style={styles.date}>
            <TouchableOpacity onPress={() => showModeHandler(true)}>
              <Text style={styles.textFecha}>Fecha de nacimiento</Text>
            </TouchableOpacity>
            <Text style={styles.userAge}>{formik.values.age.toString()}</Text>
          </View>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={fecha}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={(event, selectedDate) => {
                showModeHandler(false);
                formik.setFieldValue("age", selectedDate);
              }}
            />
          )}
        </View>
      </View>
      <View style={styles.containerInfo}>
        <View style={styles.containerInput}>
          <MaterialIcons name="local-phone" size={24} color="#26b8b8" />
          <TextInput
            value={formik.values.phone}
            placeholder={info.phone + " (Telefono principal)"}
            onChangeText={(phone) => formik.setFieldValue("phone", phone)}
            keyboardType="numeric"
            style={styles.input}
          />
        </View>
        <View style={styles.containerInput}>
          <MaterialIcons name="local-phone" size={24} color="#26b8b8" />
          <TextInput
            value={formik.values.phone2}
            placeholder={info.phone + " (Alternativo)"}
            onChangeText={(phone2) => formik.setFieldValue("phone2", phone2)}
            keyboardType="numeric"
            style={styles.input}
          />
        </View>
      </View>

      <View style={styles.containerInfo}>
        <View style={styles.containerInput}>
          <FontAwesome name="id-card-o" size={24} color="#26b8b8" />
          <TextInput
            value={formik.values.document}
            placeholder={info.document + " (Identificacion)"}
            onChangeText={(document) =>
              formik.setFieldValue("document", document)
            }
            keyboardType="numeric"
            style={styles.input}
          />
        </View>
        <View style={styles.containerInput}>
          <Entypo name="address" size={24} color="#26b8b8" />
          <TextInput
            value={formik.values.address}
            placeholder={info.address + " (Domicilio)"}
            onChangeText={(address) => formik.setFieldValue("address", address)}
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
              formik.setFieldValue("country", value);
            }}
            items={country?.map((data, index) => ({
              key: index,
              label: data.name,
              value: data.name,
            }))}
            style={pickerSelectStyles}
          />
        </View>
        <View style={styles.containerInfoSelect}>
          <Text style={styles.text}>Estado</Text>
          <RNPickerSelect
            style={pickerSelectStyles}
            onValueChange={(value) => {
              dispatch(getCity(value));
              formik.setFieldValue("state", value);
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
            style={pickerSelectStyles}
            onValueChange={(value) => {
              formik.setFieldValue("city", value);
            }}
            items={city?.map((data, index) => ({
              key: index,
              label: data.name,
              value: data.name,
            }))}
          />
        </View>
      </View>
      <TouchableHighlight
        onPress={() => setVisible(true)}
        style={styles.butonContainer}
      >
        <Text style={styles.textB}>Confirmar</Text>
      </TouchableHighlight>

      <Modal transparent animationType="slide" visible={visible}>
        <View>
          <View
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "rgba(1,1,1,0.5)",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ScrollView
              style={{ width: "100%", height: 10 }}
              showsVerticalScrollIndicator={false}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  marginTop: "100%",
                  height: "70%",
                  width: "100%",
                  backgroundColor: "#fff",
                  borderTopLeftRadius: 50,
                  borderTopRightRadius: 50,
                }}
              >
                <View style={styles.contentLogo}>
                  <Image
                    style={styles.logo}
                    source={require("../../assets/logoClickCareicono.png")}
                  />
                  <Image
                    style={styles.logotxt}
                    source={require("../../assets/logotxt.png")}
                  />
                </View>

                <View
                  style={{
                    width: "80%",
                    height: "10%",

                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                >
                  <Text>
                    Para confirmar tus cambios por favor ingresa nuevamente tu
                    contraseña
                  </Text>
                  <Text style={styles.error}>{formik.errors.email}</Text>
                </View>
                <View
                  style={{
                    width: "100%",

                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    marginBottom: 10,
                  }}
                >
                  <FontAwesome
                    name="lock"
                    size={24}
                    color="#26b8b8"
                    style={{ marginLeft: 50 }}
                  />
                  <TextInput
                    value={formik.values.password}
                    placeholder="ingresa tu contraseña"
                    onChangeText={(text) =>
                      formik.setFieldValue("password", text)
                    }
                    secureTextEntry={true}
                    style={{
                      ...styles.input,
                      marginRight: 40,
                      borderBottomColor: "#1d3454",
                      color: "#1d3454",
                    }}
                  />
                </View>
                <View
                  style={{
                    alignItems: "center",
                    flexDirection: "row",
                    marginTop: "10%",
                    marginBottom: "30%",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      setVisible(false);
                      goToProfile();
                    }}
                    style={{
                      ...styles.butonContainer,
                      marginTop: 0,
                      height: "35%",
                      width: "40%",
                      paddingHorizontal: -50,
                      marginRight: 5,
                    }}
                  >
                    <Text style={styles.textB}>Cancelar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={formik.handleSubmit}
                    style={{
                      ...styles.butonContainer,
                      marginTop: 0,
                      height: "35%",
                      width: "40%",
                      paddingHorizontal: -50,
                      marginLeft: 5,
                    }}
                  >
                    <Text style={styles.textB}>Guardar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}
const initialValues = (
  {
    id,
    email = "",
    name = "",
    surname = "",
    phone = "",
    address = "",
    age = defaultDate,
    document = "",
    phone2 = "",
    state = "",
    city = "",
    country = "",
    photo = "",
  },
  image
) => {
  return {
    id: id,
    photo: image ? image : photo,
    email,
    password: "",
    name,
    surname,
    phone,
    address,
    age,
    document,
    phone2,
    state: state.name,
    city: city.name,
    country: country.name,
  };
};
const validationSchema = () => {
  return {
    email: Yup.string().email("Ingrese un email valido"),
  };
};

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

  photo: { margin: 20 },
  imagen: { alignItems: "center" },
  photImageBackG: {
    height: 100,
    width: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  photoImage: {
    height: 100,
    width: 100,
  },
  imageP: {
    borderRadius: 50,
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

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    backgroundColor: "rgba(36,184,184,0.50)",
    marginTop: 10,
  },
});
