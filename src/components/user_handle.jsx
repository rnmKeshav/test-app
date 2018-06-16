import React from "react";
import PropTypes from "prop-types";

import ConfirmationModal from "./confirmation_modal";

const handleInputChange = props => ev => {
  let { loggedInUserHandleChange } = props;
  let handle = ev.target.value || "";

  loggedInUserHandleChange(handle);
};

const handleInputBlur = props => ev => {
  let { getLogginUserHandle } = props;
  let handle = ev.target.value || "";

  getLogginUserHandle(handle);
};

const UserHandle = props => {
  let { handle, handleConfirmClick, isModalOpen, header, body, handleCancelClick } = props;

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
          onBlur={handleInputBlur(props)}
        />
      </div>
      <ConfirmationModal
        isOpen={isModalOpen}
        header={header}
        body={body}
        onConfirmClick={handleConfirmClick}
        onCancelClick={handleCancelClick}
      />
    </div>
  );
};

UserHandle.propTypes = {
  handle: PropTypes.string,
  isModalOpen: PropTypes.bool,
  header: PropTypes.string,
  body: PropTypes.string,
  loggedInUserHandleChange: PropTypes.func,
  getLogginUserHandle: PropTypes.func,
  handleCancelClick: PropTypes.func,
  handleConfirmClick: PropTypes.func
};
export default UserHandle;
