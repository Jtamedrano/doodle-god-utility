import React, { Component } from "react";
import { Form } from "react-bootstrap";

export default class CurrentLevel extends Component {
  render() {
    return (
      <div className="CurrentLevel">
        <Form.Label>Chose Level</Form.Label>
        <Form.Control
          as="select"
          onChange={(e) => {
            this.props.chooseLevel(e.target.value);
          }}
          custom
        >
          {this.props.levels.map((e, i) => {
            return (
              <option key={"cl-" + i} value={e._id}>
                {e.name}
              </option>
            );
          })}
        </Form.Control>
      </div>
    );
  }
}
