import React, { useEffect } from "react";
import { connect } from "react-redux";

import Logo from "../../entities/Logo";
import SortMenu from "../../features/SortMenu";
import FilterFlight from "../../features/FilterFlight";
import FlightCardList from "../../features/FlightCardList";
import LoadMore from "../../entities/LoadMore";
import classes from "../style.module.scss";
import * as actions from "../model/actions_all.js";

const App = ({ getTickets, getFilteredTickets, clearFilteredTickets, filters, tickets }) => {
  useEffect(() => {
    getTickets();
  }, []);

  useEffect(() => {
    getFilteredTickets();
    // console.log("state >>> ", state);
    return () => clearFilteredTickets();
  }, [filters, tickets]);

  return (
    <div className={classes.container}>
      <Logo />
      <div className={classes.wrapper}>
        <FilterFlight />
        <div className={classes.main}>
          <SortMenu />
          <FlightCardList />
          <LoadMore />
        </div>
      </div>
    </div>
  );
};

export default connect(null, actions)(App);
