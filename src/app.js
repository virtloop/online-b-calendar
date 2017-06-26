import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

//import components
import Layout from "./components/layout";
const calendarWrapper = document.getElementById("calendar-wrapper");

ReactDOM.render(<Layout />, calendarWrapper);
