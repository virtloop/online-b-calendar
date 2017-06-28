import { combineReducers } from "redux";
import ReducerBookings from "./reducer_bookings";

const rootReducer = combineReducers({
  bookings: ReducerBookings
});

export default rootReducer;
