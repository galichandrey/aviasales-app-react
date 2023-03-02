import { GET_TICKETS } from "./types";

const initialState = {
  tickets: [],
  isLoading: true,
};

export const fetchTicketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TICKETS:
      return { ...state, tickets: [...action.tickets], isLoading: action.isLoading };

    default:
      return state;
  }
};
