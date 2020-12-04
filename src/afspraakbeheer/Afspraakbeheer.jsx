import React from "react";
import "./afspraakbeheer.css";

class Afspraakbeheer extends React.Component {
  constructor() {
    super();
    this.state = {
      afspraak: [],
      dentist: "",
      assistant: "",
      patientFirstName: "",
      patientSurName: "",
      dag: 0,
      tijd: 0,
      behandeltype: "",
      appointments: [],
      patienten: [],
      assistenten: [],
      dentists: [],
      wordtVerwerkt: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTreatments = this.handleTreatments.bind(this);
  }

  componentDidMount() {
    this.setState({
      appointments: this.props.appointments,
      dentists: this.props.dentists,
      assistenten: this.props.assistenten,
      patienten: this.props.patienten,
    });
  }

  handleChange(e) {
    if (e.target.name === "dentist") this.setState({ dentist: e.target.value });
    else this.setState({ assistant: e.target.value });
    e.preventDefault();
  }

  handleTreatments(e) {
    this.setState({ behandeltype: e.target.value });
    e.preventDefault();
  }

  handleSubmit(e) {
    e.preventDefault();
    let dentist = document.getElementById("dentist").value;
    let assistant = document.getElementById("assistant").value;

    let day = parseInt(document.getElementById("day").value);
    let time = parseInt(document.getElementById("time").value);
    let patientFirstName = document.getElementById("patientFirstName").value;
    let patientSurName = document.getElementById("patientSurName").value;
    let treatment = document.getElementById("treatment").value;
    if (day < 1 || day > 28) alert("Dag moet tussen de 1 en 28 liggen");
    else if (day % 7 === 0 || day % 7 === 6)
      alert("Afspraken kunnen alleen op werkdagen worden gemaakt ");
    else if (time < 7 || time > 19)
      alert("Tijd moet tussen 7 uur 's ochtends en 19 uur 's avonds liggen");
    else {
      let patientGeregistreerd = "N";
      let isZiek = "N";
      this.state.patienten.forEach((element) => {
        if (
          element.firstName.toUpperCase() === patientFirstName.toUpperCase() &&
          element.surName.toUpperCase() === patientSurName.toUpperCase()
        ) {
          patientFirstName = element.firstName;
          patientSurName = element.surName;
          if (element.isSick === "J") isZiek = "J";
          patientGeregistreerd = "J";
        }
      });
      if (patientGeregistreerd === "N")
        alert(
          "Patient met deze voor- en achternaam komt niet in het systeem voor"
        );
      else {
        if (isZiek === "J")
          alert("Zieke patienten kunnen in dit systeem geen afspraken maken");
        else {
          let alAfspraakIngepland = "N";
          let id = 0;
          this.props.appointments.forEach((element) => {
            if (
              element.dentist === dentist &&
              element.time == time &&
              element.day == day
            )
              alAfspraakIngepland = "J";
            if (element.id > id) id = element.id;
          });
          id += 1;
          if (alAfspraakIngepland === "J")
            alert(
              "Deze tandarts heeft op deze dag en op dit tijdstip al een afspraak"
            );
          else {
            this.setState({ wordtVerwerkt: true });
            this.props.appointments.push({
              id: id,
              day: day,
              time: time,
              patient: patientFirstName + " " + patientSurName,
              dentist: dentist,
              assistant: assistant,
              treatment: treatment,
            });
            this.setState({ appointments: this.props.appointments });
            setTimeout(() => {
              this.setState({ wordtVerwerkt: false });
              document.getElementById("dentist").value = "";
              document.getElementById("assistant").value = "";
              document.getElementById("time").value = "";
              document.getElementById("day").value = "";
              document.getElementById("patientFirstName").value = "";
              document.getElementById("patientSurName").value = "";
              document.getElementById("treatment").value = "";
            }, 1000);
          }
        }
      }
    }
  }

  render() {
    let wordtVerwerkt = false;
    if (this.state.wordtVerwerkt) wordtVerwerkt = true;

    return (
      <div>
        <h3>
          Gebruik voor het wijzigen en verwijderen van afspraken het
          dagoverzicht
        </h3>
        <br />
        <form onSubmit={this.handleSubmit}>
          <div className="regelcontainer">
            <p className="labelbreedte">Tandarts</p>
            <select id="dentist" onChange={this.handleChange}>
              <option value="Toos">Toos</option>
              <option value="Piet">Piet</option>
              <option value="Luc">Luc</option>
              <option value="Marjolein">Marjolein</option>
            </select>
          </div>
          <br />
          <div className="regelcontainer">
            <p className="assistentLabel">Assistent</p>
            <select id="assistant" onChange={this.handleChange}>
              <option value="">Geen assistent</option>
              <option value="Jaap">Jaap</option>
              <option value="Mies">Mies</option>
            </select>
          </div>
          <br />
          <div className="regelcontainer">
            <p className="labelbreedte">Dag (tussen 1 en 28)</p>
            <input id="day" type="number" name="dag" min="1" max="28" />
          </div>
          <br />
          <div className="regelcontainer">
            <p className="labelPatientVoornaam">Patient voornaam</p>
            <input id="patientFirstName" type="text" />
            <p className="labelbreedte">Achternaam</p>
            <input id="patientSurName" type="text" />
          </div>
          <br />
          <div className="regelcontainer">
            <p className="labelbreedte">Tijdstip als heel uur</p>
            <input id="time" type="number" value={this.state.time} />
          </div>
          <br />
          <div className="regelcontainer">
            <p className="labelbreedte">Behandeltype</p>
            <select id="treatment" onChange={this.handleTreatments}>
              <option value="Controle">Controle</option>
              <option value="Mondhygiene">Mondhygiene</option>
              <option value="Wortelkanaalbehandelingen">
                Wortelkanaalbehandelingen
              </option>
              <option value="Implantaten">Implantaten</option>
              <option value="Gaatjesvullen">Gaatjes vullen</option>
            </select>
          </div>
          <br />
          <br />
          <br />
          <button className="toevoegButton">Voeg afspraak toe</button>
        </form>
        {wordtVerwerkt ? (
          <p>Nieuwe afspraak geaccordeerd en verwerkt.</p>
        ) : (
          <p></p>
        )}
      </div>
    );
  }
}

export default Afspraakbeheer;
