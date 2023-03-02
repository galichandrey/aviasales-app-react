export function sortCheapest() {
  return async (dispatch, getState) => {
    const state = getState();
    const { ticketsAmount } = state.loadMoreTicketsReducer;
    const { filteredTicketsUUID } = state.filterFlightReducer;
    const sortedTickets = sortFunction("SORT_CHEAPEST", filteredTicketsUUID, ticketsAmount);

    dispatch({
      type: "SORT_CHEAPEST",
      tickets: sortedTickets,
      payload: "Cheapest tickets! :D",
    });
  };
}

export function sortOptimal() {
  return async (dispatch) => {
    dispatch({
      type: "SORT_OPTIMAL",
      tickets: [],
      payload: "Optimal tickets! :D",
    });
  };
}

export function sortFastest() {
  return async (dispatch, getState) => {
    const state = getState();
    const { ticketsAmount } = state.loadMoreTicketsReducer;
    const { filteredTicketsUUID } = state.filterFlightReducer;
    console.log("filteredTicketsUUID >>> ", filteredTicketsUUID);
    const sortedTickets = sortFunction("SORT_FASTEST", filteredTicketsUUID, ticketsAmount);

    dispatch({
      type: "SORT_FASTEST",
      tickets: sortedTickets,
      payload: "Fastest tickets! :D",
    });
  };
}

const sortFunction = (sort, array = [], ticketAmount = 5) => {
  console.log(array);
  const newArray = [...array];
  let compareFunc;
  if (sort === "SORT_CHEAPEST") {
    compareFunc = (a, b) => {
      return a.price - b.price;
    };
  }

  if (sort === "SORT_OPTIMAL") {
    compareFunc = (a, b) => {
      return a.price - b.price;
    };
  }

  if (sort === "SORT_FASTEST") {
    compareFunc = (a, b) => {
      return a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration);
    };
  }

  return newArray.sort(compareFunc).slice(0, ticketAmount);
};
