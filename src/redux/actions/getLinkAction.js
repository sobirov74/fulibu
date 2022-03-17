import ApiService from "../../ApiService";
import { LINK_ERROR, LINK_LOADING, LINK_SUCCESS } from "../types/postTypes";

export const getLinkAction = () => (dispatch) => {
  dispatch(linkRequest);

  ApiService.getResources("/user")
    .then((value) => {
      if (value.statusCode === 200) {
        dispatch(linkSuccess(value));
        window.location.replace("/createAcc");
      }
    })
    .catch((e) => {
      dispatch(linkError(e?.message));
    });
};

const linkRequest = () => {
  return {
    type: LINK_LOADING,
  };
};

const linkSuccess = (payload) => {
  return {
    type: LINK_SUCCESS,
    payload,
  };
};

const linkError = (payload = "Something went wrong ") => {
  return {
    type: LINK_ERROR,
    payload,
  };
};
