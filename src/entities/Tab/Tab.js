import React from "react";
// import PropTypes from "prop-types";

import classes from "./Tab.module.scss";

const Tab = () => {
  return (
    <>
      <li className={`${classes["tabsMenu__item"]} ${classes["tabsMenu__item--cheapest"]}`}>
        <a
          href="#"
          className={classes["tabsMenu__button"]}
        >
          Самый дешевый
        </a>
      </li>
      <li className={`${classes["tabsMenu__item"]} ${classes["tabsMenu__item--fastest"]}`}>
        <a
          href="#"
          className={classes["tabsMenu__button"]}
        >
          Оптимальный
        </a>
      </li>
      <li className={`${classes["tabsMenu__item"]} ${classes["tabsMenu__item--optimal"]}`}>
        <a
          href="#"
          className={classes["tabsMenu__button"]}
        >
          Самый быстрый
        </a>
      </li>
    </>
  );
};

// Tab.propTypes = {
//   // bla: PropTypes.string,
// };

// Tab.defaultProps = {
//   // bla: 'test',
// };

export default Tab;
