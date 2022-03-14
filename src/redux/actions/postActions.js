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

// export const getPhone =
//   ({ phone }) =>
//   (dispatch) => {
//     dispatch(postRequest());
//     const body = {
//       phone,
//     };
//     ApiService.postData("/verification", null, body)
//       .then((res) => {
//         if (res.statusCode === 200) {
//           window.location.replace("/confirm");
//           dispatch(postSuccess(phone));
//         }
//       })
//       .catch((e) => {
//         dispatch(postError(e?.message));
//       });
//   };

// export const confirmation =
//   ({ phone, code }) =>
//   (dispatch) => {
//     const body = {
//       phone,
//       verify_code: code.current.value,
//     };

//     ApiService.postData("/auth", null, body)
//       .then((value) => {
//         if (value.statusCode === 200) {
//           dispatch(postSuccess(code));
//         }
//       })
//       .catch((e) => {
//         dispatch(postError(e?.message));
//       });
//   };

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
