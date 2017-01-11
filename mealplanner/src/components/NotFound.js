import React from 'react';

import '../css/NotFound.css';

const NotFound = ({ location }) => {
  return (
    <p>The page "{location.pathname}" doesn't exist or was removed.</p>
  );
}

export default NotFound;
