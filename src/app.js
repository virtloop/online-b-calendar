import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
//import components
import Layout from "./components/layout";
const calendarWrapper = document.getElementById("calendar-wrapper");

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  calendarWrapper
);
