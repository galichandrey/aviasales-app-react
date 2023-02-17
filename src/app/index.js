import React from "react";

import Logo from "../entities/Logo";
import TabsMenu from "../features/TabsMenu/TabsMenu";
import FlightCardList from "../features/FlightCardList";
import FilterFlight from "../features/FilterFlight";
import LoadMore from "../entities/LoadMore";

import classes from "./style.module.scss";

const App = () => {
  return (
    <div className={classes.container}>
      <Logo />
      <div className={classes.wrapper}>
        <FilterFlight />
        <div className={classes.main}>
          <TabsMenu />
          <FlightCardList />
          <LoadMore />
        </div>
      </div>
    </div>
  );
};

export default App;
