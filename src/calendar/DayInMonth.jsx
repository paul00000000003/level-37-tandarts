import React from "react";
import AppointmentInMonth from "./AppointmentInMonth";

class DaysInMonth extends React.Component {
  render() {
    let dagen = [];
    let appointments_month = this.props.appointments.sort();

    const appointmentsJSX = this.props.appointments.map(
      ({ time, patient, day }, index) => (
        <AppointmentInMonth
          time={time}
          patient={patient}
          day={day}
          key={index}
        />
      )
    );
    return <div className="day">{appointmentsJSX}</div>;
  }
}

export default DaysInMonth;
