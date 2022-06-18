import React from "react";
import { useEffect, useState } from "react";
import {
    Text,
    TextInput,
    TouchableHighlight,
    StyleSheet,
    View,
    Platform,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { getCity, getCountry, getRegion } from "../../Redux/Actions/actions";
import RNPickerSelect from "react-native-picker-select";
import axios from 'axios'
import DatePicker from "react-native-date-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
// import { Button } from "react-native-web";

export default function Post() {

    const [fecha, setFecha] = useState(new Date())
    // const [fecha2, setFecha2] = useState(new Date())
    // const [fecha3, setFecha3] = useState(new Date())
    // const [fecha4, setFecha4] = useState(new Date())
    const [mode, setMode] = useState('date')
    const [show, setShow] = useState(false)
    // const [text, setText]= useState({
    //     fechaIni:"",
    //     fechaFin:"",
    //     horaIni:"",
    //     horaFin:""
    // })
    const [text, setText] = useState()
    const [text2, setText2] = useState()
    const [text3, setText3] = useState()
    const [text4, setText4] = useState()

    const country = useSelector((state) => state.country);
    const region = useSelector((state) => state.region);
    const city = useSelector((state) => state.city);
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        date_post: "",
        hour_post: "",
        date_ini: "",
        date_fin: "",
        needs: "",
        locationReference: "",
        contact_phone: "",
        id_users: "",
        specialtyPatient: "",
        state: "",
        city: "",
        country: "",
        agePatient: "",
        namePatient: "",
        availableTime_0: "",
        availableTime_1: ""
    })

    function changeDate() {
        const date = new Date()
        const actualDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
        const actualHour = date.toLocaleTimeString()
        setUser({ ...user, date_post: actualDate, hour_post: actualHour })
    }

    function changeDateIni(event, selectedDate) {
        console.log(selectedDate)
        const currentDate = selectedDate || fecha
        // setFecha(currentDate)
        const date = new Date(currentDate)
        const actualDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
        setText(actualDate)
        setUser(prev => ({ ...prev, date_ini: actualDate }))
        setShow(false)
    }

    function changeDateFin(event, selectedDate) {
        const currentDate = selectedDate || fecha
        console.log(currentDate)
        // setFecha(currentDate)
        const date = new Date(currentDate)
        const actualDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
        // console.log(actualDate)
        // setUser({ ...user, date_fin: actualDate })
        setUser(prev => ({ ...prev, date_fin: actualDate }))
        setText2(actualDate)
        setShow(false)
    }

    function changeHourIni(event, selectDate) {
        const currentDate = selectDate || fecha
        console.log(currentDate)
        // setFecha(currentDate)
        const date = new Date(currentDate)
        const actualHour = date.getHours() + ":" + date.getMinutes()
        console.log(actualHour)
        setText({ ...text, horaIni: actualHour })
        setUser(prev => ({ ...prev, availableTime_0: actualDate }))
        setShow(false)
    }

    function changeHourFin(event, selectDate) {
        const currentDate = selectDate || fecha
        console.log(currentDate)
        // setFecha(currentDate)
        const date = new Date(currentDate)
        const actualHour = date.getHours() + ":" + date.getMinutes()
        console.log(actualHour)
        // setText({ ...text, availableTime_1: actualHour })
        setUser(prev => ({ ...prev, availableTime_1: actualDate }))
        setShow(false)
    }
    console.log(text)

    function showMode(currentMode) {
        setShow(true)
        setMode(currentMode)
    }

    function changeState(state) {
        setUser({ ...user, state })
    }

    function changeCity(city) {
        setUser({ ...user, city })
    }

    function changeCountry(country) {
        setUser({ ...user, country })
    }

    function onSubmit() {
        changeDate()
        console.log(user)
    }
    useEffect(() => {
        dispatch(getCountry());
    }, [dispatch]);
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >

            <View>
                <Text>Fecha inicio: {user.date_ini}</Text>
                <View>
                    <TouchableHighlight onPress={() => showMode('date')}>
                        <Text style={styles.textB}>Escoja Fecha Inicio</Text>
                    </TouchableHighlight>
                </View>
                {show && (<DateTimePicker
                    testID='dateTimePicker'
                    value={fecha}
                    mode={mode}
                    is24Hour={true}
                    display='default'
                    onChange={changeDateIni}
                />)}
                <Text>Fecha Fin: {user.date_fin}</Text>
                <View>
                    <TouchableHighlight onPress={() => showMode('date')}>
                        <Text style={styles.textB}>Escoja Fecha Fin</Text>
                    </TouchableHighlight>
                </View>
                {show && (<DateTimePicker
                    testID='dateTimePicker'
                    value={fecha}
                    mode={mode}
                    is24Hour={true}
                    display='default'
                    onChange={changeDateFin}
                />)}
            </View>
            <View>
                <View>
                    <Text>Hora inicio: {user.availableTime_0}</Text>
                    <TouchableHighlight onPress={() => showMode('time')}>
                        <Text style={styles.textB}>Escoja Hora inicio</Text>
                    </TouchableHighlight>
                </View>
                {show && (<DateTimePicker
                    testID='dateTimePicker'
                    value={fecha}
                    mode={mode}
                    is24Hour={true}
                    display='default'
                    onChange={changeHourIni}
                />)}
                <View>
                    <Text>Hora Fin: {user.availableTime_1}</Text>
                    <TouchableHighlight onPress={() => showMode('time')}>
                        <Text style={styles.textB}>Escoja Hora Fin</Text>
                    </TouchableHighlight>
                </View>
                {show && (<DateTimePicker
                    testID='dateTimePicker'
                    value={fecha}
                    mode={mode}
                    is24Hour={true}
                    display='default'
                    onChange={changeHourFin}
                />)}
            </View>

            <View style={styles.containerInfoSelect}>
                <View style={styles.containerInput}>
                    <Text style={styles.text}>País</Text>
                    <RNPickerSelect
                        onValueChange={(value) => {
                            dispatch(getRegion(country, value))
                            changeCountry(value)
                        }}
                        items={country?.map((data, index) => ({
                            key: index,
                            label: data.name,
                            value: data.name,
                        }))}
                    />
                </View>
                <View style={styles.containerInput}>
                    <Text style={styles.text}>Estado</Text>
                    <RNPickerSelect
                        onValueChange={(value) => {
                            dispatch(getCity(region, value))
                            changeState(value)
                        }}
                        items={region?.map((data, index) => ({
                            key: index,
                            label: data.region,
                            value: data.region,
                        }))}
                    />
                </View>
                <View style={styles.containerInput}>
                    <Text style={styles.text}>ciudad</Text>
                    <RNPickerSelect
                        onValueChange={(value) => { changeCity(value) }}
                        items={city?.map((data, index) => ({
                            key: index,
                            label: data.city,
                            value: data.city,
                        }))}
                    />
                </View>
            </View>

            <TouchableHighlight onPress={onSubmit} style={styles.butonContainer}>
                <Text style={styles.textB}>Crear</Text>
            </TouchableHighlight>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
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
