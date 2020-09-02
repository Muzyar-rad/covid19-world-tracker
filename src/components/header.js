import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/cardDeck";

const Header = () => {
  function covidStats() {
    fetch("https://api.covid19api.com/summary", {
      method: "GET",
    })
      .then((res) => res.json().then((res) => console.log(res)))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    covidStats();
  });
  return (
    <div>
      <CardDeck>
        <Card bg="secondary" text="white" style={{ margin: "10px" }}>
          <Card.Body>
            <Card.Title>Number of Cases</Card.Title>
            <Card.Text>20</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-white">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card bg="success" text="white" style={{ margin: "10px" }}>
          <Card.Body>
            <Card.Title>Number of Recovered</Card.Title>
            <Card.Text>0</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-white">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card bg="danger" text="white" style={{ margin: "10px" }}>
          <Card.Body>
            <Card.Title>Number of Deaths</Card.Title>
            <Card.Text>20</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-white">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Header;
