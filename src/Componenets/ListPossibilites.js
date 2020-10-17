import { render } from "@testing-library/react";
import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Element from "./Items/Element";

export default function ListPossibilites() {
  return (
    <div>
      <ListGroup>
        <ListGroupItem>
          <Element name="Item1" /> - <Element name="Item2" />
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
