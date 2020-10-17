import React, { useState } from "react";
import { addElement, addGroup } from "./actions/index";
import { Col, Container, Row } from "react-bootstrap";
import ListElements from "./Componenets/ListElements";
import TopBar from "./Componenets/Nav";
import AddGroup from "./Componenets/AddGroup";
import AddItem from "./Componenets/AddItem";

export default function Main(props) {
  const [groups, setGroups] = useState(props.store.getState().group);
  const [items, setItems] = useState(props.store.getState().element);

  const handleSubmitNewGroup = (name) => {
    props.store.dispatch(addGroup(name));
  };
  const handleSubmitNewItem = (obj) => {
    console.log(obj);
    props.store.dispatch(addElement(obj));
  };

  console.log(groups);
  console.log(items);

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
            <ListElements groups={groups} items={items} />
          </Col>
          <Col>{/* <ListPossibilities /> */}</Col>
        </Row>
        <Row>
          <Col>
            <h2>Add Group</h2>
            <AddGroup
              store={props.store}
              handleSubmit={(e) => {
                handleSubmitNewGroup(e);
              }}
            />
          </Col>
          <Col>
            <h2>Add Items</h2>
            <AddItem
              items={items}
              groups={groups}
              handleSubmit={(e) => {
                handleSubmitNewItem(e);
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
