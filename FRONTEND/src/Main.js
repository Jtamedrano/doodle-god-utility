import React, { useState } from "react";
import { addElement, addGroup, addOutcome } from "./actions/index";
import { Col, Container, Row } from "react-bootstrap";
import ListElements from "./Componenets/ListElements";
import ListPossibilites from "./Componenets/ListPossibilites";
import TopBar from "./Componenets/Nav";
import AddGroup from "./Componenets/AddGroup";
import AddItem from "./Componenets/AddItem";

export default function Main(props) {
  const [groups, setGroups] = useState(props.store.getState().group);
  const [items, setItems] = useState(props.store.getState().element);
  const [outcomes, setOutcomes] = useState(props.store.getState().outcome);

  const handleSubmitNewGroup = (name) => {
    props.store.dispatch(addGroup(name));
  };
  const handleSubmitNewItem = (obj) => {
    console.log(obj);
    props.store.dispatch(addElement(obj));
    props.store.dispatch();
  };

  console.log(groups);
  console.log(items);
  console.log(outcomes);

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
          <Col>
            <h2>Possibilites</h2>
            <ListPossibilites
              groups={groups}
              items={items}
              outcomes={outcomes}
            />
          </Col>
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
