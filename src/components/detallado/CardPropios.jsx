import React from "react";
import { useEffect } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPost } from "../../Redux/Actions/actions";
import Carousel from 'react-native-snap-carousel'
import Card from "../card/Card";

const widthScreen = Dimensions.get("window").width

export default function CardPropios({ route }) {
    const compararId = route.params.id
    const post = useSelector(state => state.postPropios)
    const filtro = post.filter(filter => filter.id === compararId)
    const newPost = filtro.concat(post)

    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getPostPropios())
    // }, [getPostPropios])


    return (
        <Carousel
            layout={"default"}
            data={post}
            sliderWidth={widthScreen}
            itemWidth={widthScreen}
            itemHeight={250}
            renderItem={({ item: repo }) => (
                <Card {...repo} />
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