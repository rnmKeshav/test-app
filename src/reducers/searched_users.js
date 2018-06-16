import { actionTypes } from "../helpers/constants";

const initialState = {
  searchText: "",
  searchedData: []
};
const updateSearchedUsers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes["SEARCHED_USERS/CHANGE_HANDLE"]:
      return Object.assign({}, state, { searchText: action.payload.searchText });

    case actionTypes["SEARCHED_USERS/DATA_FETCH_SUCCESS"]:
      return Object.assign({}, state, { searchedData: action.payload.data });

    default:
      return state;
  }
};

export default updateSearchedUsers;
