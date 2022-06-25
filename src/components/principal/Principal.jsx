import React from "react";
import { useEffect } from "react";
import { Text, StyleSheet, FlatList, Dimensions, TouchableHighlight } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPost } from "../../Redux/Actions/actions";
import CardSimple from "../card/CardSimple.jsx";

export default function Home({ navigation }) {


  const post = useSelector(state => state.post)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost())
  }, [post])

  return (
    <FlatList
      data={post}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: repo }) => (
        <TouchableHighlight onPress={() => navigation.navigate('Detail', repo)}>
          <CardSimple {...repo} />
        </TouchableHighlight>
      )}
    />
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
