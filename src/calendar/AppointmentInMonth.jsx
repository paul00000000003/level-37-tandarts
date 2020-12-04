import React from "react";

const format_time = (time) => (time < 10 ? `0${time}:00u` : `${time}:00u`);

class AppointmentInMonth extends React.Component {
  render() {
    let timestamp = this.props.time;
    let afdrukken = true;
    if (timestamp === 0) afdrukken = false;
    if (afdrukken)
      return (
        <div className="appointment">
          <span className="time">{format_time(this.props.time)}</span>
          <span className="patient">{this.props.patient}</span>
        </div>
      );
    else
      return (
        <div className="appointment">
          <span></span>
        </div>
      );
  }
}

export default AppointmentInMonth;
