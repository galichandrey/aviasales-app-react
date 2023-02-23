import React from "react";

// import Counter from "../entities/Counter";
import Logo from "../entities/Logo";
import TabsMenu from "../features/TabsMenu/TabsMenu";
import FlightCardList from "../features/FlightCardList";
import FilterFlight from "../features/FilterFlight";
import LoadMore from "../entities/LoadMore";

import classes from "./style.module.scss";

// let state = reducer(undefined, {});

// state = reducer(state, { type: "INC" });
// console.log(state);
// state = reducer(state, { type: "INC" });
// console.log(state);

// const store = createStore(reducer);
// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch({ type: "INC" });
// store.dispatch({ type: "INC" });

// const initialState = 0;

// const incDispatch = bindActionCreators(inc, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);

// const { incDispatch, decDispatch, rndDispatch } = bindActionCreators(
//   {
//     incDispatch: inc,
//     decDispatch: dec,
//     rndDispatch: rndInc,
//   },
//   dispatch
// );

// const onDec = () => {
//   dispatch(dec());
// };

// const onInc = () => {
//   dispatch(inc());
// };

// const rndInc = () => {
//   const payload = Math.floor(Math.random() * 10);
//   rnd(payload);
// };

//<Counter />

const App = () => {
  return (
    <div className={classes.container}>
      <Logo />
      <div className={classes.wrapper}>
        <FilterFlight />
        <div className={classes.main}>
          <TabsMenu />
          <FlightCardList />
          <LoadMore />
        </div>
      </div>
    </div>
  );
};

export default App;
