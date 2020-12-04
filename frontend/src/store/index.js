import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as toastr } from 'react-redux-toastr';
import users from './users';
import searchs from './search';


const reducers = combineReducers({
  toastr,
  users,
  searchs,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
