import React, { Component } from 'react';

import '../css/TopBar.css';

class TopBar extends Component {
  render() {
    return (
      <header className="topbar">
        <div className="container">
        <h1>
          Phil
          <span className="in-the">
            in the
          </span>
          Kitchen
        </h1>
        <nav className="top-nav">
          <ul>
            <li><a href="#">home</a></li>
            <li><a href="#">contact</a></li>
            <li><a href="#">about</a></li>
          </ul>
        </nav>
        </div>
      </header>
    );
  }
}

export default TopBar;
