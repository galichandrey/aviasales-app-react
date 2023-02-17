import React from "react";

import FlightCard from "../../entities/FlightCard";

// import PropTypes from "prop-types";
import classes from "./FlightCardList.module.scss";

const FlightCardList = () => {
  return (
    <div className={classes.flightCardList}>
      <FlightCard />
      <FlightCard />
      <FlightCard />
      <FlightCard />
      <FlightCard />
    </div>
  );
};

// FlightCardList.propTypes = {
//   // bla: PropTypes.string,
// };

// FlightCardList.defaultProps = {
//   // bla: 'test',
// };

export default FlightCardList;
