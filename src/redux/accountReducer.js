import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./types/postTypes";

const initialState = {
  loading: false,
  error: null,
  name: "", //swkslkjhskjwhshwsjwjsjhkj
  token: null, //skwjsjwshwjkhwkjshwhsuwois
};

export const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...initialState,
        loading: true,
      };
    case LOGIN_SUCCESS: {
      const { name, token } = action.payload;
      console.log(token);
      return {
        ...state,
        loading: false,
        name,
        token,
        error: null,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...initialState,
        loading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export const accountSelector = (state) => state.account;
