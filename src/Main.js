import React, { useState } from "react";
import { addGroup } from "./actions/index";
import { Col, Container, Row } from "react-bootstrap";
// import ListElements from "./Componenets/ListElements";
import TopBar from "./Componenets/Nav";
import AddGroup from "./Componenets/AddGroup";

export default function Main(props) {
  const [groups, setGroups] = useState(props.store.getState().group);

  const handleSubmit = (name) => {
    props.store.dispatch(addGroup(name));
  };

  console.log(groups);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <TopBar />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Elements</h2>
            {/* <ListElements groups={props.data.groups} /> */}
          </Col>
          <Col>{/* <ListPossibilities /> */}</Col>
        </Row>
        <Row>
          <Col>
            <h2>Add Group</h2>
            <AddGroup
              store={props.store}
              handleSubmit={(e) => {
                handleSubmit(e);
              }}
            />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
