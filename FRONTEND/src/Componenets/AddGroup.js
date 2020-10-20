import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function AddGroup(props) {
  const [textGroupState, setTextGroupState] = useState("");

  function handleClick(event) {
    event.preventDefault();
    props.handleSubmit(textGroupState);
    setTextGroupState("");
  }

  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label htmlFor="newGroup">New Group Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="New Group Name"
            value={textGroupState}
            onChange={(e) => setTextGroupState(e.target.value)}
          />
        </Form.Group>
        <Button onClick={(e) => handleClick(e)}>Submit</Button>
      </Form>
    </div>
  );
}
