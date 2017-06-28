import { createStore } from "redux";
import reducer from "../reducers";

const initialState = {
  bookings: [
    {
      title: "event name",
      startDate: new Date(2017, 7, 13, 0, 0, 0),
      endDate: new Date(2017, 7, 20, 0, 0, 0)
    },
    {
      title: "Some Event",
      startDate: new Date(2017, 7, 9, 0, 0, 0),
      endDate: new Date(2017, 7, 9, 0, 0, 0)
    }
  ]
};

let store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
