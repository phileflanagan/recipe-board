// import React, { Component } from 'react';
import React from 'react';

import '../css/NotFound.css';

const NotFound = (props) => {
  return (
    <p>The page "{props.location.pathname}" doesn't exist or was removed.</p>
  );
}

// class NotFound extends Component {
//   render() {
//     return (
//       <p>The page you are looking: "{this.props.location.pathname}" for doesn't exist or was removed.</p>
//     );
//   }
// }

export default NotFound;
