import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux';
import * as serviceWorker from "./serviceWorker";
import store from './store';

import "./App.css";

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
   </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
