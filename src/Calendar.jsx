import React from "react";
import DayInMonth from "./DayInMonth";
import './calendar.css'

class Calendar extends React.Component 
{   constructor(){super()
                  this.state = {dentist:"Toos"}
                  this.handleChange=this.handleChange.bind(this)  
                 }

    handleChange(e)
    { 
      this.setState({dentist : e.target.value})  
      e.preventDefault() 
    }
         
    render()
    {
      const divideByDay = appointments => {
        const appointmentsByDay = {};
        appointments.forEach(appointment => {if ((appointment.dentist === this.state.dentist) && (this.state.dentist !== ""))
                                            {
                                              const day = appointment.day;
                                              if (!appointmentsByDay.hasOwnProperty(day)) {
                                                 appointmentsByDay[day] = [];
                                                }
                                              appointmentsByDay[day].push(appointment);}
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
          <form> 
              <label>Tandarts
                 <select onChange={this.handleChange}>
                    <option value="Toos">Toos</option>
                    <option value="Piet">Piet</option>
                    <option value="Luc">Luc</option>
                    <option value="Marjolein">Marjolein</option>
                 </select> 
              </label>
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
