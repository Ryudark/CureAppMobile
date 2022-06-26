import { CITY, COUNTRY, FECHA, LOCATION, POST, POSTPROPIOS, REGION, SPECIALITY } from "../constantes";
import axios from "axios";

// const {API_KEY}= process.env

const API_KEY = "ec2ab08965699856947080b2bbe0766b";

export const NO_ERR = "NO_ERR";
export const ERR = "ERR";
export const USER_LOGIN = "USER_LOGIN";
export const LOADING = "LOADING";
export const USER_DETAIL = "USER_DETAIL";
export const LOGOUT = "LOGOUT";

export const userLogin = (user) => {
  return async function (dispatch) {
    try {
      dispatch({ type: LOADING, payload: true });
      let response = await axios.post(
        "https://api-rest-pf-production.up.railway.app/api/userdblogin",
        user
      );

      return dispatch({ type: USER_LOGIN, payload: response.data.userId });
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

export const noError = () => {
  return {
    type: NO_ERR,
  };
};

export const logout = () => {
  return function (dispatch) {
    dispatch({ type: LOADING, payload: true });
    setTimeout(() => {
      return dispatch({
        type: LOGOUT,
      });
    }, 2000);
  };
};

export function createUsers(users) {
  return async function (dispatch) {
    await axios.post(
      "https://api-rest-pf-production.up.railway.app/api/userdbRegistration",
      users
    );
  };
}

export function postUser(post) {
  return async function (dispatch) {
    // await axios.post('https://pf-api-rest.herokuapp.com/api/postgenerator', post)
    await axios.post(
      "https://api-rest-pf-production.up.railway.app/api/postgenerator",
      post
    );
  };
}

export const getUserDetail = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `https://api-rest-pf-production.up.railway.app/api/userDetalleById/${id}`
      );

      return dispatch({
        type: USER_DETAIL,
        payload: response.data,
      });
    } catch (error) {
      console.log("userdetail", error);
    }
  };
};

export const getCountry = () => {
  return async function (dispatch) {
    try {
      const country = await axios.get(
        // `https://battuta.medunes.net/api/country/all/?key=${API_KEY}`
        "https://api-rest-pf-production.up.railway.app/api/GetCountries"
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

export const getRegion = (value) => {
  return async function (dispatch) {
    try {
      const region = await axios.get(
        // `http://battuta.medunes.net/api/region/${code?.code}/all/?key=${API_KEY}`
        `https://api-rest-pf-production.up.railway.app/api/GetStatesByCountry/${value}`
      );
      return dispatch({
        type: REGION,
        payload: region?.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const getCity = (value) => {
  return async function (dispatch) {
    try {
      const city = await axios.get(
        // `http://battuta.medunes.net/api/city/${zona?.country}/search/?region=${zona.region}&key=${API_KEY}`
        `https://api-rest-pf-production.up.railway.app/api/GetCitiesByState/${value}`
      );
      return dispatch({
        type: CITY,
        payload: city?.data[0].cities,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const getPost = () => {
  return async function (dispatch) {
    try {
      const post = await axios.get('https://api-rest-pf-production.up.railway.app/api/infoCardPost')
      return dispatch({
        type: POST,
        payload: post.data
      })
    }
    catch (e) {
      console.log(e)
    }
  }
}

export const specialityFilter = (value) => {
  return {
    type: SPECIALITY,
    payload: value
  }
}
export const dateFilter = (value) => {
  return {
    type: FECHA,
    payload: value
  }
}

export const locationFilter = (value) => {
  return {
    type: LOCATION,
    payload: value
  }
}

export function getPostPropios(id){
  return async function (dispatch) {
    try {
      const post = await axios.get(
        // `http://battuta.medunes.net/api/city/${zona?.country}/search/?region=${zona.region}&key=${API_KEY}`
        `https://api-rest-pf-production.up.railway.app/api/posteosUsersByUserID/${id}`
      );
      return dispatch({
        type: POSTPROPIOS,
        payload: post.data
      });
    } catch (e) {
      console.log(e);
    }
  };
}