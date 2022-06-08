import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../Redux/Actions/actions";

const Login = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const user = useSelector((state) => state.userData);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValue) => {
      setError("");
      const { username, password } = formValue;

      if (user.username) {
        if (username !== user.username || password !== user.password) {
          setError("User or password is invalid");
        }
      } else {
        let userObj = {
          ...formValue,
          loginSuccess: true,
        };
        dispatch(userLogin(userObj));
      }
    },
  });

  const Logout = () => {
    dispatch(userLogin({}));
  };

  return (
    <View>
      <Text style={styles.title}> Welcome </Text>
      <TextInput
        placeholder="User or Email"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />
      <Text style={styles.error}>{formik.errors.username}</Text>

      <TextInput
        placeholder="Enter your password"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      <Text style={styles.error}>{formik.errors.password}</Text>

      <Button title="Login" onPress={formik.handleSubmit} />

      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

const initialValues = () => {
  return {
    username: "",
    password: "",
  };
};
const validationSchema = () => {
  return {
    username: Yup.string().required("Please enter your Username or Email"),
    password: Yup.string().required("Please enter your Password"),
  };
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  },
});

export default Login;
