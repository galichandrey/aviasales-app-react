import React from "react";
import { connect } from "react-redux";

import * as actions from "../model/action";

import classes from "./LoadMore.module.scss";

const LoadMore = (state) => {
  const { loadMoreTickets } = state;

  return (
    <button
      className={`${classes["main__button"]} ${classes["main__button--loadmore"]}`}
      onClick={loadMoreTickets}
    >
      Показать ещё 5 билетов{" "}
    </button>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, actions)(LoadMore);
