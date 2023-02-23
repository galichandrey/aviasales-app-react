// eslint-disable-next-line no-unused-vars
// const tabMenu = [
//   {
//     key: 1,
//     tabText: "Самый дешевый",
//     isActive: false,
//   },
//   {
//     key: 2,
//     tabText: "Оптимальный",
//     isActive: false,
//   },
//   {
//     key: 3,
//     tabText: "Самый быстрый",
//     isActive: true,
//   },
// ];

const initialState = {
  sort: "SORT_CHEAPEST",
};

export const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SORT_CHEAPEST":
      console.log(state);
      return {
        ...state,
        sort: "SORT_CHEAPEST",
      };
    case "SORT_OPTIMAL":
      console.log("sort: optimal");
      return {
        ...state,
        sort: "SORT_OPTIMAL",
      };
    case "SORT_FASTEST":
      console.log("sort: fastest");
      return {
        ...state,
        sort: "SORT_FASTEST",
      };
    default:
      return state;
  }
};
