import React, { useState } from "react";
import { Button, FormControl } from "react-bootstrap";

export default function AddGroup(props) {
  const [textState, setTextState] = useState("");

  function handleClick() {
    props.handleSubmit(textState);
    setTextState("");
  }

  return (
    <div>
      <label htmlFor="newGroup">New Group Name</label>
      <FormControl
        type="text"
        placeholder="New Group Name"
        value={textState}
        onChange={(e) => setTextState(e.target.value)}
      />
      <Button onClick={handleClick}>Submit</Button>
    </div>
  );
}
