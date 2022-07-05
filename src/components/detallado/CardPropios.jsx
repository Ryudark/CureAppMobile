import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Carousel from 'react-native-snap-carousel'
import Card from "../card/Card";
import CardsPropios from "../card/CardsPropios";

const widthScreen = Dimensions.get("window").width

export default function CardPropios({ route }) {
    const post = useSelector(state => state.postPropios)

    return (
        <Carousel
            layout={"default"}
            data={post}
            sliderWidth={widthScreen}
            itemWidth={widthScreen}
            itemHeight={250}
            renderItem={({ item: repo }) => (
                <CardsPropios {...repo} />
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