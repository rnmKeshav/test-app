import React from "react";
import PropTypes from "prop-types";

import Modal from "./modal";

const handleInputChange = props => ev => {
  let { loggedInUserHandleChange } = props;
  let handle = ev.target.value || "";

  loggedInUserHandleChange(handle);
};

const UserHandle = props => {
  let { handle } = props;

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
      <Modal isOpen={true}>Hi this is modal content</Modal>
    </div>
  );
};

UserHandle.propTypes = {
  handle: PropTypes.string,
  loggedInUserHandleChange: PropTypes.func
};
export default UserHandle;
