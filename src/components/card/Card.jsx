import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

export default function Card(props) {
    const dateIni = props.date_ini
    const dateByirde = dateIni
    const dayB = new Date(dateByirde).getDate()
    const monthb = new Date(dateByirde).getMonth() + 1
    const yearB = new Date(dateByirde).getFullYear();

    const date = yearB + "-" + monthb + "-" + dayB

    return (
        <View key={props.id} style={styles.container}>
            <Text>Nombre del paciente: {props.namePatient} </Text>
            <Text>Edad del paciente: {props.agePatient} </Text>
            <Text>Necesidad: {props.needs}</Text>
            <Text>Especialidad Necesitada: {props.specialty.specialty}</Text>
            <Text>Inicio: {date}</Text>
            <Text>Hora Inicio: {props.availableTime_0}</Text>
            <Text>Hora Fin: {props.availableTime_1}</Text>
            <TouchableHighlight style={styles.butonContainer}>
                <Text style={styles.textB}>Aplicar</Text>
            </TouchableHighlight>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
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
})