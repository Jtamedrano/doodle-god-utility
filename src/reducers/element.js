let lastElement = 0;
const elementReducer = (state = [], action) => {
  switch (action.type) {
    case "addedElement":
      lastElement++;
      return [
        ...state,
        {
          id: lastElement,
          name: action.payload,
          edit: false,
        },
      ];
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
