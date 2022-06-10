import { COUNTRY } from "../constantes"
import axios from 'axios';
// const {API_KEY}= process.env

const API_KEY= '5d30980015a22534531b055fb90a33f2'

export const USER_LOGIN = "USER_LOGIN"

export const userLogin = (user)=>{
    // console.log(API_KEY)
    return{
        type:USER_LOGIN,
        payload:user
    }
}

export const getCountry = ()=>{
    return async function(dispatch){
        try{
            const country = await axios.get(`https://battuta.medunes.net/api/country/all/?key=${API_KEY}`)
            console.log(country.data.length)
            return dispatch({
                type:COUNTRY,
                payload: country.data
            })
        }
        catch(e){
            console.log(e)
        }
    }
}

export const getRegion = (codigo)=>{
    return async function(dispatch){
        try{
            const region = await axios.get(`http://battuta.medunes.net/api/region/${codigo}/all/?key=${API_KEY}`)
            console.log(region.data.length)
            return dispatch({
                type:COUNTRY,
                payload: region.data
            })
        }
        catch(e){
            console.log(e)
        }
    }
}

export const getCity = (region)=>{
    return async function(dispatch){
        try{
            const city = await axios.get(`http://battuta.medunes.net/api/city/${codigo}/search/?region=${region}&key=${API_KEY}`)
            console.log(city.data.length)
            return dispatch({
                type:COUNTRY,
                payload: city.data
            })
        }
        catch(e){
            console.log(e)
        }
    }
}