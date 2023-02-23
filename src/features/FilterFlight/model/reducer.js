const initialState = {
  filter: "FILTER_ALL",
  payload: { first: true, second: true, third: true, fourth: true, fifth: true },
};

export const filterFlightReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER_ALL":
      console.log(state);
      return {
        ...state,
        filter: "FILTER_ALL",
        payload: action.payload,
      };
    case "FILTER_NONE":
      console.log(state);
      return {
        ...state,
        filter: "FILTER_NONE",
        payload: action.payload,
      };
    case "FILTER_NON_STOP":
      console.log(state);
      return {
        ...state,
        filter: "",
        payload: { ...state.payload, ...action.payload },
      };
    case "FILTER_ONE_PLANE_CHANGE":
      console.log(state);
      return {
        ...state,
        filter: "",
        payload: { ...state.payload, ...action.payload },
      };
    case "FILTER_TWO_PLANE_CHANGES":
      console.log(state);
      return {
        ...state,
        filter: "",
        payload: { ...state.payload, ...action.payload },
      };
    case "FILTER_THREE_PLANE_CHANGES":
      console.log(state);
      return {
        ...state,
        filter: "",
        payload: { ...state.payload, ...action.payload },
      };

    default:
      return state;
  }
};
