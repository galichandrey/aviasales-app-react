import { FILTER_CARD_LIST_ONE_PLANE_CHANGE } from "./types";

const initialState = {
  filteredTickets: [],
};

export const flightCardListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_CARD_LIST_ONE_PLANE_CHANGE:
      console.log("action >>>", action);
      return { ...state, filteredTickets: [...state.filteredTickets, ...action.filteredTickets] };

    default:
      return state;
  }
};
