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
  render() {
    return (
      <Accordion>
        {this.props.groups.map((e, i) => {
          return <ElementGroup key={i} content={e} />;
        })}
      </Accordion>
    );
  }
}
