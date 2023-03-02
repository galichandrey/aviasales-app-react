import { getTickets } from "../api/actions";
import { getFilteredTickets, clearFilteredTickets } from "../../features/FilterFlight/model/actions";
import { sortCheapest, sortOptimal, sortFastest } from "../../features/SortMenu/model/actions";
import { loadMoreTickets, loadMoreTicketsReset } from "../../entities/LoadMore/model/action";

export {
  getTickets,
  getFilteredTickets,
  clearFilteredTickets,
  sortCheapest,
  sortOptimal,
  sortFastest,
  loadMoreTickets,
  loadMoreTicketsReset,
};
