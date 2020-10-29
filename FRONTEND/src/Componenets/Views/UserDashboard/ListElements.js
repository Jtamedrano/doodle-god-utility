import React, { Component } from "react";
import {
  Accordion,
  Button,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import Element from "../../Items/Element";

class ElementGroup extends Component {
  render() {
    console.log(this.props);
    return (
      <Card>
        <Card.Header>
          <Accordion.Toggle
            as={Button}
            variant="link"
            eventKey={this.props.group.groupId}
          >
            {this.props.group.groupName}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={this.props.group.groupId}>
          <Card.Body>
            <ListGroup>
              {this.props.content
                ? this.props.content.map((e) => {
                    return (
                      <ListGroupItem key={e.id}>
                        <Element name={e.name} />
                      </ListGroupItem>
                    );
                  })
                : null}
            </ListGroup>
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
        {this.props.groups
          ? this.props.groups.map((e, i) => {
              return (
                <ElementGroup
                  key={i}
                  group={e}
                  // content={this.props.items.filter((element) => {
                  //   return element.id.includes(e.id);
                  // })}
                />
              );
            })
          : null}
      </Accordion>
    );
  }
}
