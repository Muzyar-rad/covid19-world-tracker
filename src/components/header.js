import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/cardDeck";

const Header = () => {
  const [covidStats, setCovidStats] = useState([]);
  const [date, setDate] = useState("");
  useEffect(() => {
    fetch("https://api.covid19api.com/summary", {
      method: "GET",
    })
      .then((res) =>
        res.json().then((res) => {
          setCovidStats(res.Global);
          setDate(res.Countries[0].Date);
        })
      )
      .catch((err) => console.log(err));
  }, []);

  const totalCases = covidStats.TotalConfirmed;
  const totalDeaths = covidStats.TotalDeaths;
  const totalRecovered = covidStats.TotalRecovered;
  const Date = covidStats.date;

  return (
    <div>
      <CardDeck>
        <Card bg="secondary" text="white" style={{ margin: "10px" }}>
          <Card.Body>
            <Card.Title>Number of Cases</Card.Title>
            <Card.Text>{totalCases}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-white">Last updated {date}</small>
          </Card.Footer>
        </Card>
        <Card bg="success" text="white" style={{ margin: "10px" }}>
          <Card.Body>
            <Card.Title>Number of Recovered</Card.Title>
            <Card.Text>{totalRecovered}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-white">Last updated {date}</small>
          </Card.Footer>
        </Card>
        <Card bg="danger" text="white" style={{ margin: "10px" }}>
          <Card.Body>
            <Card.Title>Number of Deaths</Card.Title>
            <Card.Text>{totalDeaths}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-white">Last updated {date}</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Header;
