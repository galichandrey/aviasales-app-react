export function loadMoreTickets() {
  return async (dispatch, getState) => {
    const state = getState();
    const { ticketsAmount } = state.loadMoreTicketsReducer;
    const newTicketsAmount = ticketsAmount + 5;

    dispatch({
      type: "LOAD_MORE_TICKETS",
      ticketsAmount: newTicketsAmount,
      payload: `${newTicketsAmount} tickets loaded`,
    });
  };
}

export function loadMoreTicketsReset() {
  return async (dispatch) => {
    dispatch({
      type: "LOAD_MORE_TICKETS",
      ticketsAmount: 5,
      payload: "Reseted to 5 tickets",
    });
  };
}
