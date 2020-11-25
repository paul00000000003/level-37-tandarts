import React from "react";
import DayInMonth from "./DayInMonth";
import './calendar.css'

class Calendar extends React.Component 
{   constructor(){super()
                  this.handleSelectTandarts=this.handleSelectTandarts.bind(this)  
                 }

    handleSelectTandarts()
    {

    }
         
    
    render()
    {
      const divideByDay = appointments => {
        const appointmentsByDay = {};
        appointments.forEach(appointment => {
          const day = appointment.day;
          if (!appointmentsByDay.hasOwnProperty(day)) {
            appointmentsByDay[day] = [];
          }
          appointmentsByDay[day].push(appointment);
        });
        return appointmentsByDay;
      };

      const appointmentsByDay = divideByDay(this.props.appointments);

      const daysInMonthJSX = Object.values(
        appointmentsByDay
      ).map((appointmentsInDay, index) => (
        <DayInMonth appointments={appointmentsInDay} key={index} />
      ));
    
    return (
        <div>
          <form onSubmit={this.handleSelectTandarts}> 
              <label>Tandarts <input type="text" name="dentist"/></label>
              <button>Kies een tandarts</button>
          </form>
          <div className="calendarview">
            <div className="header">
              <div>Maandag</div>
              <div>Dinsdag</div>
              <div>Woensdag</div>
              <div>Donderdag</div>
              <div>Vrijdag</div>
            </div>
            <div className="table">{daysInMonthJSX}</div>
          </div>
        </div> 
      );
    }
}

export default Calendar
