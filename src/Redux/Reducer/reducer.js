import { ERR, USER_LOGIN, NO_ERR, LOADING } from "../Actions/actions";
import { CITY, COUNTRY, REGION } from "../constantes";

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
        city: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
