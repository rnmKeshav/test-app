import { connect } from "react-redux";

import { actionTypes } from "../helpers/constants";
import getUserData from "../actions/get_user_data";

import UserHandle from "../components/user_handle";

const mapStateToProps = state => {
  let { handle, isModalOpen, details } = state.loggedinUser;
  let { login, name } = details;

  return {
    handle,
    header: `Hello ${name}`,
    body: `Please confirm if ${login} is your github handle`,
    isModalOpen
  };
};

const mapDispatchToProps = dispatch => {
  let timeout;
  return {
    loggedInUserHandleChange: handle => {
      clearTimeout(timeout);
      dispatch({
        type: actionTypes["LOGGEDIN_USER/CHANGE_HANDLE"],
        payload: {
          handle
        }
      });

      timeout = setTimeout(function() {
        dispatch(getUserData({ handle }));
      }, 2000);
    },

    getLogginUserHandle: handle => {
      if (!timeout) {
        dispatch(getUserData({ handle }));
      }
      clearTimeout(timeout);
    },

    handleConfirmClick: () => {
      dispatch({
        type: actionTypes["LOGGEDIN_USER/UPDATE_TO_LOCALSTORE"]
      });
    },

    handleCancelClick: () => {
      dispatch({
        type: actionTypes["LOGGEDIN_USER/CLOSE_CONFIRMATION_MODAL"]
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserHandle);
