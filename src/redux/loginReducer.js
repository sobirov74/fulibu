import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading/Loading";
import { confirmation, getPhone } from "./actions/getActions";
import { POST_ERROR, POST_LOADING, POST_SUCCESS } from "./types/postTypes";

const initialState = {
  loading: false,
  error: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_LOADING:
      return {
        ...initialState,
        loading: true,
      };
    case POST_SUCCESS: {
      const { token } = action.payload;
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        error: null,
        token: token.action.payload, // look it
      };
    }
    case POST_ERROR: {
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

export const GetReload = () => {
  const { loading, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const getData = () => dispatch(getPhone());
  const getCode = () => dispatch(confirmation());
  useEffect(() => {
    getData();
    getCode();
  }, []);

  if (loading || error) {
    return <Loading loading={loading} error={error} phone={getData} />;
    // return <div>loading...</div>;
  }
};
