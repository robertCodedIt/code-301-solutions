//import hornedbeasts array in data.json
import React from "react";
import './hornedBeast.css'
import { Card } from "react-bootstrap";
const beasts = require("./data.json");

export default class HornedBeast extends React.Component {
  render() {
    return (
      <div id = "horned-beast-container">
        {beasts.map((el, idx) => {
          return (
            <Card className = 'my-horned-beast' style = {{width:'18rem'}} key={idx}>
              <Card.Body>
                <Card.Header>
                  <h1>{el.title}</h1>
                </Card.Header>
                <Card.Img alt={el.keyword} src={el.image_url} />
                <Card.Footer>
                  <span>{el.description}</span>
                </Card.Footer>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}
