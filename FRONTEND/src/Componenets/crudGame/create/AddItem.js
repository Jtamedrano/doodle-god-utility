import React, { Component } from "react";
import { Form } from "react-bootstrap";

export default class AddItem extends Component {
  render() {
    return (
      <Form.Group>
        <Form.Label>New Item Name</Form.Label>
        <Form.Control type="text" placeholder="Item Name" />
      </Form.Group>
    );
  }
}
