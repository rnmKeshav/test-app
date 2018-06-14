import React from "react";
import PropTypes from "prop-types";

import ConfirmationModal from "./confirmation_modal";

const handleInputChange = props => ev => {
  let { loggedInUserHandleChange } = props;
  let handle = ev.target.value || "";

  loggedInUserHandleChange(handle);
};

const UserHandle = props => {
  let { handle, handleConfirmClick, isModalOpen } = props;

  return (
    <div className="">
      <div className="background-blurred" />
      <div className="user-handle">
        <div>Hi, Please Enter your github handle</div>
        <input
          type="text"
          className="input u-margin-8--all"
          placeholder="rnmKeshav"
          value={handle}
          onChange={handleInputChange(props)}
        />
      </div>
      <ConfirmationModal
        isOpen={isModalOpen}
        header="Hi this is header"
        body="Hi this is body"
        onConfirmClick={handleConfirmClick}
      />
    </div>
  );
};

UserHandle.propTypes = {
  handle: PropTypes.string,
  isModalOpen: PropTypes.bool,
  loggedInUserHandleChange: PropTypes.func,
  handleConfirmClick: PropTypes.func
};
export default UserHandle;
