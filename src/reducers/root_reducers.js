import { combineReducers } from "redux";

import loggedinUser from "./loggedin_user";
import searchedUsers from "./searched_users";
import selectedUsers from "./selected_users";

export default combineReducers({
  loggedinUser,
  searchedUsers,
  selectedUsers
});
