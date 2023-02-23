export const filterAll = (e) => {
  if (e.target.checked) {
    console.log(e.target.checked);
    return {
      type: "FILTER_ALL",
      payload: { first: true, second: true, third: true, fourth: true, fifth: true },
    };
  } else {
    return {
      type: "FILTER_NONE",
      payload: { first: false, second: false, third: false, fourth: false, fifth: false },
    };
  }
};
export const filterNonStop = (e) => ({
  type: "FILTER_NON_STOP",
  payload: { first: false, second: !!e.target.checked },
});
export const filterOnePlaneChange = (e) => ({
  type: "FILTER_ONE_PLANE_CHANGE",
  payload: { first: false, third: !!e.target.checked },
});
export const filterTwoPlaneChanges = (e) => ({
  type: "FILTER_TWO_PLANE_CHANGES",
  payload: { first: false, fourth: !!e.target.checked },
});
export const filterThreePlaneChange = (e) => ({
  type: "FILTER_THREE_PLANE_CHANGES",
  payload: { first: false, fifth: !!e.target.checked },
});
