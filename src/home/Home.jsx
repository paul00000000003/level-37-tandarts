import React from "react";
import "./home.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <br />
        <div className="containers">
          <h1 class="bijschrift">Welkom bij tandarts wortelkanaal</h1>
          <img
            src="https://www.mupload.nl/img/fjjhhy8.jpg"
            alt="wortelkanaal"
            width="300px"
          />
        </div>

        <div className="containers">
          <img
            src="https://www.mupload.nl/img/u9zq9litz.jpg"
            alt="tandarts"
            width="300px"
          />
          <h1 class="bijschrift"> Hier werken de tandartsen met plezier </h1>
        </div>
        <br />
      </div>
    );
  }
}

export default Home;
