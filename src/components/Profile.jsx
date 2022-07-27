import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import * as Linking from 'expo-linking';
import { Avatar, Title, Caption, Text } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { getUserDetail } from "../Redux/Actions/actions";
import { mercadoPagoPayment } from "../Redux/Actions/actions";


export default function Profile() {
  const { userDetail, id, imageProfile } = useSelector((state) => state);

  const navigation = useNavigation();
  const dispatch= useDispatch()
  const goToAjustes = () => {
    navigation.navigate("ajustes");
  };
  const info = userDetail[0];

  function executePayment() {
    const obj = {
      professionalId: Number(userDetail[0].professionals[0].id),
    };
    let redirectTo = "";
    dispatch(mercadoPagoPayment(obj)).then((resp) => {
      if (
        resp.payload.redirectTo === "Existing Auction " &&
        resp.type === "MERCADOPAGO_PAYMENT"
      )
      console.log(resp);
      redirectTo = resp.payload.redirectTo;
      // window.location = resp.payload.redirectTo;
      if(redirectTo){
        alert('Te redireccionaremos a Mercado Pago')
        Linking.openURL(redirectTo)
      }
    }); 
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image style={styles.backImage} source={require("../assets/hos.webp")} />
      <View style={styles.userInfo}>
        <View style={styles.avatar}>
          <Avatar.Image
            source={{
              uri: imageProfile
                ? imageProfile
                : info.photo !== ""
                ? info.photo
                : "https://img2.freepng.es/20190702/tl/kisspng-computer-icons-portable-network-graphics-avatar-tr-clip-directory-professional-transparent-amp-png-5d1bfa95e508d4.2980489715621147099381.jpg",
            }}
            size={90}
          />

          <View style={styles.nameEmail}>
            <Title style={styles.title}>
              {!info ? "Name User" : `${info.name} ${info.surname}`}
            </Title>
            <Caption style={styles.caption}>
              Gracias por usar ClickCare.
            </Caption>
          </View>
        </View>
        <View style={styles.userInfoSection}>
          <View style={styles.contactContainer}>
            <Entypo name="location" size={25} color="#ff4e4e" />
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.dato}>
                {!info ? "Ubicacion de usuario" : `${info.address} `}
              </Text>
              <Text
                style={styles.dato}
              >{`${info.city.name} ${info.country.name}`}</Text>
            </View>
          </View>
          <View style={styles.contactContainer}>
            <MaterialIcons name="local-phone" size={24} color="#ff4e4e" />
            <Text style={styles.dato}>
              {!info ? "+00 - 00000000" : `${info.phone} / ${info.phone2}`}
            </Text>
          </View>
          <View style={styles.contactContainer}>
            <MaterialCommunityIcons
              name="email-check-outline"
              size={24}
              color="#ff4e4e"
            />
            <Text style={styles.dato}>
              {!info ? "user@email.com" : info.email}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.infoPremium}>
        <TouchableOpacity style={styles.infoBox} onPress={executePayment}>
          <Title style={styles.titlep}>Premium</Title>
          <Caption style={styles.titlep}>Suscripcion</Caption>
        </TouchableOpacity>

        {info.professionals.length<1?
        <TouchableOpacity style={styles.soyMedico} onPress={() => navigation.navigate('profesional')}>
          <Title style={styles.soyMedicoT}>Soy Profesional?</Title>
          <Caption style={styles.soyMedicoT}>Actualiza tus datos</Caption>
        </TouchableOpacity>
        : null
        }
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

        <TouchableOpacity onPress={goToAjustes}>
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
    backgroundColor: "rgba(29,52,84,0.6)",
    borderRadius: 20,
    paddingLeft: 15,
  },
  avatar: { marginTop: 15, flexDirection: "row" },
  nameEmail: { marginTop: 15, marginLeft: 20 },
  title: { color: "#fff" },
  caption: { color: "#fff" },
  userInfoSection: { marginTop: 20, marginBottom: 20 },
  contactContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  dato: { marginLeft: 20, color: "#fff" },

  infoPremium: {
    marginTop: 15,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    width: 360,
    backgroundColor: "rgba(29,52,84,0.6)",
    borderRadius: 20,
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
    backgroundColor: "rgba(29,52,84,0.6)",
    borderRadius: 20,
    paddingBottom: 100,
    paddingTop: 40,
  },
  itemMenu: {
    backgroundColor: "rgba(255,174,0,0.50)",
    marginTop: 10,
    padding: 15,

    flexDirection: "row",
  },
  contratos: {
    color: "#fff",
    marginLeft: 30,
  },
  backImage: {
    position: "absolute",
  },
});
