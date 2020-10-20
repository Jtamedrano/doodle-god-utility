export const addElement = (obj) => {
  return {
    type: "addedElement",
    payload: {
      id: obj.id,
      name: obj.name,
    },
  };
};
export const deletedElement = (index) => {
  return {
    type: "deletedElement",
    payload: index,
  };
};
export const enableEdit = (index) => {
  return {
    type: "enableEdit",
    payload: {
      index: index,
      edit: true,
    },
  };
};
export const editedElement = (index, element) => {
  return {
    type: "editedElement",
    payload: {
      index: index,
      element: element,
      edit: false,
    },
  };
};
export const addGroup = (name) => {
  return {
    type: "addedGroup",
    payload: {
      name: name,
    },
  };
};
export const addOutcome = (itemOne, itemTwo) => {
  return {
    type: "ADD_OUTCOME",
    payload: {
      string: `${itemOne} - ${itemTwo}`,
      revSting: `${itemTwo} - ${itemOne}`,
    },
  };
};
