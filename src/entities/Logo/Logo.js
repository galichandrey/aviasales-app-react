import React from "react";
// import PropTypes from "prop-types";
//import { Test } from './Logo.styles';

import classes from "./Logo.module.scss";

const Logo = () => (
  <div className={classes.logo}>
    <img src="./Logo.svg" />
  </div>
);

// Logo.propTypes = {
//   // bla: PropTypes.string,
// };

// Logo.defaultProps = {
//   // bla: 'test',
// };

export default Logo;
