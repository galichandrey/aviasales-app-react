import {
  FILTER_ALL,
  FILTER_NONE,
  FILTER_NON_STOP,
  FILTER_ONE_PLANE_CHANGE,
  FILTER_TWO_PLANE_CHANGES,
  FILTER_THREE_PLANE_CHANGES,
  GET_FILTERED_TICKETS,
  CLEAR_FILTERED_TICKETS,
} from "./types";

const initialState = {
  filters: {
    FILTER_ALL: false,
    FILTER_NON_STOP: true,
    FILTER_ONE_PLANE_CHANGE: false,
    FILTER_TWO_PLANE_CHANGES: false,
    FILTER_THREE_PLANE_CHANGES: false,
  },
};

export const filterFlightReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_ALL:
      return {
        ...state,
        filters: action.filters,
      };

    case FILTER_NONE:
      return {
        ...state,
        filters: action.filters,
      };
    case FILTER_NON_STOP:
      return {
        ...state,
        filters: { ...state.filters, ...action.filters },
      };
    case FILTER_ONE_PLANE_CHANGE:
      return {
        ...state,
        filters: { ...state.filters, ...action.filters },
      };
    case FILTER_TWO_PLANE_CHANGES:
      return {
        ...state,
        filters: { ...state.filters, ...action.filters },
      };
    case FILTER_THREE_PLANE_CHANGES:
      return {
        ...state,
        filters: { ...state.filters, ...action.filters },
      };

    case GET_FILTERED_TICKETS:
      console.log("filteredTicketsUUID >>>> ", action.filteredTicketsUUID);
      return {
        ...state,
        filteredTicketsUUID: [...action.filteredTicketsUUID],
      };

    case CLEAR_FILTERED_TICKETS:
      return {
        ...state,
        filteredTickets: [],
        filteredTicketsUUID: [],
        isCleared: true,
      };

    default:
      return state;
  }
};
