import React from "react";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

class AppointmentInDay extends React.Component
{

  render(){
  return (
    <li className="appointment">
      <div className="time">{format_time(this.props.time)}</div>
      <div className="patient">Patiënt: {this.props.patient}</div>
      <div className="dentist">Tandarts: {this.props.dentist}</div>
      <div className="assistant">Assistent: {this.props.assistant}</div>
      <div className="containerknop">
         <button className="knop" onClick={(e)=>this.props.afspraakVerwijderen(this.props.patient,this.props.dentist,this.props.time)}>Verwijderen</button> 
         <button className="knop" onClick={(e)=>this.props.afspraakWijzigen(this.props.patient,this.props.dentist,this.props.time)}>Wijzigen</button> 
      </div>
    </li>
  )
  }
}


export default AppointmentInDay
