import { SafeAreaView, View, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserDetail } from "../Redux/Actions/actions";
import { Entypo } from "@expo/vector-icons";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";

export default function Profile() {
  const dispatch = useDispatch;

  //   useEffect(() => {
  //     dispatch(getUserDetail());
  //   }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfo}>
        <View style={styles.avatar}>
          <Avatar.Image
            source={{
              uri: "https://img2.freepng.es/20190702/tl/kisspng-computer-icons-portable-network-graphics-avatar-tr-clip-directory-professional-transparent-amp-png-5d1bfa95e508d4.2980489715621147099381.jpg",
            }}
            size={90}
          />
          <View style={styles.nameEmail}>
            <Title style={styles.title}>Name User</Title>
            <Caption style={styles.caption}>user@email.com</Caption>
          </View>
        </View>
        <View style={styles.userInfoSection}>
          <View style={styles.paisContainer}>
            <Entypo name="location" size={25} color="#24b8b8" />
            <Text style={styles.pais}>Pais de usuario</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  userInfo: {},
  avatar: { flexDirection: "row" },
  nameEmail: { marginLeft: 20 },
  title: {},
  userInfoSection: {},
  paisContainer: {
    flexDirection: "row",
  },
  pais: { color: "#1d3454" },
});
