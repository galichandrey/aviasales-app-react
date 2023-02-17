import React from "react";
// import PropTypes from "prop-types";

import classes from "./LoadMore.module.scss";

const LoadMore = () => (
  <button className={`${classes["main__button"]} ${classes["main__button--loadmore"]}`}>Показать ещё 5 билетов </button>
);

// LoadMore.propTypes = {
//   // bla: PropTypes.string,
// };

// LoadMore.defaultProps = {
//   // bla: 'test',
// };

export default LoadMore;
