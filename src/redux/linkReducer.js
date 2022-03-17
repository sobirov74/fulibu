import { LINK_ERROR, LINK_LOADING, LINK_SUCCESS } from "./types/postTypes";

const initialState = {
  link: null,
};

export const linkReducer = (state = initialState, action) => {
  switch (action.type) {
    case LINK_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case LINK_SUCCESS: {
      const { link } = action.payload;

      return {
        ...state,
        link,
      };
    }

    case LINK_ERROR: {
      return {
        ...initialState,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export const linkSelector = (state) => state.link;
