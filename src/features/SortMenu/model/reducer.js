const initialState = {
  sort: "",
  tickets: [],
};

export const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SORT_CHEAPEST":
      console.log("sort: cheapest");
      return {
        ...state,
        sort: "SORT_CHEAPEST",
        tickets: action.tickets,
        payload: action.payload,
      };
    case "SORT_OPTIMAL":
      console.log("sort: optimal");
      return {
        sort: "SORT_OPTIMAL",
        tickets: action.tickets,
      };
    case "SORT_FASTEST":
      console.log("sort: fastest");
      return {
        sort: "SORT_FASTEST",
        tickets: action.tickets,
        payload: action.payload,
      };
    default:
      return state;
  }
};
