import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function AddItem(props) {
  const [textItemState, setTextItemState] = useState("");
  const [groupSelect, setGroupSelect] = useState("Ai");

  function handleClick(event) {
    event.preventDefault();
    console.log(
      props.items.filter((e) => {
        return e.id.substr(0, 2) === groupSelect;
      }).length
    );
    let id =
      groupSelect +
      (props.items.filter((e) => e.id.substr(0, 2) === groupSelect).length + 1);
    props.handleSubmit({ id: id, name: textItemState });
    setTextItemState("");
  }

  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Choose Group</Form.Label>
          <Form.Control
            as="select"
            value={groupSelect}
            onChange={(e) => setGroupSelect(e.target.value)}
            custom
          >
            {props.groups.map((e) => {
              return (
                <option key={e.id} value={e.id}>
                  {e.name}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>New Item Name</Form.Label>
          <Form.Control
            value={textItemState}
            onChange={(e) => setTextItemState(e.target.value)}
          />
        </Form.Group>
        <Button onClick={(e) => handleClick(e)}>Submit</Button>
      </Form>
    </div>
  );
}
