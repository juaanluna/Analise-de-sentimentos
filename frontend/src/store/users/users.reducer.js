import { UserTypes } from "../users/users.action";

const INITIAL_STATE = {
  user: {},
  users: [],
  isAuth: localStorage.getItem("user") ? true : false,
  signup: JSON.parse(localStorage.getItem("user")) || null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.LOGIN:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...state, isAuth: true, signup: action.payload };

    case UserTypes.LOGOUT:
      localStorage.removeItem("user");
      return { ...state, isAuth: false, signup: null };

    case UserTypes.GET_USERS:
      return { ...state, users: action.payload };

    case UserTypes.FIND_USERS:
      return { ...state, user: action.payload };

    case UserTypes.CREATE_USERS:
      return state;

    case UserTypes.UPDATE_USERS:
      return state;

    case UserTypes.DELETE_USERS:
      return state;

    default:
      return state;
  }
};
