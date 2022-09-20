import _ from "lodash";
import Jsonplaceholder from "../apis/Jsonplaceholder";

export const fetchPosts = () => async (dispatch) => {
  const response = await Jsonplaceholder.get("/posts");
  dispatch({
    type: "FETCH_POST",
    payload: response.data,
  });
};

export const fetchUser = (id) => {
  return (dispatch) => {
    _fetchUser(id, dispatch);
  };
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await Jsonplaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
});
