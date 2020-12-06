import React from "react";
import "./day.css";
import AppointmentInDay from "./AppointmentInDay";

let indexOud = 0;
let idOud = 0;

const rangschikOpTijdStip = (rel) =>
  rel.sort(function (a, b) {
    let tijd1 = parseInt(a.time);
    let tijd2 = parseInt(b.time);
    if (tijd1 < tijd2) {
      return -1;
    }
    if (tijd1 > tijd2) {
      return 1;
    }
    return 0;
  });

const zoekOudRecord = (appointments, day, dentist, time) => {
  appointments.forEach((element, index) => {
    if (
      parseInt(element.day) === parseInt(day) &&
      element.dentist === dentist &&
      parseInt(element.time) === parseInt(time)
    ) {
      indexOud = index;
      idOud = element.id;
    }
  });
  return [indexOud, idOud];
};

const verwijderRecord = (appointments, indexOud) =>
  appointments.splice(indexOud, 1);

const voegRecordToe = (
  appointments,
  idOud,
  dentist,
  patient,
  newDay,
  newTime
) =>
  appointments.push({
    id: idOud,
    dentist: dentist,
    patient: patient,
    day: newDay,
    time: newTime,
  });

class Day extends React.Component {
  constructor() {
    super();
    this.state = {
      dentist: "Toos",
      day: 0,
      time: 0,
      appointments: [],
      wijzigen: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickWijzigen = this.handleClickWijzigen.bind(this);
    this.afspraakVerwijderen = this.afspraakVerwijderen.bind(this);
    this.afspraakWijzigen = this.afspraakWijzigen.bind(this);
  }

  handleChange(e) {
    this.setState({ dentist: e.target.value, wijzigen: false });
    e.preventDefault();
  }

  handleClickWijzigen(e) {
    let newDay = parseInt(document.getElementById("newDay").value);
    let newTime = parseInt(document.getElementById("newTime").value);
    if (newDay % 7 === 6 || newDay % 7 === 0)
      alert("De gekozen dag valt in het weekend");
    else {
      indexOud = 0;
      this.props.appointments.forEach((element, index) => {
        if (
          element.day === newDay &&
          element.dentist === this.state.dentist &&
          element.time === newTime
        )
          indexOud = index;
      });
      if (indexOud !== 0)
        alert(
          "Deze tandarts heeft op de gekozen dag en tijdstip al een afspraak"
        );
      else {
        let idOud = 0;
        let oudRecord = zoekOudRecord(
          this.props.appointments,
          this.state.day,
          this.state.dentist,
          this.state.time
        );
        indexOud = oudRecord[0];
        idOud = oudRecord[1];

        if (indexOud !== 0) {
          verwijderRecord(this.props.appointments, indexOud);
          voegRecordToe(
            this.props.appointments,
            idOud,
            this.state.dentist,
            this.state.patient,
            newDay,
            newTime
          );
          this.setState({
            appointments: this.props.appointments,
            wijzigen: false,
          });
        } else alert("Oude record niet gevonden");
      }
    }
    e.preventDefault();
  }

  handleClick(e) {
    let dayInput = document.getElementById("day").value;
    this.setState({ day: dayInput, wijzigen: false });
    e.preventDefault();
  }

  afspraakVerwijderen(patient, dentist, time) {
    let teVerwijderenId = 0;
    let gevonden = "N";
    this.props.appointments.forEach((element, index) => {
      if (
        element.patient === patient &&
        element.dentist === dentist &&
        element.time === time
      ) {
        gevonden = "J";
        teVerwijderenId = index;
      }
    });
    if (gevonden === "J")
      verwijderRecord(this.props.appointments, teVerwijderenId);
    this.setState({ appointments: this.props.appointments });
  }

  afspraakWijzigen(patient, dentist, time) {
    this.setState({
      patient: patient,
      dentist: dentist,
      time: time,
      wijzigen: true,
    });
  }

  componentDidMount() {
    this.setState({ appointments: this.props.appointments });
  }

  render() {
    let appointments2 = this.state.appointments.filter(
      (element) =>
        element.dentist === this.state.dentist &&
        parseInt(element.day) === parseInt(this.state.day)
    );
    let appointmentsSorted = rangschikOpTijdStip(appointments2);

    const appointmentsJSX = appointmentsSorted.map(
      ({ time, patient, dentist, assistant }, index) => (
        <AppointmentInDay
          time={time}
          patient={patient}
          dentist={dentist}
          assistant={assistant}
          afspraakWijzigen={this.afspraakWijzigen}
          afspraakVerwijderen={this.afspraakVerwijderen}
          dentists={this.props.dentists}
          key={index}
        />
      )
    );
    let dentistsMapped = this.props.dentists.map((element) => (
      <option value={element.firstName}>{element.firstName}</option>
    ));

    return (
      <div>
        <h3>
          Gebruik voor het toevoegen van een afspraak de afspraakoptie. Je kunt
          hier alleen verwijderen en wijzigen
        </h3>
        <form className="dagquery">
          <label className="tandartslabel">
            Tandarts
            <select onChange={this.handleChange}>{dentistsMapped}</select>
          </label>
          {this.state.wijzigen ? (
            <div>
              <label>dag {this.state.day} </label>
              <p>tijdstip : {this.state.time}</p>
              <p>patient : {this.state.patient}</p>
              <label>Nieuwe dag</label>
              <input id="newDay" type="number" name="day" min="1" max="28" />
              <label>Nieuw tijdstip (in uren tussen 7 en 19</label>
              <input
                id="newTime"
                type="number"
                name="tijdstip"
                min="7"
                max="19"
              />
              <button onClick={this.handleClickWijzigen}>
                Wijzig gegevens
              </button>
            </div>
          ) : (
            <div className="inputcontainer">
              <label>
                dag <input id="day" type="number" name="day" min="1" max="28" />{" "}
              </label>
              <button onClick={this.handleClick}>Vraag dagschema op</button>
            </div>
          )}
        </form>
        <ul className="dayview">{appointmentsJSX}</ul>
      </div>
    );
  }
}

export default Day;
