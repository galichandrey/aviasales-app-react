import React from "react";
// import PropTypes from "prop-types";

import classes from "./FilterFlight.module.scss";

const FilterFlight = () => {
  return (
    <aside className={classes.filterFlight}>
      <div className={classes.filterFlight__header}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <div className={classes.filterFlight__main}>
        <ul>
          <li>
            <label className={`${classes.check} ${classes.option}`}>
              <input
                type="checkbox"
                className={classes.check__input}
              />
              <span className={classes.check__box}></span>
              Все
            </label>
          </li>
          <li>
            <label className={`${classes.check} ${classes.option}`}>
              <input
                type="checkbox"
                className={classes.check__input}
              />
              <span className={classes.check__box}></span>
              Без пересадок
            </label>
          </li>
          <li>
            <label className={`${classes.check} ${classes.option}`}>
              <input
                type="checkbox"
                className={classes.check__input}
              />
              <span className={classes.check__box}></span>1 пересадка
            </label>
          </li>
          <li>
            <label className={`${classes.check} ${classes.option}`}>
              <input
                type="checkbox"
                className={classes.check__input}
              />
              <span className={classes.check__box}></span>2 пересадки
            </label>
          </li>
          <li>
            <label className={`${classes.check} ${classes.option}`}>
              <input
                type="checkbox"
                className={classes.check__input}
              />
              <span className={classes.check__box}></span>3 пересадки
            </label>
          </li>
        </ul>
      </div>
    </aside>
  );
};

// FilterFlight.propTypes = {
//   // bla: PropTypes.string,
// };

// FilterFlight.defaultProps = {
//   // bla: 'test',
// };

export default FilterFlight;
