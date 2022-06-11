import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { userLogin, noError } from "../Redux/Actions/actions";
import Errores from "./Errores";

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const errorExist = useSelector((state) => state.error);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValue) => {
      dispatch(userLogin(formValue));
    },
  });

  const goToSingUp = () => {
    navigation.navigate("Sing UP");
  };

  useEffect(() => {
    setTimeout(() => {
      if (errorExist.isError) dispatch(noError());
    }, 5000);
  }, [errorExist]);
  return (
    <View style={styles.formContainer}>
      <View style={styles.contentLogo}>
        <Image
          style={styles.logo}
          source={require("../../src/assets/logoClickCareicono.png")}
        />
        <Image
          style={styles.logotxt}
          source={require("../../src/assets/logotxt.png")}
        />
      </View>

      <TextInput
        placeholder="User or Email"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.email}
        onChangeText={(text) => formik.setFieldValue("email", text)}
      />
      <Text style={styles.error}>{formik.errors.email}</Text>

      <TextInput
        placeholder="Enter your password"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      <Text style={styles.error}>{formik.errors.password}</Text>
      <View style={styles.butonContainer}>
        <TouchableOpacity style={styles.btnL} onPress={formik.handleSubmit}>
          <Text style={styles.log}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.btnL, marginTop: 20 }}
          onPress={goToSingUp}
        >
          <Text style={styles.log}>Sing Up</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.forgot}>
        <Text style={styles.fpas}>Forgot your password ?</Text>
      </TouchableOpacity>

      {errorExist.isError ? <Errores message={errorExist.message} /> : <View />}
    </View>
  );
};

const initialValues = () => {
  return {
    email: "",
    password: "",
  };
};
const validationSchema = () => {
  return {
    email: Yup.string().required("Please enter your Username or Email"),
    password: Yup.string().required("Please enter your Password"),
  };
};

const styles = StyleSheet.create({
  contentLogo: {
    flexDirection: "column",
    marginTop: 110,
    marginBottom: 60,
    alignItems: "center",
  },
  logo: {
    marginLeft: 25,
    width: 155,
    height: 111,
    marginBottom: 30,
  },
  logotxt: {
    width: 180,
    height: 30,
  },
  input: {
    marginHorizontal: 20,
    borderWidth: 1,
    padding: 15,
    borderRadius: 25,
    borderColor: "#24b8b8",
  },
  error: {
    textAlign: "center",
    color: "#1d3454",
    marginBottom: 10,
    textShadowRadius: 1,
    textShadowColor: "#7a7979",
  },
  butonContainer: {
    marginTop: 5,
    alignItems: "center",
    flexDirection: "column",
    paddingHorizontal: 60,
  },

  btnL: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 25,
    elevation: 3,
    backgroundColor: "#24b8b8",
    alignSelf: "stretch",
  },

  log: {
    color: "#1d3454",
    fontSize: 20,
    textShadowRadius: 20,
    textShadowColor: "#7a7979",
  },
  forgot: {
    alignItems: "center",
    marginTop: 20,
  },
  fpas: {
    fontSize: 12,
    color: "#1d3454",
    textShadowRadius: 1,
    textShadowColor: "#7a7979",
  },
});

export default Login;
