import React from 'react';
import { useEffect } from 'react';
import { Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { getCountry } from '../../Redux/Actions/actions';
import RNPickerSelect from 'react-native-picker-select';

export default function Settings(){

    const country = useSelector(state=>state.country)
    const region = useSelector(state=>state.region)
    const city = useSelector(state=>state.city)
    const dispatch= useDispatch()

    useEffect(()=>{
        dispatch(getCountry())
    },[dispatch])
    
    return(
        <ScrollView style={styles.container}>
            <Text>Nombre</Text>
            <TextInput placeholder='Nombre' style={styles.input}/>
            <Text>Apellido</Text>
            <TextInput placeholder=' Apellido' style={styles.input}/>
            <Text>Nombre de Usuario</Text>
            <TextInput placeholder='Nombre de Usuario' style={styles.input}/>
            <Text>Telefono</Text>
            <TextInput keyboardType='numeric' placeholder='Telefono' style={styles.input}/>
            <Text>Telefono Secundario</Text>
            <TextInput placeholder='Telefono Secundario' style={styles.input}/>
            <Text>Edad</Text>
            <TextInput keyboardType='numeric' placeholder='Edad' style={styles.input}/>
            <Text>Documento de Identificación</Text>
            <TextInput keyboardType='numeric' placeholder='Documento de Identificación' style={styles.input}/>
            <Text>Dirección</Text>
            <TextInput placeholder='Dirección' style={styles.input}/>
            <Text>País</Text>
            {/* <TextInput placeholder='País' style={styles.input}/> */}
            {
                // country?.map()
            }
            <Text>Estado</Text>
            <TextInput placeholder='Estado' style={styles.input}/>
            <Text>ciudad</Text>
            <TextInput placeholder='ciudad' style={styles.input}/>
            <Text>Email</Text>
            <TextInput keyboardType='email-address' placeholder='Email' style={styles.input}/>
            <Text>Password</Text>
            <TextInput keyboardType='visible-password' placeholder='Password' style={styles.input}/>
            <TouchableHighlight>
                <Text>Guardar</Text>
            </TouchableHighlight>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F5FCFF',
        marginTop:30,
        paddingLeft:15,
        paddingRight:15
    },
    input:{
        height:40,
        borderColor:'#ccc',
        borderWidth:2,
        marginBottom:20
    },
    textArea:{
        height:60
    }
})