import React from "react";
import { connect } from "react-redux";

import * as actions from "../model/actions";

import classes from "./SortMenu.module.scss";

const SortMenu = ({ state, sortCheapest, sortOptimal, sortFastest }) => {
  return (
    <ul className={classes.sortMenu}>
      <li
        className={`${classes["sortMenu__item"]}
      ${state?.sortReducer.sort === "SORT_CHEAPEST" ? classes["sortMenu__item--active"] : null}
`}
      >
        <a
          href="#"
          className={`${classes["sortMenu__button"]}
        ${state?.sortReducer.sort === "SORT_CHEAPEST" ? classes["sortMenu__button--active"] : null}
  `}
          onClick={sortCheapest}
        >
          Самый дешевый
        </a>
      </li>
      <li
        className={`${classes["sortMenu__item"]}
          ${state?.sortReducer.sort === "SORT_OPTIMAL" ? classes["sortMenu__item--active"] : null}
    `}
      >
        <a
          href="#"
          className={`${classes["sortMenu__button"]}
            ${state?.sortReducer.sort === "SORT_OPTIMAL" ? classes["sortMenu__button--active"] : null}
      `}
          onClick={sortOptimal}
        >
          Оптимальный
        </a>
      </li>
      <li
        className={`${classes["sortMenu__item"]}
            ${state?.sortReducer.sort === "SORT_FASTEST" ? classes["sortMenu__item--active"] : null}
      `}
      >
        <a
          href="#"
          className={`${classes["sortMenu__button"]}
              ${state?.sortReducer.sort === "SORT_FASTEST" ? classes["sortMenu__button--active"] : null}
        `}
          onClick={sortFastest}
        >
          Самый быстрый
        </a>
      </li>
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, actions)(SortMenu);
