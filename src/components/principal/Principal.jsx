import React from "react";
import { useEffect } from "react";
import { Text, SafeAreaView, StyleSheet, FlatList, Dimensions, TouchableHighlight } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPost } from "../../Redux/Actions/actions";
import Carousel from 'react-native-snap-carousel'
import { View } from "react-native";
import Card from "../card/Card";
import CardSimple from "../card/CardSimple.jsx";
import { ScrollView } from "react-native-gesture-handler";

const widthScreen = Dimensions.get("window").width

export default function Home({navigation}) {


  const post= useSelector(state=>state.post)
  const actualizar=0
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getPost())
  },[getPost])


  function idUpdate(id){
    actualizar=id
    return console.log(actualizar)
  }


  return (
    
    <FlatList 
      data={post}
      ItemSeparatorComponent={()=> <Text> </Text>}
      renderItem={({item:repo})=>(
        <TouchableHighlight onPress={()=>navigation.navigate('Detail',repo)}>
          <CardSimple {...repo}/>
        </TouchableHighlight>
      )}
    />

    // <Carousel 
    //   layout={"default"}
    //   data={post}
    //   sliderWidth={widthScreen}
    //   itemWidth={widthScreen}
    //   itemHeight={250}
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
