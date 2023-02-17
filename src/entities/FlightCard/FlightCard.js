import React from "react";
// import PropTypes from "prop-types";
//import { Test } from './FlightCard.styles';

import classes from "./FlightCard.module.scss";

const FlightCard = () => {
  return (
    <li>
      <article className={classes.flightCard}>
        <div className={classes.flightCard__header}>
          <span className={classes.flightCard__price}>13 400 Р</span>
          <img
            src="https://pics.avs.io/99/36/S7.png"
            className={classes.flightCard__logo}
          />
        </div>
        <div className={classes.flightCard__main}>
          <div className={classes.flightCard__origin}>
            <div className={classes.flightCard__heading}>
              <div>MOW – HKT</div>
              <div>В пути</div>
              <div>2 пересадки</div>
            </div>
            <div className={classes.flightCard__value}>
              <div>10:45 – 08:00</div>
              <div>21ч 15м</div>
              <div>HKG, JNB</div>
            </div>
          </div>
          <div className={classes.flightCard__destination}>
            <div className={classes.flightCard__heading}>
              <div>MOW – HKT</div>
              <div>В пути</div>
              <div>2 пересадки</div>
            </div>
            <div className={classes.flightCard__value}>
              <div>10:45 – 08:00</div>
              <div>21ч 15м</div>
              <div>HKG, JNB</div>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
};

// FlightCard.propTypes = {
//   // bla: PropTypes.string,
// };

// FlightCard.defaultProps = {
//   // bla: 'test',
// };

export default FlightCard;
