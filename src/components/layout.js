import React, { Component } from "react";
import CalendarBooking from "../containers/calendar-booking";
//import calendar react component
import Calendar from "react-big-calendar";
import moment from "moment";

//import css and events
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../styles/main.css";
import events from "../events";
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
Calendar.momentLocalizer(moment); // or globalizeLocalizer

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: events,
      isFormShown: false,
      start: null,
      end: null
    };
  }
  closeForm() {
    this.setState({ isFormShown: false });
  }
  addNewBooking(start_date, end_date, booking) {
    //display add New booking form
    this.setState({ isFormShown: true, start: start_date, end: end_date });
  }

  render() {
    console.log(events);
    return (
      <div className="layout-calendar">
        <Calendar
          selectable
          events={this.state.events}
          defaultView="week"
          scrollToTime={new Date(1970, 1, 1, 6)}
          startAccessor="startDate"
          endAccessor="endDate"
          onSelectEvent={event => alert(event.title)}
          views={["month", "week", "day", "agenda"]}
          onSelectSlot={slotInfo => {
            this.addNewBooking.call(this, slotInfo.start, slotInfo.end);
          }}
        />
        {this.state.isFormShown
          ? <CalendarBooking
              isFormShown={this.state.isFormShown}
              closeForm={this.closeForm.bind(this)}
              start={this.state.start}
              end={this.state.end}
            />
          : null}
      </div>
    );
  }
}
