import React from 'react';
import { Link } from 'react-router';
import { closeNav } from '../helpers';

import '../css/TopBar.css';

const TopBar = () => {
    return (
      <header className="topbar">
        <div className="container">
        <h1>
          <Link to="/">
            Phil
          <span className="in-the">
            in the
          </span>
            Kitchen
          </Link>
        </h1>
        <nav className="top-nav">
          <input type="checkbox" id="nav-toggle-cbox" />
            <label htmlFor="nav-toggle-cbox" className="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </label>
          <ul>
            <li><Link to="/" activeClassName="active" onClick={closeNav} activeOnlyWhenExact>recipes</Link></li>
            <li><Link to="/about" activeClassName="active" onClick={closeNav} activeOnlyWhenExact>about</Link></li>
            <li><Link to="/contact" activeClassName="active" onClick={closeNav} activeOnlyWhenExact>contact</Link></li>
          </ul>
        </nav>
        </div>
      </header>
    );
}


export default TopBar;
