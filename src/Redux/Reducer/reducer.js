import { Err, USER_LOGIN, NO_ERR } from "../Actions/actions";
import { CITY, COUNTRY, REGION } from "../constantes";

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
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        Users: [...state.Users, action.payload],
      };
    case Err:
      console.log("hola", action.payload);
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
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
