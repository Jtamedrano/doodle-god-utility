import data from "../data/sampleGameData.json";

class Group {
  constructor(name) {
    this.id = name.substr(0, 2);
    this.name = name;
    this.items = [];
  }
}

const groupReducer = (
  state = data.groups.map((e) => {
    let group = new Group(e.name);
    group.items = e.items;
    return group;
  }),
  action
) => {
  switch (action.type) {
    case "ADD_GROUP":
      let createNewGroup = (obj) => {
        console.log(obj);
        let group = new Group(obj);
        return group;
      };
      console.log("push to state");
      return state.push(createNewGroup(action.payload.name));
    default:
      return state;
  }
};

export default groupReducer;
