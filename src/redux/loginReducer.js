import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./types/postTypes";

const initialState = {
  loading: false,
  error: null,
  phone: "",
  code: "",
  name: "",
  token: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...initialState,
        loading: true,
      };
    case LOGIN_SUCCESS: {
      const { code, phone, name, token } = action.payload;
      return {
        ...state,
        loading: false,
        code,
        phone,
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

export const loginSelector = (state) => state.login;
