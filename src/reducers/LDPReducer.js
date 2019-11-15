const LDPReducer = (state, action) => {
  let newState = {};

  switch (action.type) {
    case "CHANGE_ID":
      newState = {
        ...state,
        id: action.data.id
      };
      break;
    default:
      throw new Error();
  }

  return newState;
};

export default LDPReducer;
