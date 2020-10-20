import data from "../data/sampleGameData.json";

class Element {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

const createNewElement = (id, name) => {
  let element = new Element(id, name);
  return element;
};

const stateArr = [];

for (let g in data.groups) {
  for (let i in data.groups[g].items) {
    stateArr.push(
      createNewElement(data.groups[g].items[i].id, data.groups[g].items[i].name)
    );
  }
}

const elementReducer = (state = stateArr, action) => {
  switch (action.type) {
    case "addedElement":
      console.log(action.payload);
      state.push(createNewElement(action.payload.id, action.payload.name));
      return state;
    case "deletedElement":
      return [...state.filter((_, i) => i !== action.payload)];
    case "enableEdit":
      return [
        ...state.splice(0, action.payload.index),
        {
          id: action.payload.index + 1,
          name: action.payload.element,
          edit: true,
        },
        ...state.splice(action.payload.index + 1),
      ];
    case "editedElement":
      return [
        ...state.splice(0, action.payload.index),
        {
          id: action.payload.index + 1,
          name: action.payload.element,
          edit: false,
        },
        ...state.splice(action.payload.index + 1),
      ];
    default:
      return state;
  }
};

export default elementReducer;
