import React from "react";
import { useEffect } from "react";
import { Text, StyleSheet, FlatList, TouchableHighlight, View } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { dateFilter, getPost, getPostPropios, locationFilter, specialityFilter } from "../../Redux/Actions/actions";
import CardSimple from "../card/CardSimple.jsx";
import RNPickerSelect from "react-native-picker-select";

export default function PostPropios({ navigation }) {

    const usuario = useSelector(state => state.userDetail)

    const userID = usuario[0].id

    const post = useSelector(state => state.postPropios)

    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(getPostPropios(userID))
    }, [getPostPropios])

    return (
        <View>
            <FlatList
                data={post}
                ItemSeparatorComponent={() => <Text> </Text>}
                renderItem={({ item: repo }) => (
                <TouchableHighlight onPress={() => navigation.navigate('Detail', repo)}>
                    <CardSimple {...repo} />
                </TouchableHighlight>
                )}
            />
        </View>
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
