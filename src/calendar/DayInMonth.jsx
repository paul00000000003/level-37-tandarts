import React from "react";
import AppointmentInMonth from "./AppointmentInMonth";

class DaysInMonth extends React.Component {
  render() {
    let appointments_month = this.props.appointments.sort();

    const appointmentsJSX = appointments_month.map(
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
