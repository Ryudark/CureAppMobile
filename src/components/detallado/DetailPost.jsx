import React from "react";
import { useEffect } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPost } from "../../Redux/Actions/actions";
import Carousel from 'react-native-snap-carousel'
import Card from "../card/Card";

const widthScreen = Dimensions.get("window").width

export default function DetailPost({ route }) {
    const compararId = route.params.id
    const post = useSelector(state => state.post)
    const filtro = post.filter(filter => filter.id === compararId)
    const newPost = filtro.concat(post)

    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getPost())
    // }, [getPost])


    return (
        <Carousel
            layout={"default"}
            data={newPost}
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