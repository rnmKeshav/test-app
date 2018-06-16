import React from "react";
import UserCard from "../containers/user_card";

const Home = props => {
  return (
    <div className="home">
      <div className="home-background" />
      <div>
        <UserCard />
      </div>
    </div>
  );
};

export default Home;
