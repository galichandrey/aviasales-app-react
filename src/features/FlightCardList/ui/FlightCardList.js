import React, { useEffect } from "react";
import { connect } from "react-redux";

import * as actions from "../../../app/model/actions_all.js";
import FlightCard from "../../../entities/FlightCard";
import LoadMore from "../../../entities/LoadMore";
import Loader from "../../../entities/Loader";

import classes from "./FlightCardList.module.scss";

export const FlightCardList = ({
  isLoading,
  getTickets,
  ticketsRaw,
  tickets,
  filteredTicketsUUID,
  getFilteredTickets,
  clearFilteredTickets,
  sortCheapest,
  sortOptimal,
  sortFastest,
  filters,
  sort,
  ticketsAmount,
  loadMoreTicketsReset,
}) => {
  useEffect(() => {
    getTickets();
    getFilteredTickets();
    sortCheapest();
  }, []);

  useEffect(() => {
    console.log("filters changed!", filters);
    getFilteredTickets();
    return () => clearFilteredTickets();
  }, [filters, ticketsRaw, ticketsAmount]);

  useEffect(() => {
    switch (sort) {
      case "SORT_CHEAPEST":
        sortCheapest();
        return;
      case "SORT_OPTIMAL":
        sortOptimal();
        return;
      case "SORT_FASTEST":
        sortFastest();
        return;
      default:
        sortCheapest();
    }
  }, [sort, filters, filteredTicketsUUID, ticketsRaw]);

  useEffect(() => {
    loadMoreTicketsReset();
  }, [sort, filters]);

  let ticketsCards = [];
  if (filteredTicketsUUID) {
    ticketsCards = tickets.map(({ uuID, price = 0, carrier = "", segments = [] }) => {
      return (
        <FlightCard
          key={uuID}
          price={price}
          carrier={carrier}
          segments={segments}
        />
      );
    });
  }
  return (
    <div className={classes.flightCardList}>
      {isLoading ? <Loader /> : null}
      {ticketsCards ? ticketsCards : null}
      {!isLoading && ticketsCards.length === 0 && sort !== "SORT_OPTIMAL" ? (
        <div className={classes.flightCardModal}>Рейсов, подходящих под заданные фильтры, не найдено</div>
      ) : null}
      {!isLoading && sort === "SORT_OPTIMAL" ? (
        <div className={`${classes.flightCardModal} ${classes.flightCardModalHigher}`}>
          «Оптимальный» вариант не найден. Выберите «Самый дешёвый» или «Самый быстрый»
        </div>
      ) : null}
      {ticketsCards.length !== 0 ? <LoadMore /> : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
    isLoading: state.fetchTicketsReducer.isLoading,

    filters: state.filterFlightReducer.filters,
    sort: state.sortReducer.sort,

    ticketsRaw: state.fetchTicketsReducer.tickets,
    filteredTicketsUUID: state.filterFlightReducer.filteredTicketsUUID,
    tickets: state.sortReducer.tickets,

    ticketsAmount: state.loadMoreTicketsReducer.ticketsAmount,
  };
};

export default connect(mapStateToProps, actions)(FlightCardList);
