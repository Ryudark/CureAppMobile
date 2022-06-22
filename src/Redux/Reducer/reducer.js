
import { CITY, COUNTRY, ERROR, REGION, SPECIALITY } from "../constantes";
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
};

const rootReducer = (state = initialState, action) => {
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
