import React from "react";
import PropTypes from "prop-types";

import defaultGithubAvatar from "../../assets/images/default-github-avatar.png";

var UserCard = props => {
  let {
    name,
    avatar = defaultGithubAvatar,
    handle,
    profileUrl,
    reposUrl,
    bio,
    subscriptionsUrl
  } = props;

  return (
    <div className="user-card">
      <div className="pure-g">
        <div className="pure-u-2-24">
          <img src={avatar} className="user-card-avatar" />
        </div>
        <div className="pure-u-22-24">
          <div className="user-card-name">
            {name}&nbsp;({handle})
          </div>
          <div className="user-card-bio">{bio}</div>
        </div>
      </div>
      <div className="user-card-body">
        <div className="pure-g">
          <div className="pure-u-1-3 u-t-center">
            <a href={profileUrl}>Profile Url</a>
          </div>
          <div className="pure-u-1-3 u-t-center">
            <a href={reposUrl}>Repos</a>
          </div>
          <div className="pure-u-1-3 u-t-center">
            <a href={subscriptionsUrl}>Subscription Url</a>
          </div>
        </div>
      </div>
    </div>
  );
};

UserCard.defaultProps = {
  bio: "Bio not available for profile"
};
UserCard.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  handle: PropTypes.string,
  bio: PropTypes.string,
  profileUrl: PropTypes.string,
  reposUrl: PropTypes.string,
  subscriptionsUrl: PropTypes.string
};

export default UserCard;
