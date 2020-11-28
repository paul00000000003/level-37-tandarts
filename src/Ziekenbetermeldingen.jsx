import React from 'react'
import "./ziekbeter.css"


class Ziekenbetermeldingen extends React.Component{

    constructor(){super()
                  this.state={patienten : [],
                              dentists : [],
                              assistants : [],
                              appointments : [],
                              teVerwerken: "",
                              isZiek : ""}
                  this.ziekmelding=this.ziekmelding.bind(this)
                  this.handleChangeZiekmelding=this.handleChangeZiekmelding.bind(this)
                  this.handleChange=this.handleChange.bind(this)}

    handleChange(e)
    {          
        e.preventDefault()
    }

    handleChangeZiekmelding(e)
    { if (e.target.value==="ziek")
        this.setState({isZiek:"J"})
      else this.setState({isZiek:"N"})
    }

    ziekmelding(e)
    {
        let soortPersoon=document.getElementById("soortPersoon").value
        let firstName=document.getElementById("firstName").value 
        let surName=document.getElementById("surName").value  
        let isZiek=this.state.isZiek
        this.setState({teVerwerken:true})
        //console.log("soort persoon : "+soortPersoon+" "+isZiek)
        e.preventDefault()
        switch (soortPersoon)
        {
            case "patient"   :let patientGevonden="N"
                              let patienten=this.props.patienten
                              let patientIndex=0
                              patienten=this.props.patienten.map((element,index) => {if ((element.firstName.toUpperCase()===firstName.toUpperCase()) && (element.surName.toUpperCase()===surName.toUpperCase()))
                                                           {  element.isSick="J"
                                                              patientGevonden="J"
                                                              patientIndex=index
                                                           }
                                                        return element})
                             
                              if (patientGevonden !== "J")
                                 alert("Deze patient staat met deze voor- en achternaam niet in het systeem")
                              else
                              {   this.props.patienten[patientIndex].isSick="J"
                                  if (isZiek==="J")
                                   {
                                    let indices=[]
                                    let patientNaam=firstName.toUpperCase()+" "+surName.toUpperCase()
                                    console.log("patientNaam : "+patientNaam)
                                    this.props.appointments.forEach((element,index) => {if (element.patient.toUpperCase()===patientNaam)
                                                                                          indices.push(index)})
                                    let verschuifstap=0 
                                    indices.forEach(index => {this.props.appointments.splice(index-verschuifstap,1)
                                                              verschuifstap=verschuifstap+1})
                                    //this.props.appointments=appointments2
                                    //this.setState({appointments : this.props.appointments})
                                   }
                              }
                              break; 
            case "assistant" :if (((firstName.toUpperCase() === "JAAP") && (surName.toUpperCase()==="DE BOER"))||
                                  ((firstName.toUpperCase() === "MIES") && (surName.toUpperCase()==="BOERMANS")))
                                   {
                                      this.props.assistenten.map(element => {if ((element.firstName.toUpperCase()===firstName.toUpperCase()) && 
                                                                      (element.surName.toUpperCase()===surName.toUpperCase()))
                                                                        element.isSick=isZiek
                                                                    return element})
                                      this.setState({assistenten:this.props.assistenten})
                                   }
                              else alert("Er is geen assistent met deze voor- en achternaam ")
                              break
            case "dentist"   :let dentistGevonden="N"
                              this.props.dentists.map(element => {if ((element.firstName === firstName)&&(element.surName===surName))
                                                                    {dentistGevonden="J"
                                                                     element.isSick=isZiek}})
                              if (dentistGevonden==="J")
                                 this.setState({dentists:this.props.dentists})
                              else alert("Er is geen tandarts met deze voor- en achternaam")
                              break  
            case "default"  : alert("deze waarde verwacht ik niet")
        }        
       setTimeout(()=> {
           this.setState({teVerwerken: false})
           document.getElementById("soortPersoon").value=""
           document.getElementById("firstName").value=""
           document.getElementById("surName").value=""
           let ziekRadio=Array.from(document.getElementsByClassName("ziek"))
           ziekRadio.forEach(element => element.checked=false)
       },1000)
    }

    componentDidMount()
    {
       this.setState({patienten : this.props.patienten,
                      assistenten : this.props.assistenten,
                      dentists   : this.props.dentists,
                      appointments : this.props.appointments
                      })
    }


    render(){
        return (<div>
                  <h1>ziek en betermeldingen</h1>
                  <br/>
                  <br/> 
                  <form onSubmit={this.ziekmelding}>
                    <div className="regelcontainer">
                      <label className="soortPersoon">Soort persoon</label>       
                      <select id="soortPersoon" onChange={this.handleChange}>
                         <option value="dentist">dentist</option>
                         <option value="assistant">assistant</option>
                         <option value="patient">patient</option> 
                      </select>
                    </div>
                    <br/> 
                    <div className="regelcontainer">
                      <p className="ziekregistratieNaam">Voornaam</p>
                      <input id="firstName" type="text" name="firstName"/>  
                      <p className="ziekregistratieAchternaam">Achternaam</p>
                      <input id="surName" type="text" name="surName"/>  
                    </div>
                    <br/>
                    <div className="regelcontainer">
                      <p className="ziekregistratie">Ziek-/betermelding </p>
                      <p className="ziekregistratie2">Ziek</p>
                      <input className="ziek" type="radio" name="isZiek" value="ziek" onChange={this.handleChangeZiekmelding}/>  
                      <p className="ziekregistratie2">Beter</p>
                      <input className="ziek" type="radio" name="isZiek" value="beter" onChange={this.handleChangeZiekmelding}/>  
                    </div>
                    <br/>
                    <button className="buttonVerwerking">Verwerk ziek-/betermelding</button>
                  </form> 
                  {this.state.teVerwerken ? <p>Gegevens worden verwerkt</p>:<p></p>}
                </div> )
}}

export default Ziekenbetermeldingen