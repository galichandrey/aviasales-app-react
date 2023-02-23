import React from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";

// eslint-disable-next-line no-unused-vars
import * as actions from "./model/actions";
import classes from "./TabsMenu.module.scss";

const TabsMenu = ({ state, sortCheapest, sortOptimal, sortFastest }) => {
  console.log("state >>>", state);

  return (
    <ul className={classes.tabsMenu}>
      <li
        className={`${classes["tabsMenu__item"]}
      ${state?.tabReducer.sort === "SORT_CHEAPEST" ? classes["tabsMenu__item--active"] : null}
`}
      >
        <a
          href="#"
          className={`${classes["tabsMenu__button"]}
        ${state?.tabReducer.sort === "SORT_CHEAPEST" ? classes["tabsMenu__button--active"] : null}
  `}
          onClick={sortCheapest}
        >
          Самый дешевый
        </a>
      </li>
      <li
        className={`${classes["tabsMenu__item"]}
          ${state?.tabReducer.sort === "SORT_OPTIMAL" ? classes["tabsMenu__item--active"] : null}
    `}
      >
        <a
          href="#"
          className={`${classes["tabsMenu__button"]}
            ${state?.tabReducer.sort === "SORT_OPTIMAL" ? classes["tabsMenu__button--active"] : null}
      `}
          onClick={sortOptimal}
        >
          Оптимальный
        </a>
      </li>
      <li
        className={`${classes["tabsMenu__item"]}
            ${state?.tabReducer.sort === "SORT_FASTEST" ? classes["tabsMenu__item--active"] : null}
      `}
      >
        <a
          href="#"
          className={`${classes["tabsMenu__button"]}
              ${state?.tabReducer.sort === "SORT_FASTEST" ? classes["tabsMenu__button--active"] : null}
        `}
          onClick={sortFastest}
        >
          Самый быстрый
        </a>
      </li>
    </ul>
  );
};

// TabsMenu.propTypes = {
//   // bla: PropTypes.string,
// };

// TabsMenu.defaultProps = {
//   // bla: 'test',
// };

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, actions)(TabsMenu);
