import { CITY, COUNTRY, REGION } from "../constantes";
import axios from "axios";

// const {API_KEY}= process.env

const API_KEY = "ec2ab08965699856947080b2bbe0766b";

export const NO_ERR = "NO_ERR";
export const ERR = "ERR";
export const USER_LOGIN = "USER_LOGIN";
export const LOADING = "LOADING";

export const userLogin = (user) => {
  return async function (dispatch) {
    try {
      let response = await axios.post(
        "http://192.168.3.12:3001/api/userdblogin",
        user
      );
      return dispatch({ type: USER_LOGIN });

      console.log("respuesta axios", response.data);
    } catch (error) {
      let mensaje = error.response.data.errors
        ? "verifique su usuario y contraseña"
        : error.response.data.error;

      return dispatch({
        type: ERR,
        payload: mensaje,
      });
    }
  };
};
export const isLogged = () => {};
export const noError = () => {
  return {
    type: NO_ERR,
  };
};

export function createUsers(users){
  return async function(dispatch){
    await axios.post('https://cureappmobile2022.herokuapp.com/api/userdbRegistration', users)
  }
}

export function postUser(post){
  console.log(post)
  return async function(dispatch){
    // await axios.post('https://pf-api-rest.herokuapp.com/api/postgenerator', post)
    await axios.post('https://cureappmobile2022.herokuapp.com/api/postgenerator', post)
  }
}

export const loading = () => {
  return {
    type: LOADING,
  };
};

export const getUserDetail = () => {};

export const getCountry = () => {
  return async function (dispatch) {
    try {
      const country = await axios.get(
        `https://battuta.medunes.net/api/country/all/?key=${API_KEY}`
      );

      return dispatch({
        type: COUNTRY,
        payload: country?.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};


export const getRegion = (country, value) => {
  const code = country.find((data) => data.name === value);
  return async function (dispatch) {
    try {
      const region = await axios.get(
        `http://battuta.medunes.net/api/region/${code?.code}/all/?key=${API_KEY}`
      );
      return dispatch({
        type: REGION,
        payload: region.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const getCity = (region, value) => {
  const zona = region.find((data) => data.region === value);
  return async function (dispatch) {
    try {
      const city = await axios.get(
        `http://battuta.medunes.net/api/city/${zona?.country}/search/?region=${zona.region}&key=${API_KEY}`
      );
      return dispatch({
        type: CITY,
        payload: city.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};
