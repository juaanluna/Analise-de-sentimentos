import Api from "../../config";
import axios from "axios";

export const searchTypes = {
  ISFETCHING: "@search/fetch",
  ERROR: "@search/error",

  GET_SEARCHS: "@search/get",
  FIND_SEARCH: "@search/find",
};

export const getSearchs = () => (dispatch) => {
  dispatch({ type: searchTypes.ISFETCHING });
  axios.get(`${Api}/search`)
    .then((resp) => {
        console.log(resp)
      dispatch({ type: searchTypes.GET_SEARCHS, payload: resp.data });
    })
    .catch((erro) => {
      console.log(erro);
    });
};

export const findSearch = (id) => (dispatch) => {
  dispatch({ type: searchTypes.ISFETCHING });
  axios.get(`${Api}/search/${id}`)
    .then((resp) => {
      dispatch({ type: searchTypes.FIND_SEARCH, payload: resp.data });
    })
    .catch((erro) => {
      console.log(erro);
    });
};
