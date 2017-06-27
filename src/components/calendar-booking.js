import React, { Component } from "react";

export default class CalendarBooking extends Component {
  componentWillMount() {}
  closeForm() {
    console.log("close form");
  }
  render() {
    return (
      <div className="booking-form">
        Add Booking <button onClick={this.closeForm.bind(this)}>Close</button>
      </div>
    );
  }
}
