import ApiService from "../../ApiService";
import { POST_ERROR, POST_LOADING, POST_SUCCESS } from "../types/postTypes";

export const fetchPosts = () => (dispatch) => {
  dispatch(postRequest());
  ApiService.getResources("/main")
    .then((res) => {
      dispatch(postSuccess(res));
    })
    .catch((e) => {
      dispatch(postError(e?.message));
    });
};

export const getMobileNumber = (dispatch) => {
  dispatch(mobileRequest);
}


const mobileRequest = (payload) => {
  return {
    type: POST_SUCCESS,
    payload,
  };
}


const postRequest = () => {
  return {
    type: POST_LOADING,
  };
};

const postSuccess = (payload) => {
  return {
    type: POST_SUCCESS,
    payload,
  };
};

const postError = (payload = "") => {
  return {
    type: POST_ERROR,
    payload,
  };
};
