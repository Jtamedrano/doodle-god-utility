import data from "../data/sampleGameData.json";

class Possibility {
  constructor(itemOne, itemTwo) {
    this.item = `${itemOne}-${itemTwo}`;
  }
}

const outcomeReducer = (
  state = [
    ...data.possibilities.map((e) => {
      let item = new Possibility(e.itemOne, e.itemTwo);
      return item.item;
    }),
    ...data.outcomes,
  ],
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default outcomeReducer;
