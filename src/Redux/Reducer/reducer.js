import { USER_LOGIN } from "../Actions/actions";

const initialState = {
  userData: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      console.log(action.payload);
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
