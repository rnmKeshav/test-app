import React from "react";
import PropTypes from "prop-types";

import UserCard from "../containers/user_card";
import UserHandle from "../containers/user_handle";

import Home from "./home";

class Main extends React.Component {
  componentDidMount() {
    this.props.updateLoggedinUserDetails();
  }

  shouldComponentUpdate() {
    return true;
  }
  render() {
    let { isUserDataAvailable } = this.props;

    return <div>{isUserDataAvailable ? <Home /> : <UserHandle />}</div>;
  }
}

Main.propTypes = {
  isUserDataAvailable: PropTypes.bool,
  updateLoggedinUserDetails: PropTypes.func
};

export default Main;
