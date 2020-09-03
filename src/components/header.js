import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/cardDeck";

const Header = () => {
  const [covidStats, setCovidStats] = useState([]);
  const [date, setDate] = useState("");
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
        countries.json().then((countries) => console.log(countries));
      })
      .catch((err) => console.log(err));
  }, []);

  let totalCases = covidStats.cases;
  let totalDeaths = covidStats.deaths;
  let totalRecovered = covidStats.recovered;
  let timeReadable = new Date(parseInt(covidStats.updated)).toString();

  return (
    <div>
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
    </div>
  );
};

export default Header;
