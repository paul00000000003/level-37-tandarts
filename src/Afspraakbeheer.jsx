import React from 'react'
import './afspraakbeheer.css'

class Afspraakbeheer extends React.Component{
    constructor(){super()                
                  this.state={afspraak : [],
                              dentist  : "",
                              patientFirstName : "",
                              patientLastName : "", 
                              dag      : 0,
                              tijd     : 0}
                  this.handleSubmit=this.handleSubmit.bind(this)
                  this.handleChange=this.handleChange.bind(this)
                  this.handleChangeDag=this.handleChangeDag.bind(this)
                }
    

    componentDidMount()
    {
        this.setState({appointments:this.props.appointments})
    }

    handleChange(e)
    {
       this.setState({dentist:e.target.value})
    }
    
    handleChangeDag(e)
    {   if (isNaN(e.target.value)) {}
        else 
        {
        let dagnum=parseInt(e.target.value)
        if (dagnum!==0)
          {
           console.log("dagnum "+dagnum+" "+typeof(dagnum))
           if (isNaN(dagnum))
             {console.log("not a number")}
           else console.log("dagnum is a number")
           if ((dagnum !==0) && (dagnum !== NaN)) 
              {if (dagnum>0 && dagnum<29)
                 {this.setState({dag : dagnum})}
               else 
               {
                 alert("Dag moet tussen de 1 en 28 liggen")
               }
             }
               
           }
        }
    }


    handleSubmit(e)
    {
        console.log("aantal afspraken binnen submit  "+this.props.appointments.length)
        e.preventDefault()
    }
    
    render(){
        console.log("dag : "+this.state.dag)
        return (<div>
                  <h3>Gebruik voor het wijzigen en verwijderen van afspraken het dagoverzicht</h3>
                  <form onSubmit={this.handleSubmit}> 
                    <div className="regelcontainer">
                    <label className="labelbreedte">Tandarts</label>       
                    <select onChange={this.handleChange}>
                      <option value="Toos">Toos</option>
                      <option value="Piet">Piet</option>
                      <option value="Luc">Luc</option>
                      <option value="Marjolein">Marjolein</option>
                    </select>
                    </div> 
                    <br/> 
                    <div className="regelcontainer">
                      <p className="labelbreedte">Dag (tussen 1 en 28)</p>
                         <input id="dag" type="number" name="dag" min="1" max="28"/>  
                    </div>
                    <br/>
                    <div className="regelcontainer">
                        <p className="labelbreedte">Patient voornaam</p>
                        <input id="patientFirstname" type="text" value={this.state.patientFirstname}/> 
                        <p className="labelbreedte">Achternaam</p> 
                        <input id="patientLastName" type="text" value={this.state.patientLastname}/>
                    </div>
                    <br/>
                    <div> 
                       <p className="labelbreedte">Tijdstip als heel uur</p>
                    </div>
                    <br/> 
                    <button>Voeg afspraak toe</button>
                  </form> 
                </div>)
    }
}

export default Afspraakbeheer