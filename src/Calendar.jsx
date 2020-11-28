import React from "react";
import DayInMonth from "./DayInMonth";
import './calendar.css'

const werkDagenBij=(teller,rel,dagen2) => 
{
  teller=teller+1
  if ((teller%7)===6||(teller%7)===0)
     {}
  else
  { console.log("toegevoegde dagen "+teller)
    if (dagen2.includes(teller))
      {}
    else 
    {
    rel[teller]=[]
    rel[teller].push({id       : 0,
                                    day      : teller,
                                    time     : 0,
                                    patient  : "", 
                                    dentist  : "",
                                    assistant: "",
                                    treatment: "" 
                                   })
    }
  }
  return teller 
}



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
    { let dagen=[] 
      //console.log("aantal elementen : "+this.props.appointments.length)
      const divideByDay = appointments => {
        const appointmentsByDay = {};
        let appointmentsMonth=[]
        let appointmentsMonthAanvullen=[]
      
        appointments.forEach(appointment => {if ((appointment.dentist === this.state.dentist) && (this.state.dentist !== ""))
                                            { console.log("afspraak "+appointment.dentist+" "+appointment.day)
                                              const day = appointment.day;
                                              if (!appointmentsByDay.hasOwnProperty(day)) {
                                                 appointmentsByDay[day] = [];
                                                }
                                              appointmentsByDay[day].push(appointment);
                                              if (dagen.includes(appointment.day))
                                                 {}
                                              else dagen.push(appointment.day)
                                            }
                                            });
        return appointmentsByDay;
      };
      const appointmentsByDay = divideByDay(this.props.appointments);
      let eersteDag=dagen[0]
      let teller=0 
      let prevDay=0
      let dagen2=dagen
      // Middels het onderstaande stukje code wordt er voor gezorgd dat in de kalendermaand alle dagen altijd zichtbaar zijn 
      // ongeacht het aantal vrije dagen. Ook wordt er voor gezorgd, dat afspraken niet bij de verkeerde dag worden ingevuld. 
      if (eersteDag > 1)
         { 
           while (teller < eersteDag) 
           { teller=werkDagenBij(teller,appointmentsByDay,dagen2)
             dagen.push(teller)
           }
         } 
     //dagen.push(16)
    
     dagen.forEach (element => {
                                if (element-prevDay > 1)
                                {  teller=prevDay
                                   while (element-teller > 1)
                                   { teller=werkDagenBij(teller,appointmentsByDay,dagen2)
                                   }
                                }
                                prevDay=element
     })
    if (prevDay < 26)
       { teller=prevDay
         while (teller <26)
         {
           teller=werkDagenBij(teller,appointmentsByDay,dagen2)
         }
       }
    const daysInMonthJSX = Object.values(
        appointmentsByDay
      ).map((appointmentsInDay, index) => (
        <DayInMonth appointments={appointmentsInDay} key={index} />
      ));
    console.log("Days in month : "+daysInMonthJSX.length)    
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
