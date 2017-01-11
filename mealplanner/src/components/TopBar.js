import React, { Component } from 'react';
import { Link } from 'react-router';

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
          <input type="checkbox" id="nav-toggle-cbox" />
            <label htmlFor="nav-toggle-cbox" className="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </label>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/contact">contact</Link></li>
          </ul>
        </nav>
        </div>
      </header>
    );
  }
}

export default TopBar;
