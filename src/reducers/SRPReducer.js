const SRPReducer = (state, action) => {
  let newState = {};

  switch (action.type) {
    case "CHANGE_THEME":
      const { theme } = action.data;
      newState = {
        ...state,
        theme
      };
      break;
    case "CHANGE_USER":
      const { user } = action.data;
      newState = {
        ...state,
        user
      };
      break;
    default:
      throw new Error();
  }

  return newState;
};

export default SRPReducer;
