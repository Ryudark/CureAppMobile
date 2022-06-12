import { CITY, COUNTRY, REGION } from "../constantes";
import axios from "axios";

// const {API_KEY}= process.env

const API_KEY = "5d30980015a22534531b055fb90a33f2";

export const Err = "Err";
export const USER_LOGIN = "USER_LOGIN";
export const NO_ERR = "NO_ERR";

const error = (info) => {
  return {
    type: Err,
    payload: info,
  };
};

export const userLogin = (user) => {
  console.log(user);
  try {
    return async function (dispatch) {
      let response = await axios.post(
        "https://cureappmobile2022.herokuapp.com/api/userdblogin",
        user
      );
      if (response.data.error) {
        return dispatch({
          type: Err,
          payload: response.data.error,
        });
      }
      return dispatch({
        type: USER_LOGIN,
        payload: user,
      });
    };
  } catch (err) {
    console.log(err);
  }
};

export const noError = () => {
  return {
    type: NO_ERR,
  };
};

export const getCountry = () => {
  return async function (dispatch) {
    try {
      const country = await axios.get(
        `https://battuta.medunes.net/api/country/all/?key=${API_KEY}`
      );

      return dispatch({
        type: COUNTRY,
        payload: country.data,
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
        `http://battuta.medunes.net/api/region/${code.code}/all/?key=${API_KEY}`
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
        `http://battuta.medunes.net/api/city/${zona.country}/search/?region=${zona.region}&key=${API_KEY}`
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
