import { actionTypes } from "../helpers/constants";

const initialState = {
  users: []
};

const updateSelectedUsers = (state = initialState, action) => {
  let selectedUser;

  switch (action.type) {
    case actionTypes["SELECTED_USER/ADD_NEW"]:
      selectedUser = state.users.find(thisuser => {
        return thisuser.login === action.payload.user.login;
      });

      if (selectedUser) {
        Object.assign(selectedUser, action.payload.user);
      } else {
        state.users.push(action.payload.user);
      }

      return Object.assign({}, state);

    default:
      return state;
  }
};

export default updateSelectedUsers;
