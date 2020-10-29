import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import AddGroup from "./AddGroup";

class Group {
  constructor(name) {
    this.name = name;
  }
}

export default function AddLevel(props) {
  const [newGroups, setNewGroups] = useState(1);
  const [newLevelName, setNewLevelName] = useState("");
  const [newGroupsArray, setNewGroupsArray] = useState(
    Array(Number(newGroups))
      .fill()
      .map((_) => {
        return new Group(undefined);
      })
  );

  const amendNewGroupsForm = (group) => {
    console.log(group.key - 1, newGroupsArray[group.key - 1]);
    // let x = newGroupsArray;
    // if (group.name) {
    //   x[group.key - 1].name = group.name;
    //   console.log(x);
    // }
  };

  const renderNewGroupForms = () => {
    return Array(Number())
      .fill()
      .map((_, i) => {
        return (
          <AddGroup
            key={i}
            groupNum={i + 1}
            groupChange={(obj) => amendNewGroupsForm(obj)}
          />
        );
      });
  };

  const handleLevelSubmit = (e) => {
    e.preventDefault();
    console.log("New Group Array: ", newGroupsArray);
  };

  return (
    <>
      <div className="Level">
        <Form onSubmit={(event) => handleLevelSubmit(event)}>
          <Form.Group>
            <Form.Label>New Level</Form.Label>
            <Form.Control
              type="text"
              placeholder="Level Name"
              value={newLevelName}
              onChange={(e) => setNewLevelName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Button>Update</Button>
          </Form.Group>
          <Form.Group>
            <Form.Label>Number of New Groups: {newGroups}</Form.Label>
            <Form.Control
              type="number"
              value={newGroups}
              min={1}
              max={13}
              onChange={(e) => {
                setNewGroups(Number(e.target.value));
              }}
            />
          </Form.Group>
          <hr />
          <div className="addGroup">{renderNewGroupForms(newGroups)}</div>
          <Form.Control id="submitBtnLevel" type="submit" value="submit" />
        </Form>
      </div>
    </>
  );
}
