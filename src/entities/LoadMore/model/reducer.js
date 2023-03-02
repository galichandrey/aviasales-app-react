import { LOAD_MORE_TICKETS, LOAD_MORE_TICKETS_RESET } from "./types";

const initialState = {
  ticketsAmount: 5,
};

export const loadMoreTicketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MORE_TICKETS:
      return {
        ticketsAmount: action.ticketsAmount,
        payload: action.payload,
      };

    case LOAD_MORE_TICKETS_RESET:
      return {
        ticketsAmount: 5,
        payload: action.payload,
      };

    default:
      return state;
  }
};
