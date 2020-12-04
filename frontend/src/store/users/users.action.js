import { toastr } from "react-redux-toastr";
import Api from "../../config";
import axios from "axios";

export const UserTypes = {
  ISFETCHING: "@users/fetch",
  ERROR: "@users/error",

  LOGIN: "@users/login",
  LOGOUT: "@users/logout",

  GET_USERS: "@users/get",
  FIND_USERS: "@users/find",
  CREATE_USERS: "@users/create",
  UPDATE_USERS: "@users/update",
  DELETE_USERS: "@users/delete",
};

export const signin = (values) => (dispatch) => {
  dispatch({ type: UserTypes.ISFETCHING });
  axios
    .post(`${Api}/auth/signin`, values)
    .then((resp) => {
      if (resp.data.error) {
        toastr.error('Credenciais invalidas!')
        return
    }
      dispatch({ type: UserTypes.LOGIN, payload: resp.data });
      toastr.success('Seja bem-vindo!')
    })
    .catch((erro) => {
     return toastr.success(erro)
    });
};

export const logout = () => {
  return {
    type: UserTypes.LOGOUT,
  };
};

export const getUsers = () => (dispatch) => {
  dispatch({ type: UserTypes.ISFETCHING });
  axios
    .get(`${Api}/users`)
    .then((resp) => {
      dispatch({ type: UserTypes.GET_USERS, payload: resp.data });
    })
    .catch((erro) => {
      console.log(erro);
    });
};

export const findUsers = (id) => (dispatch) => {
  dispatch({ type: UserTypes.ISFETCHING });
  axios
    .get(`${Api}/users/${id}`)
    .then((resp) => {
      dispatch({ type: UserTypes.FIND_USERS, payload: resp.data });
    })
    .catch((erro) => {
      console.log(erro);
    });
};

export const createUsers = (values) => (dispatch) => {
  dispatch({ type: UserTypes.ISFETCHING });
  axios
    .post(`${Api}/users`, values)
    .then((resp) => {
      dispatch({ type: UserTypes.CREATE_USERS, payload: resp.data });
      window.location.replace("/users");
    })
    .catch((erro) => {
      console.log(erro);
    });
};

export const updateUsers = (values, id) => (dispatch) => {
  dispatch({ type: UserTypes.ISFETCHING });
  axios
    .put(`${Api}/users/${id}`, values)
    .then((resp) => {
      dispatch({ type: UserTypes.UPDATE_USERS, payload: resp.data });
      window.location.replace("/users");
    })
    .catch((erro) => {
      console.log(erro);
    });
};

export const deleteUsers = (id) => (dispatch) => {
  dispatch({ type: UserTypes.ISFETCHING });
  axios
    .delete(`${Api}/users/${id}`)
    .then((resp) => {
      dispatch({ type: UserTypes.DELETE_USERS, payload: resp.data });
      window.location.replace("/users");
    })
    .catch((erro) => {
      console.log(erro);
    });
};
