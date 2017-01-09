import React, { Component } from 'react';
import '../css/App.css';

import TopBar from './TopBar'
import Recipes from './Recipes'
import samples from '../sample-items'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <Recipes recipeList={samples} />
        <footer><p>&copy;Copyright 2017 Phil Flanagan</p></footer>
      </div>
    );
  }
}

export default App;
