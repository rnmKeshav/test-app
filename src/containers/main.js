import { connect } from "react-redux";
import _isEmpty from "lodash.isempty";

import { actionTypes } from "../helpers/constants";

import Main from "../components/main";

const mapStateToProps = props => {
  let localStorageData = window.localStorage.getItem("loggedinUser");
  let isUserDataAvailable = !_isEmpty(localStorageData);

  return {
    isUserDataAvailable
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateLoggedinUserDetails: () => {
      dispatch({
        type: actionTypes["LOGGEDIN_USER/UPDATE_DETAIL_FROM_LOCALSTORAGE"]
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
