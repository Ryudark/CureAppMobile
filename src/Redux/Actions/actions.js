import { CITY, COUNTRY, REGION } from "../constantes"
import axios from 'axios';
// const {API_KEY}= process.env

const API_KEY= '5d30980015a22534531b055fb90a33f2'

export const USER_LOGIN = "USER_LOGIN"

export const userLogin = (user)=>{
    return{
        type:USER_LOGIN,
        payload:user
    }
}

export const getCountry = ()=>{
    return async function(dispatch){
        try{
            const country = await axios.get(`https://battuta.medunes.net/api/country/all/?key=${API_KEY}`)
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

export const getRegion = (country, value)=>{
    const code= country.find(data=> data.name ===value)
    return async function(dispatch){
        try{
            const region = await axios.get(`http://battuta.medunes.net/api/region/${code.code}/all/?key=${API_KEY}`)
            return dispatch({
                type:REGION,
                payload: region.data
            })
        }
        catch(e){
            console.log(e)
        }
    }
}

export const getCity = (region, value)=>{
    const zona= region.find(data=> data.region ===value)
    return async function(dispatch){
        try{
            const city = await axios.get(`http://battuta.medunes.net/api/city/${zona.country}/search/?region=${zona.region}&key=${API_KEY}`)
            return dispatch({
                type:CITY,
                payload: city.data
            })
        }
        catch(e){
            console.log(e)
        }
    }
}