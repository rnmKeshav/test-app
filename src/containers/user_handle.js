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
  return {
    loggedInUserHandleChange: handle => {
      dispatch(getUserData({ handle }));
      dispatch({
        type: actionTypes["LOGGEDIN_USER/CHANGE_HANDLE"],
        payload: {
          handle
        }
      });
    },

    handleConfirmClick: () => {
      dispatch({
        type: actionTypes["LOGGEDIN_USER/UPDATE_TO_LOCALSTORE"]
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserHandle);
