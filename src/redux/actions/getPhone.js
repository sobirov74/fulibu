import ApiService from "../../ApiService";
import { PHONE_ERROR, PHONE_LOADING, PHONE_SUCCESS } from "../types/postTypes";

export const getPhone =
  ({ phone }) =>
  (dispatch) => {
    dispatch(phoneRequest());
    const body = {
      phone,
    };
    ApiService.postData("/verification", null, body)
      .then((res) => {
        if (res.statusCode === 200) {
          window.location.replace("/confirm");
          dispatch(phoneSuccess({ phone }));
        }
      })
      .catch((e) => {
        dispatch(phoneError(e?.message));
      });
  };

const phoneRequest = () => {
  return {
    type: PHONE_LOADING,
  };
};

const phoneSuccess = (payload) => {
  return {
    type: PHONE_SUCCESS,
    payload,
  };
};

const phoneError = (payload = "") => {
  return {
    type: PHONE_ERROR,
    payload,
  };
};
