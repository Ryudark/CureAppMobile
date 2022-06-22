import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserDetail } from "../Redux/Actions/actions";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Avatar, Title, Caption, Text } from "react-native-paper";

export default function Profile() {
  const dispatch = useDispatch;

  //   useEffect(() => {
  //     dispatch(getUserDetail());
  //   }, []);
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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
            <Entypo name="location" size={25} color="#ff4e4e" />
            <Text style={styles.dato}>Pais de usuario</Text>
          </View>
          <View style={styles.contactContainer}>
            <MaterialIcons name="local-phone" size={24} color="#ff4e4e" />
            <Text style={styles.dato}>+00-00000000</Text>
          </View>
          <View style={styles.contactContainer}>
            <MaterialCommunityIcons
              name="email-check-outline"
              size={24}
              color="#ff4e4e"
            />
            <Text style={styles.dato}>user@email.com</Text>
          </View>
        </View>
      </View>

      <View style={styles.infoPremium}>
        <TouchableOpacity style={styles.infoBox}>
          <Title style={styles.titlep}>Premium</Title>
          <Caption style={styles.titlep}>Suscripcion</Caption>
        </TouchableOpacity>

        <TouchableOpacity style={styles.soyMedico}>
          <Title style={styles.soyMedicoT}>Soy Medico?</Title>
          <Caption style={styles.soyMedicoT}>Actualiza tus datos</Caption>
        </TouchableOpacity>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity>
          <View style={styles.itemMenu}>
            <FontAwesome5 name="hospital-user" size={24} color="#ff4e4e" />
            <Text style={styles.contratos}>Mis contratos</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.itemMenu}>
            <MaterialCommunityIcons
              name="credit-card-edit"
              size={24}
              color="#ff4e4e"
            />
            <Text style={styles.contratos}>Metodo de pago</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.itemMenu}>
            <Ionicons name="md-settings" size={24} color="#ff4e4e" />
            <Text style={styles.contratos}>Configuracion</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  userInfo: {
    marginTop: 15,
    backgroundColor: "#fff",
    paddingLeft: 15,
  },
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
    marginTop: 15,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    width: 360,
    backgroundColor: "#fff",
  },
  infoBox: {
    backgroundColor: "#1d3454",
    borderRadius: 20,
    alignItems: "center",
    padding: 20,
    marginLeft: 25,
    marginRight: 30,
  },
  titlep: {
    color: "#ffe863",
  },

  soyMedico: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#24b8b8",
    borderRadius: 20,
  },
  soyMedicoT: {
    color: "#1d3454",
  },
  menu: {
    marginTop: 15,
    backgroundColor: "#fff",
    paddingBottom: 100,
    paddingTop: 40,
  },
  itemMenu: {
    backgroundColor: "rgba(255,174,0,0.10)",
    marginTop: 10,
    padding: 15,

    flexDirection: "row",
  },
  contratos: {
    color: "#1d3454",
    marginLeft: 30,
  },
});
