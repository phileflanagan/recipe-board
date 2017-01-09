import React, { Component } from 'react';
import './App.css';

import Recipes from './Recipes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="topbar">
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

          </header>
        <Recipes />
      </div>
    );
  }
}

export default App;
