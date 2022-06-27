import { CITY, COUNTRY, ERROR, POST, REGION, SPECIALITY } from "../constantes";
import {
  ERR,
  USER_LOGIN,
  NO_ERR,
  LOADING,
  USER_DETAIL,
  LOGOUT,
} from "../Actions/actions";

const initialState = {
  error: {
    message: "",
    isError: false,
  },
  id: 0,
  dataLog: {},
  islogged: false,
  userDetail: {},
  country: [],
  region: [],
  city: [],
  speciality: [],
  isLoggin: false,
  post: [],
};

const rootReducer = (state = initialState, action) => {
  function SortArray(x, y) {
    if (x.name < y.name) {
      return -1;
    }
    if (x.name > y.name) {
      return 1;
    }
    return 0;
  }
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        id: action.payload.id,
        dataLog: action.payload.user,
        isLoggin: false,
        islogged: true,
      };
    case LOGOUT:
      return { ...state, islogged: false, isLoggin: false, dataLog: {}, id: 0 };

    case LOADING:
      return {
        ...state,
        isLoggin: action.payload,
      };
    case USER_DETAIL:
      return {
        ...state,
        userDetail: action.payload,
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
      const pais = action.payload;
      const countryOrden = pais.sort(SortArray);
      return {
        ...state,
        country: countryOrden,
      };
    case REGION:
      const region = action.payload;
      const regionOrden = region.sort(SortArray);
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
      return {
        ...state,
        errors: action.payload,
      };
    case SPECIALITY:
      return {
        ...state,
        speciality: action.payload,
      };
    case POST:
      return {
        ...state,
        post: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
