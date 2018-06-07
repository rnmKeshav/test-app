import React from 'react';
import PropTypes from 'prop-types';

const UserCard = (props) => {
  let {name } = props;

  return (
    <div>
      {name}
    </div>
  );
};

UserCard.propTypes = {
  name: PropTypes.string
}

export default UserCard;
