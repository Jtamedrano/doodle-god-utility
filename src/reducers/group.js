import data from "../data/sampleGameData.json";

class Group {
  constructor(name) {
    this.id = name.substr(0, 2);
    this.name = name;
  }
}

let createNewGroup = (obj) => {
  let group = new Group(obj);
  return group;
};

const groupReducer = (
  state = data.groups.map((e) => {
    let group = new Group(e.name);
    return group;
  }),
  action
) => {
  switch (action.type) {
    case "addedGroup":
      return state.push(createNewGroup(action.payload.name));

    default:
      return state;
  }
};

export default groupReducer;
