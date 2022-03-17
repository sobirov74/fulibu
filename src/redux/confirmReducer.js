import {
  CONFIRM_ERROR,
  CONFIRM_LOADING,
  CONFIRM_SUCCESS,
} from "./types/postTypes";

const initialState = {
  code: "",
  phone: "",
  token: null,
};

export const confirmReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONFIRM_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case CONFIRM_SUCCESS: {
      const { code, phone, token } = action.payload;

      return {
        ...state,
        loading: false,
        code,
        phone,
        token,
        error: null,
      };
    }

    case CONFIRM_ERROR: {
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

export const confirmSelector = (state) => state.token;
