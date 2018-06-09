import { connect } from "react-redux";
import { actionTypes } from "../helpers/constants";

import UserHandle from "../components/user_handle";

const mapStateToProps = state => {
  let { handle } = state.loggedinUser;

  return {
    handle
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loggedInUserHandleChange: handle => {
      dispatch({
        type: actionTypes["LOGGEDIN_USER/CHANGE_HANDLE"],
        payload: {
          handle
        }
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserHandle);