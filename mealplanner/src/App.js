import React, { Component } from 'react';
import './App.css';

import Recipes from './Recipes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Recipe Board</h1>
        <Recipes />
      </div>
    );
  }
}

export default App;
