import React from "react";
import { useEffect } from "react";
import { Text, SafeAreaView, StyleSheet, FlatList, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPost } from "../../Redux/Actions/actions";
import Carousel from 'react-native-snap-carousel'
import { View } from "react-native";
import Card from "../card/Card";
import { ScrollView } from "react-native-gesture-handler";

const widthScreen = Dimensions.get("window").width

export default function Home() {
  const post= useSelector(state=>state.post)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getPost())
  },[])
  console.log(post)
  return (
    // <SafeAreaView style={styles.containerHome}>
    //   <Text style={styles.bodyHome}>Ruta Principal</Text>
    // </SafeAreaView>
    <Carousel 
      layout={"default"}
      data={post}
      sliderWidth={widthScreen}
      itemWidth={widthScreen}
      itemHeight={250}
      renderItem={({item:repo})=>(
            <Card {...repo}/>
      )}
    />

    // <FlatList 
    //   data={post}
    //   ItemSeparatorComponent={()=> <Text> </Text>}
    //   renderItem={({item:repo})=>(
    //     <Card {...repo}/>
    //   )}
    // />
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
