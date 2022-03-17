import { useSelector } from "react-redux";
import ApiService from "../../ApiService";
import { confirmSelector } from "../confirmReducer";
import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "../types/postTypes";

export const accaunt =
  ({ name, token }) =>
  (dispatch) => {
    dispatch(loginRequest);
    const body = {
      name,
      token,
    };

    console.log(name, token);

    ApiService.updateForm("/account", token, body)
      .then((val) => {
        if (val.statusCode === 200) {
          dispatch(loginSuccess(val));
          window.location.replace("/userPage");
        }
      })
      .catch((e) => {
        dispatch(loginError(e?.message));
      });
  };

const loginRequest = () => {
  return {
    type: LOGIN_LOADING,
  };
};

const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

const loginError = (payload = "") => {
  return {
    type: LOGIN_ERROR,
    payload,
  };
};
