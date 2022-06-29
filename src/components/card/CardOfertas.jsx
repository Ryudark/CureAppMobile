import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

export default function CardOfertas(props){
    console.log(props)
    console.log(props.p.professional.user.name)
//{props.professional.user[0].name}
    const fecha = new Date(props.p.date)
    const dia = fecha.getDate()
    const mes = fecha.getMonth()+1
    const año = fecha.getFullYear()
    const fech = año+"-"+mes+"-"+dia
    console.log(fech)
    return(
        <View style={styles.container}>
            <Text>Nombre del Profesional: {props.p.professional.user.name} { props.p.professional.user.surname} </Text>
            <Text>Fecha de propuesta: {fech} </Text>
            <Text>Oferta:${props.p.offer} </Text>
            <Text>Comentario:{props.p.comment} </Text>
            <View style={styles.centraBotones}>
                <TouchableHighlight style={styles.butonContainer}>
                    <Text style={styles.textB}>Aceptar</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.butonContainer}>
                    <Text style={styles.textB}>Declinar</Text>
                </TouchableHighlight>            
            </View>
        </View>
    )//professional    trainings date
}
const styles =StyleSheet.create({
    container:{
        padding:20,
        paddingBottom:5,
        paddingTop:5, 
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