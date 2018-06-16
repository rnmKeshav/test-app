import { connect } from "react-redux";

import { actionTypes } from "../helpers/constants";

import getSearchedUsers from "../actions/get_searched_users";
import SearchBox from "../components/searchbox";

const getSelectedUser = payload => (dispatch, getState) => {
  let { searchedUsers } = getState();
  let { searchedData } = searchedUsers;

  return searchedData.find(thisProfile => {
    return thisProfile.login === payload.value;
  });
};

const mapStateToProps = state => {
  let { searchedUsers } = state;
  let { searchText, searchedData } = searchedUsers;

  let options = searchedData.map(thisProfile => {
    return {
      label: thisProfile.name || thisProfile.login,
      value: thisProfile.login
    };
  });

  return {
    searchText,
    options
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleUserSearch: searchText => {
      dispatch({
        type: actionTypes["SEARCHED_USERS/CHANGE_HANDLE"],
        payload: { searchText }
      });

      dispatch(getSearchedUsers({ searchText }));
    },
    handleUserSelect: option => {
      let user = dispatch(getSelectedUser(option));
      dispatch({
        type: actionTypes["SELECTED_USER/ADD_NEW"],
        payload: {
          user
        }
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
