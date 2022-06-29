import React from "react";
import { useEffect } from "react";
import {
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  View,
  Image,
} from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPostPropios } from "../../Redux/Actions/actions";
import CardSimple from "../card/CardSimple.jsx";

export default function PostPropios({ navigation }) {
  const usuario = useSelector((state) => state.userDetail);

  const userID = usuario[0].id;

  const post = useSelector((state) => state.postPropios);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostPropios(userID));
  }, [getPostPropios]);

  return (
    <View>
      <Image
        style={styles.imageback}
        source={require("../../assets/hos.webp")}
      />
      <FlatList
        data={post}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({ item: repo }) => (
          <TouchableHighlight
            onPress={() => navigation.navigate("DetailPost", repo)}
          >
            <CardSimple {...repo} />
          </TouchableHighlight>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageback: {
    position: "absolute",
  },
  containerHome: {
    height: "100%",
  },
  bodyHome: {
    marginTop: 90,
  },
});
