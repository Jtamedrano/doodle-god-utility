import React, { Component } from "react";
import { Accordion, Button, Card } from "react-bootstrap";

class Element extends Component {
  render() {
    return <div>{this.props.name}</div>;
  }
}

class ElementGroup extends Component {
  render() {
    return (
      <Card>
        <Card.Header>
          <Accordion.Toggle
            as={Button}
            variant="link"
            eventKey={this.props.content.id}
          >
            {this.props.content.name}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={this.props.content.id}>
          <Card.Body>
            {this.props.content.items.map((e) => {
              return <Element key={e.id} name={e.name} />;
            })}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  }
}

export default class ListElements extends Component {
  state = {
    groups: [
      { id: "1", name: "Air", items: [{ id: "A1", name: "Air" }] },
      { id: "2", name: "Earth", items: [{ id: "E1", name: "Earth" }] },
      { id: "3", name: "Fire", items: [{ id: "F1", name: "Fire" }] },
      { id: "4", name: "Water", items: [{ id: "W1", name: "Water" }] },
    ],
  };

  render() {
    return (
      <Accordion>
        {this.state.groups.map((e, i) => {
          return <ElementGroup key={i} content={e} />;
        })}
      </Accordion>
    );
  }
}
