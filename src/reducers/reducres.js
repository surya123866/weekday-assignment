// reducers/filterReducer.js
import { SET_FILTER_DATA } from "../actions/actions";

const initialState = {
  filterData: {
    roles: [],
    experience: [],
    workMode: [],
    salary: [],
    locations: [],
    techStacks: [],
    companyName: "",
  },
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_DATA:
      return {
        ...state,
        filterData: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
