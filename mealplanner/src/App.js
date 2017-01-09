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

          </header>
        <Recipes />
      </div>
    );
  }
}

export default App;
