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
            eventKey={this.props.group.id}
          >
            {this.props.group.name}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={this.props.group.id}>
          <Card.Body>
            {this.props.content.map((e) => {
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
          return (
            <ElementGroup
              key={i}
              group={e}
              content={this.props.items.filter((element) => {
                return element.id.includes(e.id);
              })}
            />
          );
        })}
      </Accordion>
    );
  }
}
