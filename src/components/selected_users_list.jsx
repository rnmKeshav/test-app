import React from "react";
import PropTypes from "prop-types";

import UserCard from "./user_card";

const SelectedUsersList = props => {
  let { userProfiles } = props;
  return (
    <div className="pure-g">
      {userProfiles.map((thisProfile, index) => {
        return (
          <div className="pure-u-1-2" key={index}>
            <UserCard {...thisProfile} />
          </div>
        );
      })}
    </div>
  );
};

SelectedUsersList.propTypes = {
  userProfiles: PropTypes.array
};

export default SelectedUsersList;
