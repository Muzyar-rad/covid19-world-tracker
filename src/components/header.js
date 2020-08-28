import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/cardDeck";

const Header = () => {
  return (
    <div>
      <CardDeck>
        <Card bg="secondaty">
          <Card.Body>
            <Card.Title>Number of Cases</Card.Title>
            <Card.Text>20</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card bg="success">
          <Card.Body>
            <Card.Title>Number of Deaths</Card.Title>
            <Card.Text>0</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card bg="danger">
          <Card.Body>
            <Card.Title>Number of Recovered</Card.Title>
            <Card.Text>20</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Header;
