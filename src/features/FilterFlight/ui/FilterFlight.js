import React, { useEffect } from "react";
import { connect } from "react-redux";

import * as actions from "../model/actions";

import classes from "./FilterFlight.module.scss";

const FilterFlight = ({
  filter,
  filters,
  turnOnFilterAll,
  turnOnFilterNone,
  filterAll,
  filterNonStop,
  filterOnePlaneChange,
  filterTwoPlaneChanges,
  filterThreePlaneChange,
}) => {
  const FILTER_NON_STOP = filters.FILTER_NON_STOP;
  const FILTER_ONE_PLANE_CHANGE = filters.FILTER_ONE_PLANE_CHANGE;
  const FILTER_TWO_PLANE_CHANGES = filters.FILTER_TWO_PLANE_CHANGES;
  const FILTER_THREE_PLANE_CHANGES = filters.FILTER_THREE_PLANE_CHANGES;

  useEffect(() => {
    if (FILTER_NON_STOP && FILTER_ONE_PLANE_CHANGE && FILTER_TWO_PLANE_CHANGES && FILTER_THREE_PLANE_CHANGES) {
      turnOnFilterAll();
    }
    if (!FILTER_NON_STOP && !FILTER_ONE_PLANE_CHANGE && !FILTER_TWO_PLANE_CHANGES && !FILTER_THREE_PLANE_CHANGES) {
      turnOnFilterNone();
    }
  }, [FILTER_NON_STOP, FILTER_ONE_PLANE_CHANGE, FILTER_TWO_PLANE_CHANGES, FILTER_THREE_PLANE_CHANGES]);

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
                  filter === "FILTER_ALL" ||
                  (FILTER_NON_STOP && FILTER_ONE_PLANE_CHANGE && FILTER_TWO_PLANE_CHANGES && FILTER_THREE_PLANE_CHANGES)
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
                checked={filter === "FILTER_ALL" || FILTER_NON_STOP ? "checked" : ""}
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
                checked={filter === "FILTER_ALL" || FILTER_ONE_PLANE_CHANGE ? "checked" : ""}
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
                checked={filter === "FILTER_ALL" || FILTER_TWO_PLANE_CHANGES ? "checked" : ""}
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
                checked={filter === "FILTER_ALL" || FILTER_THREE_PLANE_CHANGES ? "checked" : ""}
              />
              <span className={classes.check__box}></span>3 пересадки
            </label>
          </li>
        </ul>
      </div>
    </aside>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filterFlightReducer.filters,
    filter: state.filterFlightReducer.filter,
  };
};

export default connect(mapStateToProps, actions)(FilterFlight);
