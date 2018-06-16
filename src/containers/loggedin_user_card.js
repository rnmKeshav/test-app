import { connect } from "react-redux";

import UserCard from "../components/user_card";

const mapStateToProps = state => {
  let { loggedinUser } = state;

  let {
    name,
    avatar_url,
    login,
    repos_url,
    html_url,
    subscriptions_url,
    bio
  } = loggedinUser.details;

  return {
    name: name,
    avatar: avatar_url,
    handle: login,
    bio: !!bio ? bio : undefined,
    profileUrl: html_url,
    reposUrl: repos_url,
    subscriptionsUrl: subscriptions_url
  };
};

export default connect(mapStateToProps)(UserCard);
