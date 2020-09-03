import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/cardDeck";

const Header = () => {
  const [covidStats, setCovidStats] = useState([]);
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    Promise.all([
      fetch("https://corona.lmao.ninja/v2/all", {
        method: "GET",
      }),
      fetch("https://corona.lmao.ninja/v2/countries", { method: "GET" }),
    ])
      .then(([stats, countries]) => {
        stats.json().then((stats) => {
          setCovidStats(stats);
        });
        countries.json().then((countries) => setCountries(countries));
      })
      .catch((err) => console.log(err));
  }, []);
  let totalCases = covidStats.cases;
  let totalDeaths = covidStats.deaths;
  let totalRecovered = covidStats.recovered;
  let timeReadable = new Date(parseInt(covidStats.updated)).toString();
  const countriesLocations = countries.map((data, flag) => {
    return (
      <div
        lat={data.countryInfo.lat}
        lng={data.countryInfo.long}
        style={{
          color: "white",
          backgroundColor: "DarkGray",
          height: "30px",
          width: "45px",
          borderRadius: "30px",
          textAlign: "center",
        }}
      >
        {data.cases}
        <img
          alt="countryFlags"
          src={data.countryInfo.flag}
          style={{
            maxWidth: "20px",
            maxHeight: "15px",
            display: "block",
            margin: "auto",
          }}
        />
      </div>
    );
  });

  return (
    <React.Fragment>
      <h2 className="mb-5">Mazy's Worldwide Covid-19 Tracker</h2>
      <CardDeck>
        <Card bg="secondary" text="white" style={{ margin: "10px" }}>
          <Card.Body>
            <Card.Title>Number of Cases</Card.Title>
            <Card.Text>{totalCases}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-white">Last updated {timeReadable}</small>
          </Card.Footer>
        </Card>
        <Card bg="success" text="white" style={{ margin: "10px" }}>
          <Card.Body>
            <Card.Title>Number of Recovered</Card.Title>
            <Card.Text>{totalRecovered}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-white">Last updated {timeReadable}</small>
          </Card.Footer>
        </Card>
        <Card bg="danger" text="white" style={{ margin: "10px" }}>
          <Card.Body>
            <Card.Title>Number of Deaths</Card.Title>
            <Card.Text>{totalDeaths}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-white">Last updated {timeReadable}</small>
          </Card.Footer>
        </Card>
      </CardDeck>
      <br />
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API }}
          defaultCenter={{ lat: 59.95, lng: 30.33 }}
          defaultZoom={1}
        >
          {countriesLocations}
        </GoogleMapReact>
      </div>
    </React.Fragment>
  );
};
console.log(process.env.REACT_APP_GOOGLE_MAP_API);

export default Header;
