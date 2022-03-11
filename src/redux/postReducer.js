import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading/Loading";
import { fetchPosts } from "./actions/postActions";
import { POST_ERROR, POST_LOADING, POST_SUCCESS } from "./types/postTypes";

const initialState = {
  xits: [],
  recommend: [],
  loading: false,
  newest: [],
  error: null,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_LOADING:
      return {
        ...initialState,
        loading: true,
      };
    case POST_SUCCESS: {
      const { newest, recommend, hot: xits } = action.payload;
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        newest,
        recommend,
        xits,
        error: null,
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

export const postSelector = (state) => state.posts;
// export const newestSelector = (state) => state.posts.newest;

export const FetchReload = () => {
  const { loading, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const fetchData = () => dispatch(fetchPosts());
  useEffect(() => {
    fetchData();
  }, []);

  if (loading || error) {
    return <Loading loading={loading} error={error} reload={fetchData} />;
    // return <div>loading...</div>;
  }
};
