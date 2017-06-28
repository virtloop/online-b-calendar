const ReducerBookings = (state = {}, action) => {
  switch (action.type) {
    case "GET_BOOKINGS":
      return state;
      break;
    default:
      return state;
  }
};

export default ReducerBookings;
