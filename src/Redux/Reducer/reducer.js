import { Err, USER_LOGIN, NO_ERR } from "../Actions/actions";
import { CITY, COUNTRY, ERROR, REGION, SPECIALITY } from "../constantes";

const initialState = {
  error: {
    message: "",
    isError: false,
  },
  Users: [],
  userData: {},
  country: [],
  region: [],
  city: [],
  speciality:[],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        Users: [...state.Users, action.payload],
      };
    case Err:
      // console.log("hola", action.payload);
      return {
        ...state,
        error: {
          message: action.payload,
          isError: true,
        },
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
      return {
        ...state,
        country: action.payload,
      };
    case REGION:
      return {
        ...state,
        region: action.payload,
      };
    case CITY:
      return {
        ...state,
        city: action.payload,
      };
    case COUNTRY:
      return{
        ...state,
        country:action.payload
      }
    case REGION:
      return{
        ...state,
        region:action.payload
      }
    case CITY:
      return{
        ...state,
        city:action.payload
      }
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
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
