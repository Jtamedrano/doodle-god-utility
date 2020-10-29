import React, { Component } from "react";
import { Form } from "react-bootstrap";
import AddItem from "./AddItem";

export default class AddGroup extends Component {
  state = {
    name: "",
    newItems: 1,
  };

  renderNewItemForms(length) {
    return Array(Number(length))
      .fill()
      .map((_, i) => {
        return <AddItem key={i} />;
      });
  }

  handleItemNoChange(e) {
    this.setState({
      newItems: e.target.value,
    });
  }

  componentDidUpdate() {
    this.props.groupChange({ key: this.props.groupNum, name: this.state.name });
  }

  render() {
    return (
      <div className="Group">
        <Form.Group>
          <Form.Label>New Group Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Group Name"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Number of New Items: {this.state.newItems}</Form.Label>
          <Form.Control
            type="number"
            value={this.state.newItems}
            min={1}
            max={10}
            onChange={(e) => this.handleItemNoChange(e)}
          />
        </Form.Group>
        <div className="addItem">
          {this.renderNewItemForms(this.state.newItems)}
        </div>
      </div>
    );
  }
}
