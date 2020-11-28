import React from "react";
import "./day.css";
import AppointmentInDay from "./AppointmentInDay";
import { runInThisContext } from "vm";
//import { threadId } from "worker_threads";
//import { timeStamp } from "console";

class Day extends React.Component {

  constructor (){super()
                 this.state={dentist : "Toos",
                             day     : 0,
                             time    : 0,
                             appointments : [],
                             wijzigen : false}
                 this.handleChange=this.handleChange.bind(this)
                 this.handleClick=this.handleClick.bind(this)
                 this.handleClickWijzigen=this.handleClickWijzigen.bind(this)
                 this.afspraakVerwijderen=this.afspraakVerwijderen.bind(this)
                 this.afspraakWijzigen=this.afspraakWijzigen.bind(this)        
                }
                 

  handleChange(e)
    { 
      this.setState({dentist  : e.target.value,
                     wijzigen : false})  
      e.preventDefault() 
    }

  handleClickWijzigen(e)
  {
    let newDay=parseInt(document.getElementById("newDay").value)
    let newTime=parseInt(document.getElementById("newTime").value) 
    //console.log("check wijzigbaarheid dag : "+newDay+" time : "+newTime+" tandarts : "+this.state.dentist)
    //console.log("type nieuwe dag "+typeof(newDay))
   
    if ((newDay % 7 === 6) || (newDay % 7 === 0))
      alert("De gekozen dag valt in het weekend")
    else
    { let indexOud=0 
      this.props.appointments.forEach((element,index) => {if ((element.day === newDay) && (element.dentist===this.state.dentist) && (element.time===newTime))
                                                            indexOud=index})
      if (indexOud !== 0)
         alert("Deze tandarts heeft op de gekozen dag en tijdstip al een afspraak")
      else
      { let oldDay=this.state.day 
        let oldTime=this.state.time
        let idOud=0
        console.log("oude dag : "+this.state.day+" tijd "+this.state.time+" tandarts "+this.state.dentist)
        this.props.appointments.forEach((element,index)=> {if ((element.day==this.state.day) && 
                                                               (element.dentist===this.state.dentist) && 
                                                               (element.time==this.state.time))
                                                             {indexOud=index
                                                              idOud=element.id
                                                              }})
        if (indexOud !==0)
          {this.props.appointments.splice(indexOud,1) 
           this.props.appointments.push({id       : idOud,
                                         dentist  : this.state.dentist,
                                         patient  : this.state.patient, 
                                         day      : newDay,
                                         time     : newTime})
           this.setState({appointments : this.props.appointments,
                          wijzigen     : false})
          }
        else alert("Oude record niet gevonden")
      } 
    }
    e.preventDefault() 
  }
  
  handleClick(e)
  {
    let dayInput=document.getElementById("day").value 
    this.setState({day:dayInput,
                   wijzigen:false})
    e.preventDefault()
  } 
                    
  afspraakVerwijderen(patient,dentist,time)
  {
    let teVerwijderenId=0
    let gevonden="N" 
    this.props.appointments.forEach((element,index) => {if ((element.patient === patient) && (element.dentist===dentist) && (element.time===time))
                                                           {gevonden="J"
                                                            teVerwijderenId=index}})
    if (gevonden==="J")
      this.props.appointments.splice(teVerwijderenId,1)
    this.setState({appointments:this.props.appointments})
  }

  afspraakWijzigen(patient,dentist,time)
  {
    this.setState({patient : patient,
                   dentist : dentist,
                   time    : time, 
                   wijzigen: true})
  } 

  componentDidMount()
  {
    this.setState({appointments:this.props.appointments})
  }


render()
{ let appointments2=this.state.appointments.filter(element => element.dentist === this.state.dentist && element.day==this.state.day)
  const appointmentsJSX = appointments2.map(
    ({ time, patient, dentist, assistant }, index) => (
      <AppointmentInDay
        time={time}
        patient={patient}
        dentist={dentist}
        assistant={assistant}
        afspraakWijzigen={this.afspraakWijzigen}
        afspraakVerwijderen={this.afspraakVerwijderen}
        key={index}
      />
    )) 
  return (  <div>
               <h3>Gebruik voor het toevoegen van een afspraak de afspraakoptie. Je kunt hier alleen verwijderen en wijzigen</h3>
               <form> 
                 <label>Tandarts
                   <select onChange={this.handleChange}>
                     <option value="Toos">Toos</option>
                     <option value="Piet">Piet</option>
                     <option value="Luc">Luc</option>
                     <option value="Marjolein">Marjolein</option>
                   </select> 
                 </label> 
                 <label>dag
                    <input id="day" type="number" name="day" min="1" max="28"/> 
                 </label>
                 {this.state.wijzigen ? <div>
                                           <p>tijdstip : {this.state.time}</p> 
                                           <p>patient  : {this.state.patient}</p>
                                           <label>Nieuwe dag</label> 
                                           <input id="newDay" type="number" name="day" min="1" max="28"/> 
                                           <label>Nieuw tijdstip (in uren tussen 7 en 19</label>
                                           <input id="newTime" type="number" name="tijdstip" min="7" max="19"/> 
                                           <button onClick={this.handleClickWijzigen}>Wijzig gegevens</button>
                                        </div>:<button onClick={this.handleClick}>Vraag dagschema op</button>}
              </form>
              <ul className="dayview">{appointmentsJSX}</ul>
           </div> 
         )
}
}

export default Day 