/* eslint-disable import/no-cycle */
import { searchTypes } from "./search.action";

const INITIAL_STATE = {
  search: {},
  searchs: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case searchTypes.GET_SEARCHS:
      return { ...state, searchs: action.payload };
    case searchTypes.FIND_SEARCH:
      return { ...state, search: action.payload };
    default:
      return state;
  }
};
