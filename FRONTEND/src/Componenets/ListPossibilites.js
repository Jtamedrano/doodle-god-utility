import React from "react";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import Element from "./Items/Element";
import shortid from "shortid";
import { addOutcome } from "../actions/index";

export default function ListPossibilites(props) {
  let possibilityList = props.outcomes.possibilities;

  function handleClick(a, b) {
    props.store.dispatch(addOutcome(a, b));
  }
  return (
    <div>
      <ListGroup>
        {possibilityList
          .filter((_, i) => i < 4)
          .map((e) => {
            return (
              <ListGroupItem key={shortid.generate()}>
                <Button
                  onClick={() => {
                    handleClick("itemOne.id", "itemTwo.id");
                  }}
                >
                  <Element name={"ItemOne"} />-
                  <Element name={"ItemTwo"} />
                </Button>
              </ListGroupItem>
            );
          })}
      </ListGroup>
    </div>
  );
}
