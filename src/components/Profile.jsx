import { SafeAreaView, View, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserDetail } from "../Redux/Actions/actions";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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
            <Caption style={styles.caption}>@username</Caption>
          </View>
        </View>
        <View style={styles.userInfoSection}>
          <View style={styles.contactContainer}>
            <Entypo name="location" size={25} color="#1d3454" />
            <Text style={styles.dato}>Pais de usuario</Text>
          </View>
          <View style={styles.contactContainer}>
            <MaterialIcons name="local-phone" size={24} color="#1d3454" />
            <Text style={styles.dato}>+00-00000000</Text>
          </View>
          <View style={styles.contactContainer}>
            <MaterialCommunityIcons
              name="email-check-outline"
              size={24}
              color="#1d3454"
            />
            <Text style={styles.dato}>user@email.com</Text>
          </View>
        </View>
      </View>

      <View style={styles.infoPremium}>
        <View style={styles.infoBox}>
          <Title>Premium</Title>
          <Caption>Suscrpcion</Caption>
        </View>
        <View style={styles.divisor}></View>
        <View style={styles.infoBox}>
          <Title>10</Title>
          <Caption>Mis contratos</Caption>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  userInfo: { marginLeft: 15 },
  avatar: { marginTop: 15, flexDirection: "row" },
  nameEmail: { marginTop: 15, marginLeft: 20 },
  title: {},
  userInfoSection: { marginTop: 20 },
  contactContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  dato: { marginLeft: 20, color: "#1d3454" },
  infoPremium: {
    marginTop: 40,
    flexDirection: "row",
    borderWidth: 1,
    width: 360,
  },
  infoBox: {
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 30,
    marginRight: 25,
  },
  divisor: {
    marginRight: 15,
    marginLeft: 30,
    borderRightWidth: 1,
  },
});
