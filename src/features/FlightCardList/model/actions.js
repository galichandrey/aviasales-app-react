import { FILTER_CARD_LIST_ONE_PLANE_CHANGE } from "./types";

export function fligthCardListFilterOnePlaneChange() {
  return async function (dispatch, getState) {
    console.log(getState());
    dispatch({
      type: FILTER_CARD_LIST_ONE_PLANE_CHANGE,
      filteredTickets: ["yoyo"],
    });
  };
}
