import React, { Component } from "react";
import { connect } from "react-redux";
import { store, actionCreators } from "../redux";

export default class CalendarBooking extends Component {
  componentWillMount() {}

  render() {
    return (
      <div className="booking-form">
        Add Booking <button onClick={this.props.closeForm}>Close</button>

        <p>{this.props.start.toLocaleString()}</p>
        <p>{this.props.end.toLocaleString()}</p>

        <button>Save</button>
        <button>Delete</button>
      </div>
    );
  }
}
