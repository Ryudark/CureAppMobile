import axios from "axios";

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
        "http://192.168.3.12:3001/api/userdblogin",
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
    return error(err);
  }
};

export const noError = () => {
  return {
    type: NO_ERR,
  };
};
