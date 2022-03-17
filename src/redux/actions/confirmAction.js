import ApiService from "../../ApiService";
import {
  CONFIRM_ERROR,
  CONFIRM_LOADING,
  CONFIRM_SUCCESS,
} from "../types/postTypes";

export const confirmation =
  ({ verify_code, phone, token }) =>
  (dispatch) => {
    dispatch(confirmRequest);
    const body = {
      verify_code,
      phone,
      token,
    };

    ApiService.postData("/auth", null, body)
      .then((value) => {
        if (value.statusCode === 200) {
          // dispatch(confirmSuccess(value));
          window.location.replace("/createAcc");
        }
      })
      .catch((e) => {
        dispatch(confirmError(e?.message));
      });
  };

const confirmRequest = () => {
  return {
    type: CONFIRM_LOADING,
  };
};

const confirmSuccess = (payload) => {
  return {
    type: CONFIRM_SUCCESS,
    payload,
  };
};

const confirmError = (payload = "Something went wrong ") => {
  return {
    type: CONFIRM_ERROR,
    payload,
  };
};
