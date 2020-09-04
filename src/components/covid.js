import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

const Covid = () => {
  const [covidStats, setCovidStats] = useState([]);
  const [countries, setCountries] = useState([]);
  const [countriesNumbers, setCountriesNumbers] = useState([]);
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
  const totalCases = covidStats.cases;
  const totalDeaths = covidStats.deaths;
  const totalRecovered = covidStats.recovered;
  const timeReadable = new Date(parseInt(covidStats.updated)).toString();
  const fixedCountriesNumbers = countries.map((data) => {
    return (
      <div
        key={data.countryInfo._id}
        lat={data.countryInfo.lat}
        lng={data.countryInfo.long}
        style={{
          color: "white",
          backgroundColor: "darkgray",
          height: "30px",
          width: "50px",
          borderRadius: "25px",
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
  const totalCasesFunc = () => {
    const countriesNumbers = countries.map((data) => {
      return (
        <div
          key={data.countryInfo._id}
          lat={data.countryInfo.lat}
          lng={data.countryInfo.long}
          style={{
            color: "white",
            backgroundColor: "darkgray",
            height: "30px",
            width: "50px",
            borderRadius: "25px",
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
    setCountriesNumbers(countriesNumbers);
  };
  const totalDeathsFunc = () => {
    const countriesNumbers = countries.map((data) => {
      return (
        <div
          key={data.countryInfo._id}
          lat={data.countryInfo.lat}
          lng={data.countryInfo.long}
          style={{
            color: "red",
            backgroundColor: "darkgray",
            height: "30px",
            width: "50px",
            borderRadius: "25px",
            textAlign: "center",
          }}
        >
          {data.deaths}
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
    setCountriesNumbers(countriesNumbers);
  };
  const totalRecoveredFunc = () => {
    const countriesNumbers = countries.map((data) => {
      return (
        <div
          key={data.countryInfo._id}
          lat={data.countryInfo.lat}
          lng={data.countryInfo.long}
          style={{
            color: "green",
            backgroundColor: "white",
            height: "30px",
            width: "50px",
            borderRadius: "25px",
            textAlign: "center",
          }}
        >
          {data.recovered}
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
    setCountriesNumbers(countriesNumbers);
  };
  return (
    <React.Fragment>
      <h2 className="mb-5">Mazy's Worldwide Covid-19 Tracker</h2>
      <CardDeck>
        <Card
          bg="secondary"
          text="white"
          style={{ margin: "10px", cursor: "pointer" }}
          onClick={totalCasesFunc}
        >
          <Card.Body>
            <Card.Title>Number of Cases</Card.Title>
            <Card.Text>{totalCases}</Card.Text>
            <Card.Text>
              {"=> => Please Click Me And Watch The Map <= <="}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-white">Last updated {timeReadable}</small>
          </Card.Footer>
        </Card>
        <Card
          bg="success"
          text="white"
          style={{ margin: "10px", cursor: "pointer" }}
          onClick={totalRecoveredFunc}
        >
          <Card.Body>
            <Card.Title>Number of Recovered</Card.Title>
            <Card.Text>{totalRecovered}</Card.Text>
            <Card.Text>
              {"=> => Please Click Me And Watch The Map <= <="}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-white">Last updated {timeReadable}</small>
          </Card.Footer>
        </Card>
        <Card
          bg="danger"
          text="white"
          style={{ margin: "10px", cursor: "pointer" }}
          onClick={totalDeathsFunc}
        >
          <Card.Body>
            <Card.Title>Number of Deaths</Card.Title>
            <Card.Text>{totalDeaths}</Card.Text>
            <Card.Text>
              {"=> => Please Click Me And Watch The Map <= <="}
            </Card.Text>
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
          {countriesNumbers.length !== 0
            ? countriesNumbers
            : fixedCountriesNumbers}
        </GoogleMapReact>
      </div>
    </React.Fragment>
  );
};

export default Covid;
