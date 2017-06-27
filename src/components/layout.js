import React, { Component } from "react";
import CalendarBooking from "./calendar-booking";
//import calendar react component
import Calendar from "react-big-calendar";
import moment from "moment";

//import css and events
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../styles/main.css";
import bookings from "../events/bookings";
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
Calendar.momentLocalizer(moment); // or globalizeLocalizer

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormShown: false
    };
  }
  addNewBooking(start_date, end_date, booking) {
    // alert(
    //   `selected slot: \n\nstart ${start_date.toLocaleString()} ` +
    //     `\nend: ${end_date.toLocaleString()}`
    // );
    //display add New booking form
    this.setState({ isFormShown: true });
  }

  render() {
    return (
      <div className="layout-calendar">
        <Calendar
          selectable
          events={bookings}
          defaultView="week"
          startAccessor="startDate"
          endAccessor="endDate"
          onSelectEvent={event => alert(event.title)}
          views={["month", "week", "day"]}
          onSelectSlot={slotInfo => {
            this.addNewBooking.call(this, slotInfo.start, slotInfo.end);
          }}
        />
        {this.state.isFormShown
          ? <CalendarBooking isFormShown={this.state.isFormShown} />
          : null}
      </div>
    );
  }
}
