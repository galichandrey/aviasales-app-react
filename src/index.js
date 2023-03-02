import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { compose, applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";

import App from "./app";
import {
  fetchTicketsReducer,
  filterFlightReducer,
  sortReducer,
  flightCardListReducer,
  loadMoreTicketsReducer,
} from "./app/model/reducers_all";
const rootReducer = combineReducers({
  fetchTicketsReducer,
  filterFlightReducer,
  sortReducer,
  flightCardListReducer,
  loadMoreTicketsReducer,
});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
  // compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
