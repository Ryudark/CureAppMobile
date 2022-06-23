import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Card(props){
    const dateIni= props.date_ini
    return(
        <View key={props.id} style={styles.container}>
          <Text>Nombre del paciente: {props.namePatient} </Text>
          <Text>Edad del paciente: {props.agePatient} </Text>
          <Text>Especialidad: {props.specialty.specialty}</Text>
          <Text>Necesidad: {props.needs}</Text>
          <Text>Inicio: {props.date_ini}</Text>
        </View>
    )
}
const styles =StyleSheet.create({
    container:{
        padding:20,
        paddingBottom:5,
        paddingTop:5, 
    }
})