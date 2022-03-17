import { PHONE_ERROR, PHONE_LOADING, PHONE_SUCCESS } from "./types/postTypes";

const initialState = {
  phone: "",
};

export const phoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case PHONE_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case PHONE_SUCCESS: {
      const { phone } = action.payload;

      return {
        ...state,
        phone,
      };
    }

    case PHONE_ERROR: {
      return {
        ...initialState,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export const phoneSelector = (state) => state.phone;
