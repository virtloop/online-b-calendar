import React, { Component } from "react";

//import calendar react component
import Calendar from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";
import events from "../events/bookings";
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
Calendar.momentLocalizer(moment); // or globalizeLocalizer

let myEventsList = events;
console.log(myEventsList);
const MyCalendar = props =>
  <div>
    <Calendar
      selectable
      events={myEventsList}
      defaultDate={new Date(2015, 3, 12)}
      defaultView="week"
      startAccessor="startDate"
      endAccessor="endDate"
      onSelectEvent={event => alert(event.title)}
      onSelectSlot={slotInfo =>
        alert(
          `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
            `\nend: ${slotInfo.end.toLocaleString()}`
        )}
    />
  </div>;

export default class Layout extends Component {
  render() {
    return <div className="layout-calendar"><MyCalendar /></div>;
  }
}
