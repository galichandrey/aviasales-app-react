import React from "react";
// import PropTypes from "prop-types";

import Tab from "../../entities/Tab";

import classes from "./TabsMenu.module.scss";

const TabsMenu = () => {
  return (
    <ul className={classes.tabsMenu}>
      <Tab />
    </ul>
  );
};

// TabsMenu.propTypes = {
//   // bla: PropTypes.string,
// };

// TabsMenu.defaultProps = {
//   // bla: 'test',
// };

export default TabsMenu;
