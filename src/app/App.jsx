import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./app.css";
import Home from "../home/Home";
import Day from "../day/Day";
import Ziekenbetermeldingen from "../ziekenbetermeldingen/Ziekenbetermeldingen";
import Afspraakbeheer from "../afspraakbeheer/Afspraakbeheer";
import {
  dentistArray,
  assistentenArray,
  patientenArray,
  appointments,
} from "../klantendb";
import Calendar from "../calendar/Calendar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dentists: [],
      assistenten: [],
      patienten: [],
      appointments: [],
      zieken: [],
    };
  }

  componentDidMount() {
    //{this.addDentist("Toos", "Trekker", "06-12345678", "toos@tandartspraktijkbvt.nl")}
    this.setState({ dentists: dentistArray });
    this.setState({ assistenten: assistentenArray });
    this.setState({ patienten: patientenArray });
    this.setState({ appointments: appointments });
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                {" "}
                <Link to={"/"} className="nav-link">
                  home
                </Link>
              </li>
              <li>
                {" "}
                <Link to={"./calendar"}>calendar</Link>
              </li>
              <li>
                {" "}
                <Link to={"/day"} className="nav-link">
                  {" "}
                  day{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link to={"/ziekenbetermeldingen"} className="nav-link">
                  {" "}
                  ziek/beter{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link to={"/afspraakbeheer"}> nieuwe afspraken </Link>
              </li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/calendar">
              <Calendar appointments={appointments} dentists={dentistArray} />
            </Route>
            <Route path="/day">
              <Day appointments={appointments} dentists={dentistArray} />
            </Route>
            <Route path="/afspraakbeheer">
              <Afspraakbeheer {...this.state} />
            </Route>
            <Route path="/ziekenbetermeldingen">
              <Ziekenbetermeldingen
                appointments={appointments}
                dentists={dentistArray}
                patienten={patientenArray}
                assistenten={assistentenArray}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
