import React from "react";

import Logo from "../../entities/Logo";
import SortMenu from "../../features/SortMenu";
import FilterFlight from "../../features/FilterFlight";
import FlightCardList from "../../features/FlightCardList";
import classes from "../style.module.scss";

const App = () => {
  return (
    <div className={classes.container}>
      <Logo />
      <div className={classes.wrapper}>
        <FilterFlight />
        <div className={classes.main}>
          <SortMenu />
          <FlightCardList />
        </div>
      </div>
    </div>
  );
};

export default App;
