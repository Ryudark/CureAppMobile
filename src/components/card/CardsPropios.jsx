import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useEffect } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deletePost, getPostAuction } from '../../Redux/Actions/actions';
import CardOfertas from './CardOfertas';

export default function CardsPropios(props) {

    const navigation = useNavigation();

    const dispatch = useDispatch()

    const dateIni = props.date_ini
    const dateByirde = dateIni
    const dayB = new Date(dateByirde).getDate()
    const monthb = new Date(dateByirde).getMonth() + 1
    const yearB = new Date(dateByirde).getFullYear();

    const date = yearB + "-" + monthb + "-" + dayB

    const post = useSelector(state=>state.postAuction)
    useEffect(()=>{
        dispatch(getPostAuction(props.id))
    },[])
    function deleteP(id){
        // dispatch(deletePost(id))
        deletePost(id)
    }

    return (
        <ScrollView key={props.id} style={styles.container}>
            <Text>Nombre del paciente: {props.namePatient} </Text>
            <Text>Edad del paciente: {props.agePatient} </Text>
            <Text>Necesidad: {props.needs}</Text>
            <Text>Especialidad Necesitada: {props.specialty.specialty}</Text>
            <Text>Inicio: {date}</Text>
            <Text>Hora Inicio: {props.availableTime_0}</Text>
            <Text>Hora Fin: {props.availableTime_1}</Text>
            <TouchableHighlight style={styles.butonContainer} onPress={()=>deleteP(props.id)}>
                <Text style={styles.textB}>Eliminar Post</Text>
            </TouchableHighlight>
            <View>
                {post.length>0? post.map(p=> <CardOfertas key={p.id} p={p}/>): <Text>Aun no hay postulaciones</Text>}
            </View>
            {/* <ScrollView>
                <FlatList 
                    data={post}
                    ItemSeparatorComponent={() => <Text> </Text>}
                    renderItem={({ item: repo }) => (
                        <CardOfertas {...repo} />
                )}
                />:
            </ScrollView> */}
        </ScrollView>

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