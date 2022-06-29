import React from "react";
import { useState } from "react";
import {
    Text,
    TextInput,
    TouchableHighlight,
    StyleSheet,
    View,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import {
    userToProfessional,
} from "../../Redux/Actions/actions";

import { useNavigation } from "@react-navigation/native";

export default function Profesional() {

    const id = useSelector(state => state.id)

    const userID = id

    const [fecha, setFecha] = useState(new Date())

    const [mode, setMode] = useState('date')
    const [showI, setShowI] = useState(false)
    const [showF, setShowF] = useState(false)

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [user, setUser] = useState({
        id_user: userID,
        tuition: "",
        trainings: "",
        photo: "",
        cvu: "",
        nivelDeEstudio: "",
        institucion: "",
        titulo: "",
        date_inicioEstudio: "",
        date_finicioEstudio: "",
    });

    function changeDateIni(event, selectedDate) {
        const currentDate = selectedDate || fecha
        setFecha(currentDate)
        const date = new Date(currentDate)
        let dia = date.getDate()
        let mes = (date.getMonth() + 1)
        const año = date.getFullYear()

        if(dia<10){
            dia='0'+dia
        }
        if(mes<10){
            mes='0'+mes
        }
        
        const actualDate = año + "-" + mes + "-" + dia
        setUser(prev => ({ ...prev, date_inicioEstudio: actualDate }))
        setShowI(false)
    }

    function changeDateFin(event, selectedDate) {
        const currentDate = selectedDate || fecha
        setFecha(currentDate)
        const date = new Date(currentDate)
        let dia = date.getDate()
        let mes = (date.getMonth() + 1)
        const año = date.getFullYear()

        if(dia<10){
            dia='0'+dia
        }
        if(mes<10){
            mes='0'+mes
        }
        
        const actualDate = año + "-" + mes + "-" + dia
        setUser(prev => ({ ...prev, date_finicioEstudio: actualDate }))
        setShowF(false)
    }

    function showModeI(currentMode) {
        setShowI(true)
        setMode(currentMode)
    }
    function showModeF(currentMode) {
        setShowF(true)
        setMode(currentMode)
    }

    function changeTuition(tuition) {
        setUser({ ...user, tuition })
        setUser(prev => ({ ...prev, titulo: tuition }))
    }
    function changeTrainings(trainings) {
        setUser({ ...user, trainings })
    }
    function changeCvu(cvu) {
        setUser({ ...user, cvu })
    }
    function changeNivelDeEstudio(nivelDeEstudio) {
        setUser({ ...user, nivelDeEstudio })
    }
    function changeInstitucion(institucion) {
        setUser({ ...user, institucion })
    }

    async function onSubmit() {
        try {
            await dispatch(userToProfessional(user))
            alert('usuario actualizado a Profesional')
            navigation.navigate("Profile")
        }
        catch (e) {
            console.log(e)
            // Alert.alert(Object.keys(e.response.data.errors[0])[0], Object.values(e.response.data.errors[0])[0])
        }
    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
        <View style={styles.containerInput}>
            <Text style={styles.text}>Titulo</Text>
            <TextInput
            value={user.tuition}
            onChangeText={(tuition) => changeTuition(tuition)}
            style={styles.input}
            />
        </View>
        <View style={styles.containerInput}>
            <Text style={styles.text}>Nivel Educativo</Text>
            <TextInput value={user.nivelDeEstudio} onChangeText={nivelDeEstudio => changeNivelDeEstudio(nivelDeEstudio)} style={styles.input} />
        </View>

        <View style={styles.containerInput}>
            <Text style={styles.text}>Institución Educativa</Text>
            <TextInput value={user.institucion} onChangeText={institucion => changeInstitucion(institucion)} style={styles.input} />
        </View>
        <View style={styles.containerInput}>
            <Text style={styles.text}>Capacitación</Text>
            <TextInput value={user.trainings} onChangeText={trainings => changeTrainings(trainings)} style={styles.input} />
        </View>

        <View style={styles.containerInput}>
            <View>
                <Text style={styles.text}>Fecha de Inicio: {user.date_inicioEstudio}</Text>
                <TouchableHighlight onPress={() => showModeI('date')}>
                    <Text style={styles.textB}>Escoja Fecha</Text>
                </TouchableHighlight>
            </View>
            {showI && (<DateTimePicker
            testID='dateTimePicker'
            value={fecha}
            mode={mode}
            is24Hour={true}
            display='default'
            onChange={changeDateIni}
            />)}
            <View>
                <Text style={styles.text}>Fecha de Finalización: {user.date_finicioEstudio}</Text>
                <TouchableHighlight onPress={() => showModeF('date')}>
                    <Text style={styles.textB}>Escoja Fecha</Text>
                </TouchableHighlight>
            </View>
            {showF && (<DateTimePicker
                testID='dateTimePicker'
                value={fecha}
                mode={mode}
                is24Hour={true}
                display='default'
                onChange={changeDateFin}
            />)}
        </View>
        <View style={styles.containerInput}>
            <Text style={styles.text}>Tarjeta Profesional</Text>
            <TextInput
            value={user.cvu}
            onChangeText={(cvu) => changeCvu(cvu)}
            keyboardType="numeric"
            style={styles.input}
            />
        </View>

        <TouchableHighlight onPress={onSubmit} style={styles.butonContainer}>
            <Text style={styles.textB}>Crear</Text>
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
