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

export const filterAll = (e) => {
  if (e.target.checked) {
    return {
      type: FILTER_ALL,
      filters: {
        FILTER_ALL: true,
        FILTER_NON_STOP: true,
        FILTER_ONE_PLANE_CHANGE: true,
        FILTER_TWO_PLANE_CHANGES: true,
        FILTER_THREE_PLANE_CHANGES: true,
      },
    };
  }
  return {
    type: FILTER_NONE,
    filters: {
      FILTER_ALL: false,
      FILTER_NON_STOP: false,
      FILTER_ONE_PLANE_CHANGE: false,
      FILTER_TWO_PLANE_CHANGES: false,
      FILTER_THREE_PLANE_CHANGES: false,
    },
    tickets: [],
  };
};

export const turnOnFilterAll = () => {
  return {
    type: FILTER_ALL,
    filters: {
      FILTER_ALL: true,
      FILTER_NON_STOP: true,
      FILTER_ONE_PLANE_CHANGE: true,
      FILTER_TWO_PLANE_CHANGES: true,
      FILTER_THREE_PLANE_CHANGES: true,
    },
  };
};

export const turnOnFilterNone = () => {
  return {
    type: FILTER_NONE,
    filters: {
      FILTER_ALL: false,
      FILTER_NON_STOP: false,
      FILTER_ONE_PLANE_CHANGE: false,
      FILTER_TWO_PLANE_CHANGES: false,
      FILTER_THREE_PLANE_CHANGES: false,
    },
  };
};

export const filterNonStop = (e) => {
  return async (dispatch, getState) => {
    const state = getState();
    console.log("state.filterFlightReducer.filters >>> ", state.filterFlightReducer.filters);

    if (e.target.checked) {
      dispatch({
        type: FILTER_NON_STOP,
        filters: { FILTER_NON_STOP: e.target.checked },
      });
    } else if (!e.target.checked) {
      dispatch({
        type: FILTER_NON_STOP,
        filters: { FILTER_ALL: false, FILTER_NON_STOP: e.target.checked },
      });
    }
  };
};

export const filterOnePlaneChange = (e) => ({
  type: FILTER_ONE_PLANE_CHANGE,
  filters: { FILTER_ALL: false, FILTER_ONE_PLANE_CHANGE: e.target.checked },
});
export const filterTwoPlaneChanges = (e) => ({
  type: FILTER_TWO_PLANE_CHANGES,
  filters: { FILTER_ALL: false, FILTER_TWO_PLANE_CHANGES: e.target.checked },
});
export const filterThreePlaneChange = (e) => ({
  type: FILTER_THREE_PLANE_CHANGES,
  filters: { FILTER_ALL: false, FILTER_THREE_PLANE_CHANGES: e.target.checked },
});

export const clearFilteredTickets = () => {
  return async (dispatch) => {
    dispatch({
      type: CLEAR_FILTERED_TICKETS,
      filteredTickets: [],
    });
  };
};

export const getFilteredTickets = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const { tickets } = state.fetchTicketsReducer;
    console.log("tickets >>>", tickets);
    const filterAll = state.filterFlightReducer.filters.FILTER_ALL;
    const filterNone = state.filterFlightReducer.filters.FILTER_NONE;
    const filterNonStop = state.filterFlightReducer.filters.FILTER_NON_STOP;
    const filterOne = state.filterFlightReducer.filters.FILTER_ONE_PLANE_CHANGE;
    const filterTwo = state.filterFlightReducer.filters.FILTER_TWO_PLANE_CHANGES;
    const filterThree = state.filterFlightReducer.filters.FILTER_THREE_PLANE_CHANGES;

    function filtNonStopFunc(ticket) {
      return ticket.segments[0].stops.length === 0 || ticket.segments[1].stops.length === 0;
    }

    function filtOneFunc(ticket) {
      return ticket.segments[0].stops.length === 1 || ticket.segments[1].stops.length === 1;
    }

    function filtTwoFunc(ticket) {
      return ticket.segments[0].stops.length === 2 || ticket.segments[1].stops.length === 2;
    }

    function filtThreeFunc(ticket) {
      return ticket.segments[0].stops.length === 3 || ticket.segments[1].stops.length === 3;
    }

    if (filterAll) {
      dispatch({
        type: GET_FILTERED_TICKETS,
        filteredTicketsUUID: tickets,
      });
      return;
    }

    if (filterNone) {
      console.log("filterNone!!!");
      dispatch({
        type: CLEAR_FILTERED_TICKETS,
        filteredTickets: [],
        filteredTicketsUUID: [],
      });
      return;
    }

    let newArray = [];

    if (filterNonStop) {
      const filteredTickets = tickets.filter(filtNonStopFunc);
      console.log("filteredTickets >>>> ", filteredTickets);

      const ids = new Set(newArray.map((element) => element.uuID));
      const newFilteredTicketsArray = filteredTickets.filter((element) => !ids.has(element.uuID));
      newArray = [...newArray, ...newFilteredTicketsArray];
      dispatch({
        type: GET_FILTERED_TICKETS,
        filteredTicketsUUID: newArray,
      });
    }
    if (filterOne) {
      const filteredTickets = tickets.filter(filtOneFunc);
      console.log("filteredTickets >>>> ", filteredTickets);
      const ids = new Set(newArray.map((element) => element.uuID));
      const newFilteredTicketsArray = filteredTickets.filter((element) => !ids.has(element.uuID));
      newArray = [...newArray, ...newFilteredTicketsArray];
      dispatch({
        type: GET_FILTERED_TICKETS,
        filteredTicketsUUID: newArray,
      });
    }
    if (filterTwo) {
      const filteredTickets = tickets.filter(filtTwoFunc);
      console.log("filteredTickets >>>> ", filteredTickets);
      const ids = new Set(newArray.map((element) => element.uuID));
      const newFilteredTicketsArray = filteredTickets.filter((element) => !ids.has(element.uuID));
      newArray = [...newArray, ...newFilteredTicketsArray];
      dispatch({
        type: GET_FILTERED_TICKETS,
        filteredTicketsUUID: newArray,
      });
    }
    if (filterThree) {
      const filteredTickets = tickets.filter(filtThreeFunc);
      console.log("filteredTickets >>>> ", filteredTickets);
      const ids = new Set(newArray.map((element) => element.uuID));
      const newFilteredTicketsArray = filteredTickets.filter((element) => !ids.has(element.uuID));
      newArray = [...newArray, ...newFilteredTicketsArray];
      dispatch({
        type: GET_FILTERED_TICKETS,
        filteredTicketsUUID: newArray,
      });
    }
  };
};
