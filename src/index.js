import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { combineReducers, legacy_createStore as createStore } from "redux";

import App from "./app";
import { tabReducer } from "./features/TabsMenu/model/reducer";
import { filterFlightReducer } from "./features/FilterFlight/model/reducer";
const rootReducer = combineReducers({
  tabReducer,
  filterFlightReducer,
});

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
