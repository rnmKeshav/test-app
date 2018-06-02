import React from 'react';
import ReactDOM from 'react-dom';

import CSS from '../assets/stylesheets/main.scss';

class FirstComponent extends React.Component {
  render() {
    return (
      <div>
        Hi, This is first component
      </div>
    )
  }
};

ReactDOM.render(<FirstComponent />, document.getElementById('app'));
