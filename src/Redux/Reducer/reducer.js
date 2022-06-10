import { Err, USER_LOGIN, NO_ERR } from "../Actions/actions";

const initialState = {
  error: {
    message: "",
    isError: false,
  },
  Users: [],
  userData: {},
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
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
