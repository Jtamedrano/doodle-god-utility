import React from "react";
import { Button } from "react-bootstrap";
import Element from "../../Items/Element";
import shortid from "shortid";

export default function ListPossibilities(props) {
  const possibilityListSet = new Set();
  props.items.forEach((item1) => {
    props.items.forEach((item2) => {
      possibilityListSet.add([item1.id, item2.id].sort().toLocaleString());
    });
  });

  const possibilityList = Array.from(possibilityListSet, (x) => x.split(","));

  function findItem(e, index) {
    return props.items.find((element) => element.id === e[index]);
  }
  function handleClick(event) {
    // console.log(event.target.value);
    props.btnClick(event);
  }

  return (
    <div>
      <h2>Possibilities</h2>
      {possibilityList.map((e) => {
        const elementOne = findItem(e, 0);
        const elementTwo = findItem(e, 1);
        return (
          <Button
            key={shortid.generate()}
            className="mr-2 mt-2"
            value={`${elementOne.id}-${elementTwo.id}`}
            onClick={(e) => handleClick(e)}
          >
            {elementOne.name} - {elementTwo.name}
          </Button>
        );
      })}
    </div>
  );
}
