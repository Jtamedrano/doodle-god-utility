import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ListElements from "./Componenets/ListElements";
import TopBar from "./Componenets/Nav";

export default function Main(props) {
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
            <ListElements groups={props.data.groups} />
          </Col>
          <Col>{/* <ListPossibilities /> */}</Col>
        </Row>
      </Container>
    </div>
  );
}
