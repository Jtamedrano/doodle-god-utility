import React from "react";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import Element from "./Items/Element";

export default function ListPossibilites(props) {
  let possibilityList = props.outcomes;
  console.log("This is the possiblity list", possibilityList);
  return (
    <div>
      <ListGroup>
        {possibilityList
          .filter((_, i) => i < 4)
          .map((elements) => {
            let options = elements.split("-");
            let itemOne = props.items.find((e) => e.id === options[0]);
            let itemTwo = props.items.find((e) => e.id === options[1]);
            return (
              <ListGroupItem>
                <Button>
                  <Element name={itemOne.name} />-
                  <Element name={itemTwo.name} />
                </Button>
              </ListGroupItem>
            );
          })}
      </ListGroup>
    </div>
  );
}
