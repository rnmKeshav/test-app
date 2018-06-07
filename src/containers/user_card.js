import {connect} from 'react-redux';

import UserCard from '../components/user_card';

const mapStateToProps = (state) => {
  let {user} = state;
  let {details} = user;
  let {first_name} = details;
  
  return {
    name: first_name
  };
};

export default connect(mapStateToProps)(UserCard);
