import { connect } from "react-redux";

import SelectedUserList from "../components/selected_users_list";

const mapStateToProps = state => {
  let { selectedUsers } = state;

  let userProfiles = selectedUsers.users.map(thisProfile => {
    let { name, avatar_url, login, repos_url, html_url, subscriptions_url, bio } = thisProfile;

    return {
      name: name,
      avatar: avatar_url,
      handle: login,
      bio: !!bio ? bio : undefined,
      profileUrl: html_url,
      reposUrl: repos_url,
      subscriptionsUrl: subscriptions_url
    };
  });

  return {
    userProfiles
  };
};

export default connect(mapStateToProps)(SelectedUserList);
