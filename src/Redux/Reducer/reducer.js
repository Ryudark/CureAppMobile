
import { CITY, COUNTRY, ERROR, POST, REGION, SPECIALITY } from "../constantes";
import { ERR, USER_LOGIN, NO_ERR, LOADING } from "../Actions/actions";

const initialState = {
  error: {
    message: "",
    isError: false,
  },
  islogged: false,
  userData: {},
  country: [],
  region: [],
  city: [],
  speciality:[],
  isLoggin: false,
  post:[],
};

const rootReducer = (state = initialState, action) => {
  function SortArray(x, y){
    if (x.name < y.name) {return -1;}
    if (x.name > y.name) {return 1;}
    return 0;
  }
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,

        islogged: true,
      };
    case LOADING:
      return {
        ...state,
        isLoggin: !state.isLoggin,
      };
    case ERR:
      return {
        ...state,
        error: {
          message: action.payload,
          isError: true,
        },
        isLoggin: false,
      };
    case NO_ERR:
      return {
        ...state,
        error: {
          message: "",
          isError: false,
        },
      };
    case COUNTRY:
      const pais=action.payload
      const countryOrden= pais.sort(SortArray)
      return {
        ...state,
        country: countryOrden
      };
    case REGION:
      const region=action.payload
      const regionOrden= region.sort(SortArray)
      return {
        ...state,
        region: regionOrden,
      };
    case CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ERROR:
      return{
        ...state,
        errors:action.payload
      }
    case SPECIALITY:
      return{
        ...state,
        speciality:action.payload
      }
    case POST:
      return{
        ...state,
        post:action.payload
      }
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
