import React from "react";
import UserCard from "../containers/loggedin_user_card";
import Searchbox from "../containers/searchbox";
import SelectedUsersList from "../containers/selected_users_card";

const Home = props => {
  return (
    <div className="home">
      <div className="home-background" />
      <div className="pure-g">
        <div className="pure-u-5-24" />
        <div className="pure-u-14-24">
          <div className="u-margin-16--all">
            <UserCard />
          </div>
        </div>
        <div className="pure-u-5-24" />
      </div>
      <div className="pure-g">
        <div className="pure-u-4-24" />
        <div className="pure-u-16-24">
          <Searchbox />
        </div>
        <div className="pure-u-4-24" />
      </div>
      <SelectedUsersList />
    </div>
  );
};

export default Home;
