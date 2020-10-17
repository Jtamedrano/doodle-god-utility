export const addElement = (element) => {
  return {
    type: "addedElement",
    payload: element,
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
