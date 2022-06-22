import React from "react";
import { useEffect } from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPost } from "../../Redux/Actions/actions";

export default function Home() {
  const post= useSelector(state=>state.post)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getPost())
  })
  return (
    <SafeAreaView style={styles.containerHome}>
      <Text style={styles.bodyHome}>Ruta Principal</Text>
    </SafeAreaView>
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
