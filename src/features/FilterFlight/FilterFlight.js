import React from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as actions from "./model/actions";
import classes from "./FilterFlight.module.scss";

const FilterFlight = ({
  state,
  filterAll,
  filterNonStop,
  filterOnePlaneChange,
  filterTwoPlaneChanges,
  filterThreePlaneChange,
}) => {
  const second = state.filterFlightReducer.payload.second;
  const third = state.filterFlightReducer.payload.third;
  const fourth = state.filterFlightReducer.payload.fourth;
  const fifth = state.filterFlightReducer.payload.fifth;

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
                onChange={filterAll}
                checked={
                  state.filterFlightReducer.filter === "FILTER_ALL" || (second && third && fourth && fifth)
                    ? "checked"
                    : ""
                }
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
                onChange={filterNonStop}
                checked={state.filterFlightReducer.filter === "FILTER_ALL" || second ? "checked" : ""}
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
                onChange={filterOnePlaneChange}
                checked={state.filterFlightReducer.filter === "FILTER_ALL" || third ? "checked" : ""}
              />
              <span className={classes.check__box}></span>1 пересадка
            </label>
          </li>
          <li>
            <label className={`${classes.check} ${classes.option}`}>
              <input
                type="checkbox"
                className={classes.check__input}
                onChange={filterTwoPlaneChanges}
                checked={state.filterFlightReducer.filter === "FILTER_ALL" || fourth ? "checked" : ""}
              />
              <span className={classes.check__box}></span>2 пересадки
            </label>
          </li>
          <li>
            <label className={`${classes.check} ${classes.option}`}>
              <input
                type="checkbox"
                className={classes.check__input}
                onChange={filterThreePlaneChange}
                checked={state.filterFlightReducer.filter === "FILTER_ALL" || fifth ? "checked" : ""}
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

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, actions)(FilterFlight);
