// actions/filterActions.js
export const SET_FILTER_DATA = "SET_FILTER_DATA";

export const setFilterData = (filterData) => ({
  type: SET_FILTER_DATA,
  payload: filterData,
});
