import { useSelector } from "react-redux";
import ApiService from "../../ApiService";
import { loginSelector } from "../loginReducer";
import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "../types/postTypes";

export const getPhone =
  ({ phone }) =>
  (dispatch) => {
    dispatch(loginRequest());
    const body = {
      phone,
    };
    ApiService.postData("/verification", null, body)
      .then((res) => {
        if (res.statusCode === 200) {
          window.location.replace("/confirm");
          dispatch(loginSuccess({ phone }));
        }
      })
      .catch((e) => {
        dispatch(loginError(e?.message));
      });
  };

export const confirmation =
  ({ verify_code, phone }) =>
  (dispatch) => {
    const body = {
      verify_code,
      phone,
    };

    ApiService.postData("/auth", null, body)
      .then((value) => {
        if (value.statusCode === 200) {
          dispatch(loginSuccess(value));
          // window.location.replace("/createAcc");
        }
      })
      .catch((e) => {
        dispatch(loginError(e?.message));
      });
  };

export const accaunt =
  ({ name, token }) =>
  (dispatch) => {
    const body = {
      name,
    };

    console.log(name, token);

    ApiService.updateForm("/account", token, body)
      .then((val) => {
        if (val.statusCode === 200) {
          dispatch(loginSuccess({ name, token })); // success da faqat vajue boladi sould be stored
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
