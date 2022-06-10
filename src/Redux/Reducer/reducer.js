import { USER_LOGIN } from "../Actions/actions";
import { CITY, COUNTRY, REGION } from "../constantes";

const initialState = {
  userData: {},
  country:[],
  region:[],
  city:[]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      console.log(action.payload);
      return {
        ...state,
        userData: action.payload,
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
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
