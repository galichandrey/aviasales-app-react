import React from "react";
// import PropTypes from "prop-types";

import classes from "./Tab.module.scss";

const Tab = (props) => {
  return (
    <li
      className={`${classes["tabsMenu__item"]}
      ${props.isActive ? classes["tabsMenu__item--active"] : null}
`}
    >
      <a
        href="#"
        className={`${classes["tabsMenu__button"]}
        ${props.isActive ? classes["tabsMenu__button--active"] : null}
  `}
      >
        {props.tabText}
      </a>
    </li>
  );
};

// Tab.propTypes = {
//   // bla: PropTypes.string,
// };

// Tab.defaultProps = {
//   // bla: 'test',
// };

export default Tab;
