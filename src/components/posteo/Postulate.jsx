import React from "react";
import { useEffect, useState } from "react";
import {
    Text,
    TextInput,
    TouchableHighlight,
    StyleSheet,
    View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import {
    postulate,
} from "../../Redux/Actions/actions";

import { useNavigation } from "@react-navigation/native";

export default function Postulate({ route }) {


    const idPost = route.params

    const id = useSelector(state => state.id)

    const userID = id
    const profesional = useSelector(state => state.userDetail)
    const idProf = profesional[0].professionals[0].id


    const [fecha, setFecha] = useState(new Date())

    const [mode, setMode] = useState('date')
    const [showI, setShowI] = useState(false)
    const [showF, setShowF] = useState(false)

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [user, setUser] = useState({
        date: "",
        offer: "",
        comment: "",
        postId: idPost,
        professionalId: idProf,
        userId: userID,
    });

    function changeDate() {
        const date = new Date()
        let dia = date.getDate()
        let mes = (date.getMonth() + 1)
        const año = date.getFullYear()

        if (dia < 10) {
            dia = '0' + dia
        }
        if (mes < 10) {
            mes = '0' + mes
        }
        const actualDate = año + "-" + mes + "-" + dia
        setUser({ ...user, date: actualDate })
    }
    function changeOffer(offer) {
        setUser({ ...user, offer })
    }

    function changeComment(comment) {
        setUser({ ...user, comment })
    }

    useEffect(() => {
        changeDate()
    }, [dispatch]);

    async function onSubmit() {
        try {
            await dispatch(postulate(user))
            alert('Postulación enviada')
            navigation.navigate("Home")
        }
        catch (e) {
            console.log(e)
            // Alert.alert(Object.keys(e.response.data.errors[0])[0], Object.values(e.response.data.errors[0])[0])
        }
    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

            <View style={styles.containerInput}>
                <Text style={styles.text}>Oferta $: </Text>
                <TextInput
                    value={user.offer}
                    onChangeText={(offer) => changeOffer(offer)}
                    keyboardType="numeric"
                    style={styles.input}
                />
            </View>
            <View>
                <Text style={styles.text}>Comente su oferta</Text>
                <TextInput multiline={true} numberOfLines={3} onChangeText={need => changeComment(need)} />
            </View>

            <TouchableHighlight onPress={onSubmit} style={styles.butonContainer}>
                <Text style={styles.textB}>Enviar</Text>
            </TouchableHighlight>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        paddingHorizontal: 5,
        paddingLeft: 15,
        paddingRight: 15,
    },
    input: {
        marginHorizontal: 20,
        borderBottomWidth: 1,
        padding: 10,
        borderBottomColor: "#24b8b8",
        width: 300,
    },
    textArea: {
        height: 60,
    },
    containerInput: {
        marginTop: 20,
    },

    butonContainer: {
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 25,
        elevation: 3,
        backgroundColor: "#24b8b8",
        alignSelf: "stretch",
        marginBottom: 30,
    },
    text: {
        color: "#1d3454",
        fontSize: 18,
        marginLeft: 15,
        textShadowColor: "#7a7979",
    },
    textB: {
        color: "#1d3454",
        fontSize: 18,

        textShadowColor: "#7a7979",
    },
});
